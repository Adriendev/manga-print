const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

const getDate = () => {
  const DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth();
  const DAY = DATE.getDay();
  return { DATE, YEAR, MONTH, DAY };
};

export { API_URL, getDate };
