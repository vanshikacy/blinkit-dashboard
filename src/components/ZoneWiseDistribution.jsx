import { useEffect, useState } from "react";
import { getZoneWiseDistribution } from "../services/api";
import BarChartWrapper from "./shared/BarChartWrapper";

export default function ZoneWiseDistribution() {
    const [orderData, setOrderData] = useState([]);
        
    useEffect( () => {
        const fetchData = async () => {
            const data = await getZoneWiseDistribution();
            setOrderData(data);
        }
        fetchData();
    }, []);

    return(
        <div className="flex flex-col">
            <BarChartWrapper data={orderData} xaxis="zone" yaxis="totalOrders" />
        </div>
    )
}