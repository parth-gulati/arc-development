import { createTheme } from "@material-ui/core";

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

export default createTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrange : `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    }
})