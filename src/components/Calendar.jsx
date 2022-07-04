import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "./Icon";
import { DATE, MONTH, YEAR, DAY } from "../utils/constants";
import "./Calendar.css";

const Calendar = () => {
  const daysInMonth = new Date(YEAR, MONTH + 1, 0).getDate();
  //   console.log(daysInMonth);
  const options = { month: "long" };
  const [days, setDays] = useState([]);

  useEffect(() => {
    const getDaysArray = () => {
      let newArr = [];
      for (let i = 1; i <= daysInMonth; i++) {
        newArr.push(i);
      }

      setDays(newArr);
    };
    getDaysArray();
  }, [daysInMonth]);

  return (
    <>
      <section className="calendar">
        <div className="display">
          <button>
            <ArrowLeft />
          </button>
          <h4>{new Intl.DateTimeFormat("en-US", options).format(DATE)}</h4>
          <button>
            <ArrowRight />
          </button>
        </div>

        <table className="table">
          <thead>
            <tr>
              {days.map((day) => (
                <td key={`Day ${day}`} className="day">
                  {day}
                </td>
              ))}
            </tr>
          </thead>
        </table>
      </section>
    </>
  );
};

export default Calendar;
