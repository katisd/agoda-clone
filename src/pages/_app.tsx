import { type AppType } from "next/dist/shared/lib/utils";
import DevViewport from "../common/components/DevViewport";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
        {process.env.NODE_ENV === "development" && <DevViewport />}
      </ThemeProvider>
    </>
  );
};

export default MyApp;
