import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette : {
        primary : {
            light: "#d35af4",
            main: "#bf00ff", // bg khi chưa hover
            dark: "#7904a0", // bg khi hover vào
            //contrastText: "#fff",
        },
        secondary : {
            light: "#dba71a",
            main: "#bc9b14", // bg khi chưa hover
            dark: "#826907", // bg khi hover vào
            //contrastText: "#fff",
        }
    }
});