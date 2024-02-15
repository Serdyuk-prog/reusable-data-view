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
import { AddItem, ShowItem } from "../Actions";
import React from "react";
import { User } from "../../../api";

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
    data: User[];
    showFilters?: boolean;
    actionButtons?: boolean;
    showPagination?: boolean;
}

export const TableView: React.FC<TableViewProps> = ({
    data,
    showPagination,
    actionButtons,
    showFilters,
}) => {
    const [isModalOpen, setIsModalOpen] = React.useState<boolean | undefined>(
        false
    );
    const [clicked, setClicked] = React.useState<User>();

    const actionButton = actionButtons && <AddItem />;

    return (
        <Box pad="large" gap="medium">
            <Grid
                pad="large"
                columns={[["large", "large", "large"]]}
                justifyContent="center"
                gap="large"
            >
                <Data data={data} properties={properties}>
                    {showFilters && (
                        <>
                            <Box direction="row">
                                <Toolbar>
                                    <DataSearch
                                        id={`show-number-${new Date().getTime()}`}
                                    />
                                    <DataFilters layer />
                                </Toolbar>
                                {actionButton}
                            </Box>
                            <DataSummary />
                        </>
                    )}
                    {!showFilters && (
                        <Box
                            direction="row"
                            justify="center"
                            margin={{ bottom: "small" }}
                        >
                            {actionButton}
                        </Box>
                    )}
                    {(actionButtons && (
                        <DataTable
                            columns={columns}
                            verticalAlign={{ body: "top" }}
                            onClickRow={(event) => {
                                setIsModalOpen(true);
                                setClicked(event.datum);
                            }}
                        />
                    )) || (
                        <DataTable
                            columns={columns}
                            verticalAlign={{ body: "top" }}
                        />
                    )}
                    {showPagination && (
                        <Pagination
                            step={5}
                            alignSelf="center"
                            margin={{ top: "medium" }}
                        />
                    )}
                </Data>
            </Grid>
            <ShowItem
                user={clicked as User}
                open={isModalOpen}
                setOpen={setIsModalOpen}
            />
        </Box>
    );
};
