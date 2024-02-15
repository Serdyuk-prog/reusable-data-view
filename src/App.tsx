/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grommet, Header, HeaderExtendedProps, Text, grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import { JSX } from "react/jsx-runtime";
import { ReusableComponent } from "./components/ReusableComponent";

const AppBar = (props: JSX.IntrinsicAttributes & HeaderExtendedProps) => (
    <Header
        background="brand"
        pad={{ left: "medium", right: "small", vertical: "small" }}
        {...props}
    />
);

function App() {
    return (
        <Grommet theme={theme} full>
            <AppBar>
                <Text size="large">Demo</Text>
            </AppBar>

            <ReusableComponent
                cardView
                showPagination
                actionButtons
                showFilters
            />
            <ReusableComponent tableView showPagination actionButtons />
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
