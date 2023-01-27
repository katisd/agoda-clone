import { type AppType } from "next/dist/shared/lib/utils";
import DevViewport from "../module/common/DevViewport";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { FormProvider, useForm } from "react-hook-form";
import type { z } from "zod";
import { FilterValueSchema } from "../module/assets/staticObject";
import { zodResolver } from "@hookform/resolvers/zod";

export type FilterValueType = z.infer<typeof FilterValueSchema>;
const defaultValues: FilterValueType = {
  name: "",
  maxCost: 690,
  property_type: [],
  location: "location",
  star: 0,
  benefits: [],
  sort: "Best match",
};
const MyApp: AppType = ({ Component, pageProps }) => {
  const methods = useForm<FilterValueType>({
    resolver: zodResolver(FilterValueSchema),
    defaultValues: defaultValues,
  });
  return (
    <>
      <ThemeProvider>
        <FormProvider {...methods}>
          <Component {...pageProps} />
          {process.env.NODE_ENV === "development" && <DevViewport />}
        </FormProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
