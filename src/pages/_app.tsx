import { type AppType } from "next/dist/shared/lib/utils";
import DevViewport from "../common/components/DevViewport";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NODE_ENV === "development" && <DevViewport />}
    </>
  );
};

export default MyApp;
