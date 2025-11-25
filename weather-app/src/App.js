/* eslint-disable react-hooks/exhaustive-deps */
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";
import { api, api_key } from "./api/api.js";
import { useEffect, useState } from "react";
function App() {
  const [country, setCountry] = useState("Yangon");
  const [ error, setError ] = useState(null);
  const [data, setData] = useState({});

  const fetchData = async (city) => {
    if (city !== undefined) {
      setCountry(city);
    }
    try {
      setError(null);
      const res = await api.get(`/weather?q=${country}&appid=${api_key}`);
      setData(res.data);
    } catch (error) {
      setError("Country not available...");
      setData({});
    }
  };

  useEffect(() => {
    fetchData();
  }, [country]);

  return (
    <div className="w-full min-vh-100 d-flex justify-content-center align-items-center">
      <div className="shadow-lg bg-light gap-4">
        <h2 className="text-center mt-4">Weather-App</h2>
        <Form fetchData={fetchData} />
        <Card data={data} error={error}/>
      </div>
    </div>
  );
}

export default App;
