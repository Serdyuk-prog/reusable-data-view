import React from "react";

import { Close, Edit } from "grommet-icons";
import {
    Box,
    Button,
    Layer,
    Form,
    Heading,
    FormField,
    TextInput,
} from "grommet";
import { editItem, User } from "../../../../api";

interface EditItemProps {
    user: User;
}

export const EditItem: React.FC<EditItemProps> = ({ user }) => {
    const [open, setOpen] = React.useState<boolean | undefined>(false);

    const onOpen = () => setOpen(true);

    const onClose = () => setOpen(undefined);

    return (
        <>
            <Box align="end" justify="end">
                <Button
                    icon={<Edit />}
                    label="Edit"
                    onClick={onOpen}
                    size="small"
                />
            </Box>
            {open && (
                <Layer
                    position="right"
                    full="vertical"
                    modal
                    onClickOutside={onClose}
                    onEsc={onClose}
                >
                    <Box
                        fill="vertical"
                        overflow="auto"
                        width="medium"
                        pad="medium"
                    >
                        <Form
                            validate="blur"
                            onSubmit={({ value }) =>
                                editItem({
                                    id: user.id,
                                    ...value,
                                } as User).then((res) => {
                                    if (res?.ok) {
                                        onClose();
                                    }
                                })
                            }
                        >
                            <Box flex={false} direction="row" justify="between">
                                <Heading level={2} margin="none">
                                    Edit item
                                </Heading>
                                <Button icon={<Close />} onClick={onClose} />
                            </Box>
                            <FormField
                                label="Name"
                                aria-label="name"
                                name="name"
                                defaultValue={user.name}
                                validate={[
                                    { regexp: /^[a-z]/i },
                                    (name) => {
                                        if (name && name.length === 1)
                                            return "must be >1 character";
                                        return undefined;
                                    },
                                ]}
                            />

                            <FormField
                                label="Username"
                                aria-label="username"
                                name="username"
                                defaultValue={user.username}
                                validate={[
                                    { regexp: /^[a-z]/i },
                                    (username) => {
                                        if (username && username.length === 1)
                                            return "must be >1 character";
                                        return undefined;
                                    },
                                ]}
                            />

                            <FormField
                                label="Email"
                                name="email"
                                validate={[
                                    { regexp: /^[a-z]/i },
                                    (username) => {
                                        if (username && username.length === 1)
                                            return "must be >1 character";
                                        return undefined;
                                    },
                                ]}
                            >
                                <TextInput
                                    defaultValue={user.email}
                                    name="email"
                                    aria-label="email"
                                    type="email"
                                />
                            </FormField>

                            <Box flex={false} as="footer" align="start">
                                <Button type="submit" label="Submit" primary />
                            </Box>
                        </Form>
                    </Box>
                </Layer>
            )}
        </>
    );
};
