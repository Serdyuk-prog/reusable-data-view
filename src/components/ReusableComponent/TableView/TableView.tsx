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
import { DATA } from "../../../data";

// const data = DATA;

const data = [
    {
        id: 1,
        name: "Alpha",
        location: { city: "Athens", country: "Greece" },
        economy: { GDP: 100 },
        colors: ["white", "blue"],
    },
    {
        id: 2,
        name: "Beta",
        location: { city: "Bangkok", country: "Thailand" },
        economy: { GDP: 150 },
        colors: ["red", "white", "blue"],
    },
    {
        id: 3,
        name: "Theta",
        location: { city: "Berlin", country: "Germany" },
        economy: { GDP: 200 },
        colors: ["red", "yellow", "black"],
    },
    {
        id: 4,
        name: "Theta4",
        location: { city: "Berlin", country: "Germany" },
        economy: { GDP: 200 },
        colors: ["red", "yellow", "black"],
    },
    {
        id: 5,
        name: "Theta5",
        location: { city: "Berlin", country: "Germany" },
        economy: { GDP: 200 },
        colors: ["red", "yellow", "black"],
    },
    {
        id: 6,
        name: "Theta6",
        location: { city: "Berlin", country: "Germany" },
        economy: { GDP: 200 },
        colors: ["red", "yellow", "black"],
    },
    {
        id: 7,
        name: "Theta7",
        location: { city: "Berlin", country: "Germany" },
        economy: { GDP: 200 },
        colors: ["red", "yellow", "black"],
    },
    {
        id: 8,
        name: "Theta8",
        location: { city: "Berlin", country: "Germany" },
        economy: { GDP: 200 },
        colors: ["red", "yellow", "black"],
    },
    {
        id: 9,
        name: "Theta9",
        location: { city: "Berlin", country: "Germany" },
        economy: { GDP: 200 },
        colors: ["red", "yellow", "black"],
    },
    {
        id: 10,
        name: "Theta10",
        location: { city: "Berlin", country: "Germany" },
        economy: { GDP: 200 },
        colors: ["red", "yellow", "black"],
    },
    {
        id: 11,
        name: "Theta11",
        location: { city: "Berlin", country: "Germany" },
        economy: { GDP: 200 },
        colors: ["red", "yellow", "black"],
    },
];

const properties = {
    name: { label: "Name", search: true },
    "location.city": { label: "City" },
    "economy.GDP": { label: "GDP" },
    colors: {
        label: "Flag Colors",
        options: [
            { label: "Red", value: "red" },
            { label: "White", value: "white" },
            { label: "Blue", value: "blue" },
            { label: "Yellow", value: "yellow" },
            { label: "Black", value: "black" },
            { label: "Green", value: "green" },
            { label: "Orange", value: "orange" },
            { label: "Gray", value: "gray" },
        ],
        search: true,
    },
};

const columns = [
    {
        property: "name",
        header: "Name",
        primary: true,
    },
    {
        property: "location.city",
        header: "City",
    },
    {
        property: "economy.GDP",
        header: "GDP",
    },
    {
        property: "colors",
        header: "Flag Colors",
        // render using map map
        render: (datum) =>
            datum.colors.map((item) => <Text key={item}>{item}</Text>),
    },
];

interface TableViewProps {
    showPagination?: boolean;
}

export const TableView: React.FC<TableViewProps> = ({
    showPagination = true,
}) => {
    const [currentData, setCurrentData] = useState(data.slice(0, 10));
    const [indices, setIndices] = useState([0, 10]);

    useEffect(() => {
        if (!showPagination) {
            setCurrentData(data);
        }
    }, [showPagination]);

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
                    />
                </Box>
            )}
        </Box>
    );
};
