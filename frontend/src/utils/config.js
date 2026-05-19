// Switch between local and production backend
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3050/api";
// For deployment, set VITE_API_URL=https://adtravelz-frontend.onrender.com/api in frontend .env

export default BASE_URL;
