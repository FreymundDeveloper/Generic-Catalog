import { ThemeProvider as StyledThemeProvider } from "styled-components";

const bodyColor = '#181818',
    modalColor = '#202020',
    buttonColor = '#01420b';

const theme = {
    color: {
        bodyColor,
        modalColor,
        buttonColor,
    }
}

export const Theme = ({ children }) => {
    return (
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    );
}
