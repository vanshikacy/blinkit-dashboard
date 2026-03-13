import { useEffect, useState } from "react";
import { getOrderPerDay } from "../services/api";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

function OrderPerDay() {

    const [orderData, setOrderData] = useState([]);
    const [selectedRange, SetSelectedRange] = useState([0, 7]);

    useEffect( () => {
        const fetchData = async () => {
            const data = await getOrderPerDay();
            setOrderData(data);
        }
        fetchData();
    }, []);

    function handleNextClick() {
        if(selectedRange[0] > 0){
            SetSelectedRange([selectedRange[0]-6, selectedRange[1]-6])
        }
    }

    function handlePrevClick() {
        if(orderData.length >= selectedRange[1]){
            SetSelectedRange([selectedRange[0] + 6, selectedRange[1]+6]);
        }
        console.log(selectedRange[1]);
    }

    const filteredData = orderData.slice(selectedRange[0], selectedRange[1]);
    filteredData.reverse();

    console.log(orderData);
    if(orderData.length === 0) return <p>Loading...</p>
    const endDate = orderData[Math.min(orderData.length, selectedRange[0])].date;
    const startDate = orderData[Math.min(orderData.length-1 ,selectedRange[1])].date;
    return(
        <div className="flex flex-col">
        <p>{startDate} -- {endDate}</p>
        <div className="flex gap-4 w-[200px] p-7">
            <button onClick={handlePrevClick}>prev</button>
            <button onClick={handleNextClick}>Next</button>
        </div>
            <ResponsiveContainer height={300} width="80%">
                <LineChart data={filteredData}>
                    <XAxis dataKey="date" />
                    <YAxis/>
                    <Line dataKey="totalOrder" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default OrderPerDay;