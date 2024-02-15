/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from "react";
import getData from "../../api/data-crud";
import { CardView } from "./CardView";
import { TableView } from "./TableView/TableView";
import { User } from "../../api/data.types";

// import { TableView } from "./TableView";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface ReusableComponentProps {
    tableView?: boolean;
    cardView?: boolean;
}

export const ReusableComponent: React.FC<ReusableComponentProps> = () => {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        getData().then((data) => {
            if (data) setData(data);
        });
    }, []);
    return (
        <div>
            {/* <CardGrid showPagination /> */}
            {/* <TableView /> */}
            {/* <CardView data={data} /> */}
            <TableView data={data} />
        </div>
    );
};
