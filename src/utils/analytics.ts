import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("UA-197709334-1", {
    titleCase: false,
    debug: false,
    gaOptions: {
      cookieDomain: "auto",
    },
  });
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (args: {
  category: string;
  action: string;
  label?: string;
}) => ReactGA.event(args);
