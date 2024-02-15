/* eslint-disable @typescript-eslint/no-unused-vars */

import {
    Box,
    Data,
    DataFilters,
    DataSearch,
    DataSummary,
    DataTable,
    Grid,
    Pagination,
    Toolbar,
} from "grommet";
import { User } from "../../../api/data.types";
import { AddItem } from "../Actions";

const properties = {
    name: { label: "Name", search: true },
    username: { label: "Username", search: true },
    email: { label: "Email", search: true },
};

const columns = [
    {
        property: "name",
        header: "Name",
        primary: true,
    },
    {
        property: "username",
        header: "Username",
    },
    {
        property: "email",
        header: "Email",
    },
];

interface TableViewProps {
    showPagination?: boolean;
    data: User[];
}

export const TableView: React.FC<TableViewProps> = ({
    showPagination = true,
    data,
}) => {
    return (
        <Box pad="large" gap="medium">
            <Grid
                pad="large"
                columns={[["small", "large"]]}
                justifyContent="center"
                gap="large"
            >
                <Data data={data} properties={properties}>
                    <Box direction="row">
                        <Toolbar>
                            <DataSearch />
                            <DataFilters layer />
                        </Toolbar>
                        <AddItem />
                    </Box>
                    <DataSummary />
                    <DataTable
                        columns={columns}
                        verticalAlign={{ body: "top" }}
                    />
                    <Pagination
                        step={5}
                        alignSelf="center"
                        margin={{ top: "medium" }}
                    />
                </Data>
            </Grid>
        </Box>
    );
};
