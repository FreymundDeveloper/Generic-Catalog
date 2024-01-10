import { ThemeProvider as StyledThemeProvider } from "styled-components";

const bodyColor = 'linear-gradient(#121212, #142247)',
    modalColor = '#3a3a3d',
    cardColor = '#242429',
    buttonColor = '#01420b';

const theme = {
    color: {
        bodyColor,
        modalColor,
        cardColor,
        buttonColor,
    }
}

export const Theme = ({ children }) => {
    return (
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    );
}
