import { atom } from "jotai";
import { DateTime } from "luxon";

export const day = atom(getLatestMonday());

function getLatestMonday() {
  const today = DateTime.local();
  return today.startOf("week");
}
