import React from "react";
import {Badge, Button} from "flowbite-react";
import { useSnackbar } from "notistack";
import World from "../../../sounds/world.svg";
import {tableCellCommonClassnames} from "../TrainRow";
import {getPlayer} from "../../../api/api";
import {useTranslation} from "react-i18next";
import {TimeTableRow} from "../../index";
import { DetailedTrain } from "../../functions/trainDetails";
import {configByLoco} from "../../../config/trains";
import Tooltip from "rc-tooltip";

const getPlayerDetails = (controlledBy: string | null | undefined, setState: (value: any | undefined) => void) => {
    if (!controlledBy) {
        setState(undefined);
        return;
    }
    getPlayer(controlledBy).then((res) => {
        if (res[0])
            setState(res[0]);
    }).catch(() => {
        setTimeout(() => getPlayerDetails(controlledBy, setState), 1000);
    })
}

type Props = {
    ttRow: TimeTableRow;
    trainDetails: DetailedTrain;
    trainBadgeColor: string;
    hasEnoughData: boolean;
    setModalTrainId: (trainId: string | undefined) => void;
    firstColRef: any;
    distanceFromStation: number;
    currentDistance: number;
    previousDistance: number | undefined;
    trainHasPassedStation: boolean;
    isWebpSupported: boolean;
}
export const TrainInfoCell: React.FC<Props> = ({
       ttRow, trainDetails, hasEnoughData, trainBadgeColor,
       distanceFromStation, previousDistance, currentDistance, trainHasPassedStation,
       setModalTrainId, firstColRef, isWebpSupported
}) => {
    const {t} = useTranslation();
    const { enqueueSnackbar } = useSnackbar();
    const [playerSteamInfo, setPlayerSteamInfo] = React.useState<any>();
    const ETA = trainDetails?.TrainData?.Velocity ? (distanceFromStation / trainDetails.TrainData.Velocity) * 60 : undefined;
    const controlledBy = trainDetails?.TrainData?.ControlledBySteamID;
    const trainConfig = configByLoco[trainDetails?.Vehicles[0]];
    const trainIcon = isWebpSupported ? trainConfig?.iconWebp : trainConfig?.icon;

    React.useEffect(() => getPlayerDetails(controlledBy, setPlayerSteamInfo), [controlledBy]);

    const CopyToClipboard = (stringToCopy: string) => {
        navigator.clipboard.writeText(stringToCopy);
        enqueueSnackbar(t('EDR_TRAINROW_copied'), { preventDuplicate: true, variant: 'success' });
    }

    return (
        <td className={tableCellCommonClassnames} ref={firstColRef}>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Tooltip placement="top" overlay={<span>{t("EDR_TRAINROW_click_to_copy")}</span>}>
                        <Badge color={trainBadgeColor} size="sm"><span className="!font-bold text-lg cursor-pointer" onClick={() => CopyToClipboard(ttRow.train_number)}>{ttRow.train_number}</span></Badge>
                    </Tooltip>
                    { trainDetails && <span className="ml-2">
                        <Tooltip placement="right" overlay={<span>{t("EDR_TRAINROW_show_on_map")}</span>}>
                            <Button size="xs" onClick={() => !!trainDetails && setModalTrainId(ttRow.train_number)}><img src={World} height={16} width={16} alt="Show on map"/></Button>
                        </Tooltip>
                    </span> }
                </div>
                <div className="flex md:inline">
                    <div className="flex justify-end">
                        {trainConfig?.icon && <span className="hidden lg:block"><img src={trainIcon} height={40} width={94} alt="train-icon"/></span>}
                    </div>
                    <div className="flex justify-end">
                        {
                            playerSteamInfo?.pseudo
                                ? <span className="flex items-center"><span className="hidden md:inline">{playerSteamInfo?.pseudo}</span><img className="mx-2" width={16} src={playerSteamInfo.avatar} alt="avatar" /></span>
                                : <></>
                        }
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row">
                {  distanceFromStation
                    ? <div className="inline-flex"><span className="hidden md:inline">{t("EDR_TRAINROW_position_at")}&nbsp;</span>{distanceFromStation}km&nbsp;<div className="max-w-[70px] md:max-w-full max-h-[1rem] overflow-hidden">{trainDetails?.closestStation}</div></div>
                    : <>{t('EDR_TRAINROW_train_offline')}</>
                }
                &nbsp;
                {
                    distanceFromStation
                        ? previousDistance === currentDistance
                            ? <>{t('EDR_TRAINROW_train_stopped')}</>
                            : trainHasPassedStation ?
                                <>{t("EDR_TRAINROW_train_away")}</>
                                : ETA && Math.round(ETA) < 20
                                    ? <>{Math.round(ETA)}{t("EDR_TRAINROW_train_minutes")}</>
                                    : trainDetails?.TrainData?.Velocity === 0 ? <>{t('EDR_TRAINROW_train_stopped')}</> : undefined
                        : undefined
                }
            </div>
        </td>
    )
}
