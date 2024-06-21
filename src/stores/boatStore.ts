import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
//import data for boats

import listOfBoats from "./boatList";

//define the structure of the boattyoe that will for the boat list
interface boatType {
  id: number;
  boatName: string;
  boatPY: number;
  visible: boolean;
  finishTime: string;
  refBoat: boolean;
}
//create an array of objects each of which are of type boatType

type BoatState = {
  boatList: Array<boatType>;
  startTime: Dayjs;
  setStartTime: (s: Dayjs) => void;
  endTime: Dayjs;
  setEndTime: (s: Dayjs) => void;
  toggleVisibility: (id: number) => void;
};

const useBoatStore = create(
  persist<BoatState>(
    (set) => ({
      boatList: listOfBoats,

      startTime: dayjs(),
      endTime: dayjs(),
      setStartTime: (s) =>
        set((state) => ({
          startTime: s,
        })),
      setEndTime: (s) =>
        set((state) => ({
          endTime: s,
        })),
      toggleVisibility: (id) =>
        set((state) => ({
          endTime: dayjs(),
          boatList: state.boatList.map((boat) => {
            if (id === boat.id) {
              return { ...boat, visible: !boat.visible };
            } else {
              return boat;
            }
          }),
        })),
    }),
    {
      name: "boat-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
export default useBoatStore;
