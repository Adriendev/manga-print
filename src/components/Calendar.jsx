import React, { useContext, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "./Icon";

import "./Calendar.css";
import SeriesCard from "./SeriesCard";
import { API_URL, getDate } from "../utils/constants";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { FavoritesContext } from "../context/favorites.context";

const Calendar = () => {
  const { DAY, DATE, YEAR, MONTH } = getDate();
  const options = { month: "long" };
  const [days, setDays] = useState([]);
  const [month, setMonth] = useState(MONTH);
  const [date, setDate] = useState(DATE);
  const [year, setYear] = useState(YEAR);
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

  useEffect(() => {
    const getLatestSeries = async () => {
      const token = getToken();
      let config = {
        method: "get",
        url: `${API_URL}/calendar/${year}/${month + 1}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios(config);
      if (data) {
        setReleases(data);
      }
    };

    getLatestSeries();
  }, [favorites, month]);

  useEffect(() => {
    setDate(new Date(year, month, DAY));
  }, [month, year]);

  const handleClick = (e) => {
    switch (true) {
      case e.target.className === "btn left":
        switch (true) {
          case month > 0:
            setMonth(month - 1);
            break;
          case month <= 0:
            setYear(year - 1);
            setMonth(11);
            break;
          default:
            break;
        }

        break;
      case e.target.className === "btn right":
        switch (true) {
          case month < 11:
            setMonth(month + 1);
            break;
          case month >= 11:
            setYear(year + 1);
            setMonth(0);
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  const getVolumeForDay = (day, month) => {
    const newMonth = month + 1;

    const foundRel = releases.filter((x) =>
      x.releaseDate.includes(
        `${year}-${newMonth < 10 ? "0" + newMonth : "" + newMonth}-${
          day < 10 ? "0" + day : "" + day
        }`
      )
    );
    // console.log(foundRel);
    return foundRel;
  };

  const firstRow = days.map((day) => {
    let volume;
    if (day < 8) {
      volume = getVolumeForDay(day, month);
    }

    return day < 8 ? (
      <>
        <span className="number">{day}</span>
        <div key={`Day ${day}`} className="day">
          {volume.length !== 0 ? (
            volume.map((x, i) => {
              return (
                <SeriesCard
                  key={`${x._id}${i}`}
                  name={x.title}
                  image={
                    x.cover.includes("seven")
                      ? "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg"
                      : x.cover
                  }
                  id={x.series}
                  size="calendar-s"
                />
              );
            })
          ) : (
            <article className="empty"></article>
          )}
        </div>
      </>
    ) : null;
  });

  const secondRow = days.map((day) => {
    let volume;
    if (day >= 8 && day < 15) {
      volume = getVolumeForDay(day, month);
    }

    return day >= 8 && day < 15 ? (
      <>
        <span className="number">{day}</span>
        <div key={`Day ${day}`} className="day">
          {volume.length !== 0 ? (
            volume.map((x, i) => (
              <SeriesCard
                key={`${x._id}${i}`}
                name={x.title}
                image={
                  x.cover.includes("seven")
                    ? "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg"
                    : x.cover
                }
                id={x.series}
                size="calendar-s"
              />
            ))
          ) : (
            <article className="empty"></article>
          )}
        </div>
      </>
    ) : null;
  });

  const thirdRow = days.map((day) => {
    let volume;
    if (day >= 15 && day < 22) {
      volume = getVolumeForDay(day, month);
    }
    return day >= 15 && day < 22 ? (
      <>
        <span className="number">{day}</span>
        <div key={`Day ${day}`} className="day">
          {volume.length !== 0 ? (
            volume.map((x, i) => (
              <SeriesCard
                key={`${x._id}${i}`}
                name={x.title}
                image={
                  x.cover.includes("seven")
                    ? "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg"
                    : x.cover
                }
                id={x.series}
                size="calendar-s"
              />
            ))
          ) : (
            <article className="empty"></article>
          )}
        </div>
      </>
    ) : null;
  });

  const fourthRow = days.map((day) => {
    let volume;
    if (day >= 22 && day < 29) {
      volume = getVolumeForDay(day, month);
    }
    return day >= 22 && day < 29 ? (
      <>
        <span className="number">{day}</span>
        <div key={`Day ${day}`} className="day">
          {volume.length !== 0 ? (
            volume.map((x, i) => (
              <SeriesCard
                key={`${x._id}${i}`}
                name={x.title}
                image={
                  x.cover.includes("seven")
                    ? "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg"
                    : x.cover
                }
                id={x.series}
                size="calendar-s"
              />
            ))
          ) : (
            <article className="empty"></article>
          )}
        </div>
      </>
    ) : null;
  });

  const fifthRow = days.map((day) => {
    let volume;
    if (day >= 29) {
      volume = getVolumeForDay(day, month);
    }
    return day >= 29 ? (
      <>
        <span className="number">{day}</span>
        <div key={`Day ${day}`} className="day">
          {volume.length !== 0 ? (
            volume.map((x, i) => (
              <SeriesCard
                key={`${x._id}${i}`}
                name={x.title}
                image={
                  x.cover.includes("seven")
                    ? "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg"
                    : x.cover
                }
                id={x.series}
                size="calendar-s"
              />
            ))
          ) : (
            <article className="empty"></article>
          )}
        </div>
      </>
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
          <hr />
          <div className="week">
            <div className="days">{firstRow}</div>
          </div>
          <hr />
          <div className="week">
            <div className="days">{secondRow}</div>
          </div>
          <hr />
          <div className="week">
            <div className="days">{thirdRow}</div>
          </div>
          <hr />
          <div className="week">
            <div className="days">{fourthRow}</div>
          </div>
          <hr />
          <div className="week">
            <div className="days">{fifthRow}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calendar;
