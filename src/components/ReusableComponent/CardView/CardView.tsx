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
    Heading,
    Pagination,
    Toolbar,
} from "grommet";
import { User } from "../../../api/data.types";

interface CardGridProps {
    showPagination?: boolean;
    data: User[];
}

export const CardView: React.FC<CardGridProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    showPagination = true,
    data,
}) => {
    return (
        <Box pad="large" gap="medium">
            <Data data={data}>
                <Toolbar>
                    <DataSearch />
                    <DataFilters layer />
                </Toolbar>
                <DataSummary />
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
                <Pagination
                    step={5}
                    alignSelf="center"
                    margin={{ top: "medium" }}
                />
            </Data>
        </Box>
    );
};
