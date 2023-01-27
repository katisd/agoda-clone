import type { NextApiRequest, NextApiResponse } from "next";
import hotelsMock from "./mockHotels.json";

const hotels = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(hotelsMock);
};

export default hotels;
