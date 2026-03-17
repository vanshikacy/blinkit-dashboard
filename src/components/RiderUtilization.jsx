import { useState, useEffect } from "react";
import BarChartWrapper from "./shared/BarChartWrapper";
import { getRiderUtilization } from "../services/api";

export default function RiderUtilization() {
    const [orderData, setOrderData] = useState([]);
    
    useEffect( () => {
        const fetchData = async () => {
            const data = await getRiderUtilization();
            setOrderData(data);
        }
        fetchData();
    }, []);

    return(
        <div className="flex flex-col">
            <BarChartWrapper data={orderData} xaxis="city" yaxis="avg_deliveries_per_rider" />
        </div>
    )
}