import React from "react";
import {
    Box,
    Button,
    Heading,
    Layer,
    Text,
} from "grommet";
import { User } from "../../../../api/data.types";
import { DeleteItem } from "../DeleteItem";
import { EditItem } from "../EditItem";

interface ShowItemProps {
    user: User;
    open: boolean | undefined;
    setOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

export const ShowItem: React.FC<ShowItemProps> = ({ user, open, setOpen }) => {
    // const onOpen = () => setOpen(true);

    const onClose = () => setOpen(undefined);

    return (
        <>
            {open && (
                <Layer
                    id={user.id.toString()}
                    position="center"
                    onClickOutside={onClose}
                    onEsc={onClose}
                >
                    <Box pad="medium" gap="small" width="medium">
                        <Heading level={3} margin="none">
                            {user.name}
                        </Heading>
                        <Text>Username: {user.username}</Text>
                        <Text>Email: {user.email}</Text>
                        <Box
                            align="end"
                            pad="medium"
                            direction="row"
                            gap="medium"
                        >
                            <DeleteItem user={user} />
                            <EditItem user={user} />
                        </Box>
                        <Box
                            as="footer"
                            gap="small"
                            direction="row"
                            align="center"
                            justify="end"
                            pad={{ top: "medium", bottom: "small" }}
                        >
                            <Button
                                label="Back "
                                onClick={onClose}
                                color="dark-3"
                            />
                        </Box>
                    </Box>
                </Layer>
            )}
        </>
    );
};
