import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from "recharts";

export default function PieChartWrapper({ data, datakey, name }) {

    const colors = [
        "#F8CB45", // primary yellow
        "#54B226", // blinkit green
        "#7C8DB5",
        "#A0A0A0",
        "#C2B280",
        "#8FB8A8",
        "#BFA2DB",
        "#D9A5A5"
    ];

    return (
        <div className="bg-[var(--bg-surface)] border border-white/10 rounded-xl p-4">
            <ResponsiveContainer height={220} width="100%">
                <PieChart>

                    <Pie
                        data={data}
                        dataKey={datakey}
                        nameKey={name}
                        outerRadius={80}
                        stroke="none"
                        paddingAngle={2}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={colors[index % colors.length]}
                                stroke="none"
                                style={{
                                    filter: index === 0
                                        ? "drop-shadow(0px 0px 6px rgba(248,203,69,0.4))"
                                        : "none",
                                    opacity: 0.9
                                }}
                            />
                        ))}
                    </Pie>

                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1E1E1E",
                            border: "none",
                            borderRadius: "8px",
                            color: "#fff"
                        }}
                        cursor={{ fill: "rgba(255,255,255,0.05)" }}
                    />

                    <Legend
                        wrapperStyle={{
                            color: "#A0A0A0",
                            fontSize: "12px"
                        }}
                    />

                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}