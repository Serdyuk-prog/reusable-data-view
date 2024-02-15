// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { CardView } from "./CardView";
import { TableView } from "./TableView/TableView";

// import { TableView } from "./TableView";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface ReusableComponentProps {
    tableView?: boolean;
    cardView?: boolean;
}

export const ReusableComponent: React.FC<ReusableComponentProps> = () => {
    return (
        <div>
            {/* <CardGrid showPagination /> */}
            {/* <TableView /> */}
            <CardView />
            <TableView />
        </div>
    );
};
