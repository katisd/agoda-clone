import { type NextPage } from "next";
import DashBoardLayout from "../module/dashBoard/Layouts/DashBoardLayout";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import type { HotelList } from "../module/HoTelContent/types/HotelsType";
import axios from "axios";
import HoTelSection from "../module/HoTelContent";
import FilterFunction from "../module/Search/utils/FilterFunction";
import type { FilterValueType } from "./_app";

const Home: NextPage = () => {
  useEffect(() => {
    setLoading(true);
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
    <DashBoardLayout>
      <pre>{JSON.stringify(watch())}</pre>
      <div className="m-7 space-y-3">
        {data?.hotels
          ?.filter((hotel) => FilterFunction(hotel, watch()))
          .map((hotel, ind) => (
            <HoTelSection prop={hotel} key={hotel.name + ind.toString()} />
          ))}
      </div>
    </DashBoardLayout>
  );
};
export default Home;
