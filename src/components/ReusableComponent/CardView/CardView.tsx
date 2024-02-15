/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";

import { Box, Card, CardBody, CardFooter, Cards, Data, Grid, Heading, Pagination, Text } from "grommet";
import { DATA } from "../../../data";

const data = DATA;

interface CardGridProps {
    showPagination?: boolean;
}

export const CardView: React.FC<CardGridProps> = ({
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
            <Data data={currentData} toolbar>
                <Cards size="medium">
                    {(item) => (
                        <Card key={item.name} pad="small">
                            <CardBody>
                                <Heading level={2} margin="none">
                                    {item.name}
                                </Heading>
                            </CardBody>
                            <CardFooter>{item.location || "--"}</CardFooter>
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
                    />
                </Box>
            )}
        </Box>
    );
};
