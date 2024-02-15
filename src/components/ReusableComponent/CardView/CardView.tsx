/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Cards,
    Data,
    Grid,
    Heading,
    Pagination,
    Text,
} from "grommet";
import { User } from "../../../api/data.types";

interface CardGridProps {
    showPagination?: boolean;
    data: User[];
}

export const CardView: React.FC<CardGridProps> = ({
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
            <Data data={currentData} toolbar>
                <Cards size="medium">
                    {(item) => (
                        <Card key={item.id} pad="small">
                            <CardBody>
                                <Heading level={2} margin="none">
                                    {item.name}
                                </Heading>
                            </CardBody>
                            <CardFooter>{item.email || "--"}</CardFooter>
                        </Card>
                    )}
                </Cards>
            </Data>
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
