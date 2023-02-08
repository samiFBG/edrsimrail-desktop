import React from "react";
import {Spinner} from "flowbite-react";
import {useTranslation} from "react-i18next";
import { TimeTableRow } from "..";
import { Station, Train } from "@simrail/types";
import { Dictionary } from "lodash";

type Props = {
    timetable: TimeTableRow[];
    trains: Train[] | undefined;
    stations: Dictionary<Station>;
}
export const LoadingScreen: React.FC<Props> = ({timetable, trains, stations}: Props) => {
    const {t} = useTranslation();

    return <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <div>{t('EDR_LOADING_main_message')}</div>
        <div>{t("EDR_LOADING_schedules")}: {!timetable ? <Spinner size="xs"/> : <>✓</>}</div>
        <div>{t("EDR_LOADING_stations")}: {!stations ? <Spinner size="xs"/> : <>✓</>}</div>
        <div>{t("EDR_LOADING_trains")}: {!trains ? <Spinner size="xs"/> : <>✓</>}</div>
    </div>
}