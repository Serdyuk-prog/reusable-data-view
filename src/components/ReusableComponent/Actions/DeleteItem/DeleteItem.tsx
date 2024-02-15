import React from "react";

import { Trash } from "grommet-icons";

import { Box, Button, Heading, Layer, Text } from "grommet";
import { deleteItem, User } from "../../../../api";

interface DeleteItemProps {
    user: User;
}

export const DeleteItem: React.FC<DeleteItemProps> = ({ user }) => {
    const [open, setOpen] = React.useState<boolean | undefined>();

    const onOpen = () => setOpen(true);

    const onClose = () => setOpen(undefined);

    return (
        <>
            <Box align="end" justify="end">
                <Button
                    icon={<Trash />}
                    label="Remove"
                    onClick={onOpen}
                    size="small"
                />
            </Box>
            {open && (
                <Layer
                    id={user.id.toString()}
                    position="center"
                    onClickOutside={onClose}
                    onEsc={onClose}
                >
                    <Box pad="medium" gap="small" width="medium">
                        <Heading level={3} margin="none">
                            Confirm
                        </Heading>
                        <Text>Are you sure you want to delete?</Text>
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
                            <Button
                                label={
                                    <Text color="white">
                                        <strong>Delete</strong>
                                    </Text>
                                }
                                onClick={() => {
                                    deleteItem(user).then((res) => {
                                        if (res?.ok) {
                                            onClose();
                                        }
                                    });
                                }}
                                primary
                                color="status-critical"
                            />
                        </Box>
                    </Box>
                </Layer>
            )}
        </>
    );
};
