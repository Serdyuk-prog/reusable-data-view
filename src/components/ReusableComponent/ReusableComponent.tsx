import { useState, useEffect } from "react";
import { CardView } from "./CardView";
import { TableView } from "./TableView/TableView";
import { User } from "../../api/data.types";
import { getData } from "../../api";

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
            <CardView data={data} />
            <TableView data={data} />
        </div>
    );
};
