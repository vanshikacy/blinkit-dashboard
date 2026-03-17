import { useState, useEffect } from "react";
import BarChartWrapper from "./shared/BarChartWrapper";
import { getRidersPerCity } from "../services/api";

export default function RiderPerCity() {
    const [orderData, setOrderData] = useState([]);
    
    useEffect( () => {
        const fetchData = async () => {
            const data = await getRidersPerCity();
            setOrderData(data);
        }
        fetchData();
    }, []);

    return(
        <div className="flex flex-col">
            <BarChartWrapper data={orderData} xaxis="city" yaxis="count" />
        </div>
    )
}