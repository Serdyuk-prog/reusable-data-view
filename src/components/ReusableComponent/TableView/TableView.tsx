/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Cards,
    Data,
    DataFilters,
    DataSearch,
    DataSummary,
    DataTable,
    Grid,
    Heading,
    Pagination,
    Text,
    Toolbar,
} from "grommet";
import { User } from "../../../api/data.types";

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
    const [currentData, setCurrentData] = useState<User[]>([]);
    const [indices, setIndices] = useState([0, 5]);

    useEffect(() => {
        setCurrentData(data.slice(0, 5));
        if (!showPagination) {
            setCurrentData(data);
        }
    }, [data, showPagination]);

    const handleChange = ({ startIndex, endIndex }) => {
        const nextData = data.slice(startIndex, endIndex);
        setCurrentData(nextData);
        setIndices([startIndex, Math.min(endIndex, data.length)]);
    };

    return (
        <Box pad="large" gap="medium">
            <Grid
                pad="large"
                columns={[["small", "large"]]}
                justifyContent="center"
                gap="large"
            >
                <Data data={currentData} properties={properties}>
                    <Toolbar>
                        <DataSearch />
                        <DataFilters layer />
                    </Toolbar>
                    <DataSummary />
                    <DataTable
                        columns={columns}
                        verticalAlign={{ body: "top" }}
                    />
                </Data>
            </Grid>
            {showPagination && (
                <Box align="center" direction="row" justify="between">
                    <Text>
                        Showing {indices[0] + 1} - {indices[1]} of {data.length}
                    </Text>
                    <Pagination
                        numberItems={data.length}
                        onChange={handleChange}
                        step={5}
                    />
                </Box>
            )}
        </Box>
    );
};
