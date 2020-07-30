import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#64bdbb";
const arcOrange = "#e35656";

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary : {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        tab: {
            fontSize: "1rem",
        }
    }
});