import { type NextPage } from "next";
import DashBoardLayout from "../module/dashBoard/Layouts/DashBoardLayout";
import { type z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { FilterValueSchema } from "../module/assets/staticObject";
import HotelCard from "../module/HoTelContent/HotelCard";

type FilterValueType = z.infer<typeof FilterValueSchema>;
const Home: NextPage = () => {
  const methods = useForm<FilterValueType>({
    resolver: zodResolver(FilterValueSchema),
  });
  return (
    <FormProvider {...methods}>
      <DashBoardLayout>
        <h1>Home</h1>
        <HotelCard>
          <img src="https://placeimg.com/200/280/arch" alt="Movie" />
          <h1>Main</h1>
          <h1>Sub</h1>
          <h1>foot</h1>
        </HotelCard>
        <pre>{JSON.stringify(methods.watch(), null)}</pre>
      </DashBoardLayout>
    </FormProvider>
  );
};
export default Home;
