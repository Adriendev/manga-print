const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5005";

const DATE = new Date();
const YEAR = DATE.getFullYear();
const MONTH = DATE.getMonth();
const DAY = DATE.getDay();

export { API_URL, DATE, YEAR, MONTH, DAY };
