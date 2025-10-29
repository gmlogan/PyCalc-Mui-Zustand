import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
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

interface BoatState {
  boatList: Array<boatType>;
  startTime: Dayjs;
  setStartTime: (s: Dayjs) => void;
  endTime: Dayjs;
  setEndTime: (s: Dayjs) => void;
  toggleVisibility: (id: number) => void;
}

const useBoatStore = create(
  persist(
    immer<BoatState>((set) => ({
      boatList: listOfBoats,

      startTime: dayjs(),
      endTime: dayjs(),
      setStartTime: (s) =>
        set((state) => {
          state.startTime = s;
        }),
      setEndTime: (s) =>
        set((state) => {
          state.endTime = s;
        }),
      toggleVisibility: (id) =>
        set((state) => {
          state.endTime = dayjs();
          const boat = state.boatList.find((b) => b.id === id);
          if (boat) {
            boat.visible = !boat.visible;
          }
        }),
    })),
    {
      name: "boat-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
export default useBoatStore;
