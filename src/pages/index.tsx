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
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <DashBoardLayout>
          <div className="m-7 space-y-3">
            <label
              htmlFor="my-drawer-4"
              className="btn-primary btn drawer-button w-full md:collapse"
            >
              Add Filters
            </label>
            <Sort />
            {data?.hotels
              ?.filter((hotel) => FilterFunction(hotel, watch()))
              .sort((a, b) => SortFunction(a, b, watch().sort))
              .map((hotel, ind) => (
                <HoTelSection prop={hotel} key={hotel.name + ind.toString()} />
              ))}
          </div>
        </DashBoardLayout>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu w-80 bg-base-100 p-4 text-base-content">
          <Filters />
        </ul>
      </div>
    </div>
  );
};
export default Home;
