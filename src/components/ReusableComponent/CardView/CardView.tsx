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
import { AddItem, DeleteItem, EditItem, ShowItemButton } from "../Actions";

interface CardGridProps {
    showPagination?: boolean;
    data: User[];
}

const properties = {
    name: { label: "Name", search: true },
    username: { label: "Username", search: true },
    email: { label: "Email", search: true },
};

export const CardView: React.FC<CardGridProps> = ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    showPagination = true,
    data,
}) => {
    return (
        <Box pad="large" gap="medium">
            <Data data={data} properties={properties}>
                <Box direction="row">
                    <Toolbar>
                        <DataSearch />
                        <DataFilters layer />
                    </Toolbar>
                    <AddItem />
                </Box>

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
                            <Box
                                align="center"
                                justify="end"
                                pad="medium"
                                direction="row"
                                gap="medium"
                            >
                                <ShowItemButton user={item} />
                                <DeleteItem user={item} />
                                <EditItem user={item} />
                            </Box>
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
