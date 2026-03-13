import { useState, useEffect } from "react";
import BarChartWrapper from "./shared/BarChartWrapper";
import { getOrderPerHour } from "../services/api";

export default function OrdersPerHour() {
    const [orderData, setOrderData] = useState([]);
    
    useEffect( () => {
        const fetchData = async () => {
            const data = await getOrderPerHour();
            setOrderData(data);
        }
        fetchData();
    }, []);

    return(
        <div className="flex flex-col">
            <BarChartWrapper data={orderData} xaxis="hour" yaxis="totalOrders" />
        </div>
    )
}