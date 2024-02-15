/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Grid,
    Grommet,
    Header,
    HeaderExtendedProps,
    Heading,
    PageContent,
    PageHeader,
    Paragraph,
    ResponsiveContext,
    Text,
    grommet,
} from "grommet";
import { Moon, Sun } from "grommet-icons";
import { deepMerge } from "grommet/utils";
import { FC, useContext, useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";
import { ReusableComponent } from "./components/ReusableComponent";
import getData from "./api/data-crud";

const AppBar = (props: JSX.IntrinsicAttributes & HeaderExtendedProps) => (
    <Header
        background="brand"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        {...props}
    />
);

const CardTemplate: FC<{ title: string }> = ({ title }) => {
    const size = useContext(ResponsiveContext);
    return (
        <Card>
            <CardHeader pad="medium">
                <Heading level={2} margin="none">
                    {title}
                </Heading>
            </CardHeader>
            <CardBody pad="medium">
                <Paragraph maxLines={size === "small" ? 3 : undefined}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas porttitor non nulla ac vehicula. Aliquam erat
                    volutpat. Mauris auctor faucibus est at mattis. Aliquam a
                    enim ac nisi aliquam consectetur et ac velit. Mauris ut
                    imperdiet libero.
                </Paragraph>
            </CardBody>
            <CardFooter pad="medium" background="background-contrast">
                Footer
            </CardFooter>
        </Card>
    );
};

function App() {
    const [dark, setDark] = useState(false);

    return (
        <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
            <AppBar>
                <Text size="large">My App</Text>

                {/* <Button
                    a11yTitle={
                        dark ? "Switch to Light Mode" : "Switch to Dark Mode"
                    }
                    icon={dark ? <Moon /> : <Sun />}
                    onClick={() => setDark(!dark)}
                /> */}
            </AppBar>
            {/* <PageContent>
                <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
                    <PageHeader title="Welcome to Grommet!" />
                    <CardTemplate title={"Card 1"} />
                    <CardTemplate title={"Card 2"} />
                    <CardTemplate title={"Card 3"} />
                </Grid>
            </PageContent> */}
            <ReusableComponent />
        </Grommet>
    );
}

const theme = deepMerge(grommet, {
    global: {
        colors: {
            brand: "#228BE6",
        },
        font: {
            family: "Roboto",
            size: "18px",
            height: "20px",
        },
    },
});

export default App;
