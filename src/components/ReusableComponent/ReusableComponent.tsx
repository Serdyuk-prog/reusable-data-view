/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, ReactNode } from "react";
import { CardView } from "./CardView";

import { User, getData } from "../../api";
import { TableView } from "./TableView";

interface ReusableComponentProps {
    tableView?: boolean;
    cardView?: boolean;
    showFilters?: boolean;
    actionButtons?: boolean;
    showPagination?: boolean;
    children?: ReactNode;
}

export const ReusableComponent: React.FC<ReusableComponentProps> = ({
    cardView,
    tableView,
    showPagination,
    actionButtons,
    showFilters,
    children,
}) => {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        getData().then((data) => {
            if (data) setData(data);
        });
    }, []);
    return (
        <>
            {cardView && (
                <CardView
                    data={data}
                    showPagination={showPagination}
                    actionButtons={actionButtons}
                    showFilters={showFilters}
                />
            )}
            {tableView && (
                <TableView
                    data={data}
                    showPagination={showPagination}
                    actionButtons={actionButtons}
                    showFilters={showFilters}
                />
            )}
            {children}
        </>
    );
};
