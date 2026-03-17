import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from "recharts";

export default function PieChartWrapper({data, datakey, name}) {
    console.log(data);
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98D8C8", "#F7DC6F"];
    return(
        <div>
            <ResponsiveContainer height={200} width="100%">
                <PieChart>
                    <Pie data={data} dataKey={datakey} nameKey={name} outerRadius={80}>
                        {data.map((entry, index) => (
                            <Cell key={index} fill={colors[index]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}