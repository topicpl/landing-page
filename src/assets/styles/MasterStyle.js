import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { theme } from './theme';
import ReactGA from 'react-ga';
import appConfig from '../../../appConfig';

const MasterStyle = ({ children }) => {
    useEffect(() => {
      ReactGA.initialize(appConfig.gaTrackingId);
      ReactGA.pageview(window.location.pathname);
    }, []);

    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <>{children}</>
        </ThemeProvider>
      </>
    );
}

export default MasterStyle;
