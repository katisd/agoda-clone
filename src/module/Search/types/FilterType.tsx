import type { FilterValueType } from "../../../pages/_app";

export type FilterProps = {
  nameOfFilter: keyof FilterValueType;
  choices: string[];
};
export type FilterRadioProps = {
  nameOfFilter: keyof FilterValueType;
  choices: number[];
};
