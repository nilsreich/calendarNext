"use client";

import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import { Day } from "@/components/Day";
import { Time } from "@/components/Time";
import { useAtom } from "jotai";
import { day } from "@/lib/dateAtom";

export const Week = () => {
  const [monday, setMonday] = useAtom(day);

  const getNextDay = (x: number) => {
    const today = DateTime.local();
    const nextDay = today
      .plus({ days: x })
      .setLocale("de-DE")
      .toLocaleString({ day: "numeric" });
    return nextDay;
  };

  function getPreviousMonday() {
    const prevMonday = monday.minus({ weeks: 1 });
    setMonday(prevMonday);
  }

  function getNextMonday() {
    const nextMonday = monday.plus({ weeks: 1 });
    setMonday(nextMonday);
  }

  return (
    <>
      <div className="grid-cols-22 grid">
        <div className="border-r p-2 text-center"></div>
        <div className="col-span-3 border-r p-2 text-center">
          <div className="text-xs uppercase">Mo</div>
          <div className="text-xl">{getNextDay(1)}</div>
        </div>
        <div className="col-span-3 border-r p-2 text-center">
          <div className="text-xs uppercase">Di</div>
          <div className="text-xl">{getNextDay(2)}</div>
        </div>
        <div className="col-span-3 border-r p-2 text-center">
          <div className="text-xs uppercase">Mi</div>
          <div className="text-xl">{getNextDay(3)}</div>
        </div>
        <div className="col-span-3 border-r p-2 text-center">
          <div className="text-xs uppercase">Do</div>
          <div className="text-xl">{getNextDay(4)}</div>
        </div>
        <div className="col-span-3 border-r p-2 text-center">
          <div className="text-xs uppercase">Fr</div>
          <div className="text-xl">{getNextDay(5)}</div>
        </div>
        <div className="col-span-3 border-r p-2 text-center">
          <div className="text-xs uppercase">Sa</div>
          <div className="text-xl">{getNextDay(6)}</div>
        </div>
        <div className="col-span-3 border-r p-2 text-center">
          <div className="text-xs uppercase">So</div>
          <div className="text-xl">{getNextDay(7)}</div>
        </div>
      </div>
      <div className="grid-cols-22 grid grow overflow-auto">
        <Time />
        <Day date={getNextDay(0)} />
        <Day date={getNextDay(1)} />
        <Day date={getNextDay(2)} />
        <Day date={getNextDay(3)} />
        <Day date={getNextDay(4)} />
        <Day date={getNextDay(5)} />
        <Day date={getNextDay(6)} />
      </div>
    </>
  );
};
