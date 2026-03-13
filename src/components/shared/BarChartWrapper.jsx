import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function BarChartWrapper({data, xaxis, yaxis}) {
    console.log(data);
    return(
        <>
            <ResponsiveContainer height={300} width="80%">
                <BarChart data={data} > 
                    <XAxis dataKey={xaxis} />
                    <YAxis/>
                    <Bar dataKey={yaxis} barSize={70}/>
                    <Tooltip />
                </BarChart>
            </ResponsiveContainer>
        </>
    )

}