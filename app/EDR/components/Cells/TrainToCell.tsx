import React from "react";
import {CellLineData} from "./CellLineData";
import {TimeTableRow} from "../../index";
import {tableCellCommonClassnames} from "../TrainRow";

type Props = {
    ttRow: TimeTableRow;
    headerSeventhColRef: any;
    secondaryPostData: TimeTableRow[];
}
export const TrainToCell: React.FC<Props> = ({headerSeventhColRef, ttRow, secondaryPostData}) => (
    <td className={tableCellCommonClassnames} ref={headerSeventhColRef}>
        <CellLineData ttRow={ttRow} />
        { secondaryPostData.map((spd: TimeTableRow, i: number) => <span key={spd.train_number + i}><hr /><CellLineData ttRow={spd} /></span>)}
    </td>
)
