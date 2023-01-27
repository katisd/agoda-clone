import { type NextPage } from "next";
import DashBoardLayout from "../module/dashBoard/Layouts/DashBoardLayout";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import type { HotelList } from "../module/HoTelContent/types/HotelsType";
import axios from "axios";
import HoTelSection from "../module/HoTelContent";
import FilterFunction from "../module/Search/utils/FilterFunction";
import type { FilterValueType } from "./_app";
import Sort from "../module/Search/components/Sort";
import { SortFunction } from "../module/Search/utils/SortFunction";
import Filters from "../module/Search/components/Filters";
import { clientEnv } from "../env/schema.mjs";

const Home: NextPage = () => {
  useEffect(() => {
    setLoading(true);
    clientEnv.NEXT_PUBLIC_API_ENDPOINT
      ? // if provide NEXT_PUBLIC_API_ENDPOINT
        axios
          .get<HotelList>(clientEnv.NEXT_PUBLIC_API_ENDPOINT)
          .then((res) => res.data)
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch(() => {
            setError(true);
            setLoading(false);
          })
      : // if not provide NEXT_PUBLIC_API_ENDPOINT use api/hotels
        axios
          .get<HotelList>("/api/hotels")
          .then((res) => res.data)
          .then((data) => {
            setData(data);
            setLoading(false);
          })
          .catch(() => {
            setError(true);
            setLoading(false);
          });
  }, []);
  const [data, setData] = useState<HotelList | null>(null);
  // TODO: add loading(skeleton) and error page
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { watch } = useFormContext<FilterValueType>();
  return (
    <DashBoardLayout Filter={<Filters />}>
      <Sort />
      {data?.hotels
        ?.filter((hotel) => FilterFunction(hotel, watch()))
        .sort((a, b) => SortFunction(a, b, watch().sort))
        .map((hotel, ind) => (
          <HoTelSection prop={hotel} key={hotel.name + ind.toString()} />
        ))}
    </DashBoardLayout>
  );
};
export default Home;
