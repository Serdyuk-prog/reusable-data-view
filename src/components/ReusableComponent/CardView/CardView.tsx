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
    Text,
} from "grommet";

import { AddItem, DeleteItem, EditItem, ShowItemButton } from "../Actions";
import { User } from "../../../api";

interface CardGridProps {
    data: User[];
    showFilters?: boolean;
    actionButtons?: boolean;
    showPagination?: boolean;
}

const properties = {
    name: { label: "Name", search: true },
    username: { label: "Username", search: false },
    email: { label: "Email", search: false },
};

export const CardView: React.FC<CardGridProps> = ({
    showPagination,
    actionButtons,
    showFilters,
    data,
}) => {
    const actionButton = actionButtons && <AddItem />;

    return (
        <Box pad="large" gap="medium" margin={"large"}>
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
                <Cards size="medium">
                    {(item) => (
                        <Card key={item.id} pad="small">
                            <CardBody>
                                <Heading level={2} margin="none">
                                    {item.name}
                                </Heading>
                                <Text>{item.username}</Text>
                            </CardBody>
                            <CardFooter>{item.email || "--"}</CardFooter>
                            {actionButtons && (
                                <Box
                                    as="footer"
                                    gap="small"
                                    direction="row"
                                    align="center"
                                    justify="end"
                                    pad={{ top: "medium", bottom: "small" }}
                                >
                                    <ShowItemButton user={item} />
                                    <DeleteItem user={item} />
                                    <EditItem user={item} />
                                </Box>
                            )}
                        </Card>
                    )}
                </Cards>
                {showPagination && (
                    <Pagination
                        step={5}
                        alignSelf="center"
                        margin={{ top: "medium" }}
                    />
                )}
            </Data>
        </Box>
    );
};
