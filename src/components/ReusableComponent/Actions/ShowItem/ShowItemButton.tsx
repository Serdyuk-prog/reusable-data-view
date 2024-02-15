import { Box, Button, Text } from "grommet";
import { View } from "grommet-icons";
import { User } from "../../../../api/data.types";
import React from "react";
import { ShowItem } from "./ShowItem";

interface ShowItemButtonProps {
    user: User;
}

export const ShowItemButton: React.FC<ShowItemButtonProps> = ({ user }) => {
    const [open, setOpen] = React.useState<boolean | undefined>(false);

    return (
        <>
            <Box align="end" justify="end">
                <Button
                    icon={<View />}
                    label={
                        <Text>
                            <strong>View</strong>
                        </Text>
                    }
                    onClick={() => setOpen(true)}
                    plain
                />
            </Box>

            <ShowItem user={user} open={open} setOpen={setOpen} />
        </>
    );
};
