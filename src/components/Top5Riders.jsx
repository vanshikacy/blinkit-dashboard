import { getTop5Riders } from "../services/api";
import { useState, useEffect } from "react";

export default function Top5Riders() {
    const [orderData, setOrderData] = useState([]);
    
    useEffect( () => {
        const fetchData = async () => {
            const data = await getTop5Riders();
            setOrderData(data);
        }
        fetchData();
    }, []);
    console.log(orderData);

    return(
        <div>
            <table className="w-auto items-center border border-1 border-collapse   ">
                <thead className="border w-full items-center">
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Time in minutes</th>
                    </tr>
                </thead>
                <tbody className="w-full border">
                    {orderData.map((rider) => (
                        <tr key = {rider.name}>
                            <td className="px-4 py-2">{rider.name}</td>
                            <td className="px-4 py-2">{rider.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}