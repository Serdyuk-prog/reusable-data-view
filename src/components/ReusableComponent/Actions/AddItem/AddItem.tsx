import React from "react";

import { Add, Close } from "grommet-icons";
import {
    Box,
    Button,
    Layer,
    Form,
    Heading,
    FormField,
    TextInput,
} from "grommet";
import { newItem } from "../../../../api";
import { User } from "../../../../api/data.types";

export const AddItem = () => {
    const [open, setOpen] = React.useState<boolean | undefined>(false);

    const onOpen = () => setOpen(true);

    const onClose = () => setOpen(undefined);

    return (
        <Box justify="center">
            <Button icon={<Add />} label="Add item" onClick={onOpen} />
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
                                newItem(value as User).then((res) => {
                                    if (res?.ok) {
                                        onClose();
                                    }
                                })
                            }
                        >
                            <Box flex={false} direction="row" justify="between">
                                <Heading level={2} margin="none">
                                    Add new item
                                </Heading>
                                <Button icon={<Close />} onClick={onClose} />
                            </Box>
                            <FormField
                                label="Name"
                                aria-label="name"
                                name="name"
                                required
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
                                required
                                validate={[
                                    { regexp: /^[a-z]/i },
                                    (username) => {
                                        if (username && username.length === 1)
                                            return "must be >1 character";
                                        return undefined;
                                    },
                                ]}
                            />

                            <FormField label="Email" name="email" required>
                                <TextInput
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
        </Box>
    );
};
