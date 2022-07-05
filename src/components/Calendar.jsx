import React, { useContext, useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "./Icon";

import "./Calendar.css";
import SeriesCard from "./SeriesCard";
import { API_URL, getDate } from "../utils/constants";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { FavoritesContext } from "../context/favorites.context";

const Calendar = () => {
  //   console.log(daysInMonth);
  const { DAY, DATE, YEAR, MONTH } = getDate();
  const options = { month: "long" };
  const [days, setDays] = useState([]);
  const [month, setMonth] = useState(MONTH);
  const [date, setDate] = useState(DATE);
  const [releases, setReleases] = useState([]);
  const { getToken } = useContext(AuthContext);
  const { favorites } = useContext(FavoritesContext);
  const daysInMonth = new Date(YEAR, month + 1, 0).getDate();

  useEffect(() => {
    const getDaysArray = () => {
      let newArr = [];
      for (let i = 1; i <= daysInMonth; i++) {
        newArr.push(i);
      }

      setDays([...newArr]);
    };
    getDaysArray();
  }, [daysInMonth]);

  useMemo(() => {
    const getLatestSeries = async () => {
      const token = getToken();
      let config = {
        method: "get",
        url: `${API_URL}/calendar/${YEAR}/${month + 1}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios(config);
      setReleases(data);
    };

    getLatestSeries();
  }, [favorites, month]);

  useEffect(() => {
    setDate(new Date(YEAR, month, DAY));
  }, [month]);

  const handleClick = (e) => {
    console.log(e.target.className);

    e.target.className.includes("left")
      ? setMonth(month - 1)
      : setMonth(month + 1);
  };
  console.log(month);
  const getVolumeForDay = (day, month) => {
    const foundRel = releases.filter((x) =>
      x.releaseDate.includes(`0${month + 1}-0${day}`)
    );

    return foundRel;
  };

  const firstRow = days.map((day) => {
    let volume;
    if (day < 8) {
      volume = getVolumeForDay(day, month);
    }

    return day < 8 ? (
      <div key={`Day ${day}`} className="day">
        {volume.length !== 0 ? (
          volume.map((x) => (
            <SeriesCard
              key={x._id}
              name={x.title}
              image={x.cover}
              id={x.series}
              size="calendar-s"
            />
          ))
        ) : (
          <article className="empty"></article>
        )}
        <span className="number">{day}</span>
      </div>
    ) : null;
  });

  const secondRow = days.map((day) => {
    let volume;
    if (day >= 8 && day < 15) {
      volume = getVolumeForDay(day, month);
    }

    return day >= 8 && day < 15 ? (
      <div key={`Day ${day}`} className="day">
        {volume.length !== 0 ? (
          volume.map((x) => (
            <SeriesCard
              key={x._id}
              name={x.title}
              image={x.cover}
              id={x.series}
              size="calendar-s"
            />
          ))
        ) : (
          <article className="empty"></article>
        )}
        <span className="number">{day}</span>
      </div>
    ) : null;
  });

  const thirdRow = days.map((day) => {
    let volume;
    if (day >= 15 && day < 22) {
      volume = getVolumeForDay(day, month);
    }
    return day >= 15 && day < 22 ? (
      <div key={`Day ${day}`} className="day">
        {volume.length !== 0 ? (
          volume.map((x) => (
            <SeriesCard
              key={x._id}
              name={x.title}
              image={x.cover}
              id={x.series}
              size="calendar-s"
            />
          ))
        ) : (
          <article className="empty"></article>
        )}
        <span className="number">{day}</span>
      </div>
    ) : null;
  });

  const fourthRow = days.map((day) => {
    let volume;
    if (day >= 22 && day < 29) {
      volume = getVolumeForDay(day, month);
    }
    return day >= 22 && day < 29 ? (
      <div key={`Day ${day}`} className="day">
        {volume.length !== 0 ? (
          volume.map((x) => (
            <SeriesCard
              key={x._id}
              name={x.title}
              image={x.cover}
              id={x.series}
              size="calendar-s"
            />
          ))
        ) : (
          <article className="empty"></article>
        )}
        <span className="number">{day}</span>
      </div>
    ) : null;
  });

  const fifthRow = days.map((day) => {
    let volume;
    if (day >= 29) {
      volume = getVolumeForDay(day, month);
    }
    return day >= 29 ? (
      <div key={`Day ${day}`} className="day">
        {volume.length !== 0 ? (
          volume.map((x) => (
            <SeriesCard
              key={x._id}
              name={x.title}
              image={x.cover}
              id={x.series}
              size="calendar-s"
            />
          ))
        ) : (
          <article className="empty"></article>
        )}
        <span className="number">{day}</span>
      </div>
    ) : null;
  });

  return (
    <>
      <section className="calendar">
        <div className="display">
          <button className="btn left" onClick={handleClick}>
            <ArrowLeft />
          </button>
          <h3>{new Intl.DateTimeFormat("en-US", options).format(date)}</h3>
          <button className="btn right" onClick={handleClick}>
            <ArrowRight />
          </button>
        </div>
        <div className="body">
          <div className="week">
            <h4>Week 01-07</h4>
            <hr />
            <div className="days">{firstRow}</div>
          </div>
          <div className="week">
            <h4>Week 08-14</h4>
            <hr />
            <div className="days">{secondRow}</div>
          </div>
          <div className="week">
            <h4>Week 15-22</h4>
            <hr />
            <div className="days">{thirdRow}</div>
          </div>
          <div className="week">
            <h4>Week 22-29</h4>
            <hr />
            <div className="days">{fourthRow}</div>
          </div>
          <div className="week">
            <h4>Week 22-29</h4>
            <hr />
            <div className="days">{fifthRow}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calendar;
