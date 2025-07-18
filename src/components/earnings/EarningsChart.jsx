import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const EarningsChart = ({ timeRange = "month" }) => {
  // Mock data based on time range
  const data = {
    day: [
      { name: "12AM", earnings: 400 },
      { name: "3AM", earnings: 300 },
      { name: "6AM", earnings: 600 },
      { name: "9AM", earnings: 800 },
      { name: "12PM", earnings: 500 },
      { name: "3PM", earnings: 900 },
      { name: "6PM", earnings: 600 },
      { name: "9PM", earnings: 400 },
    ],
    week: [
      { name: "Mon", earnings: 1200 },
      { name: "Tue", earnings: 900 },
      { name: "Wed", earnings: 1500 },
      { name: "Thu", earnings: 1800 },
      { name: "Fri", earnings: 2100 },
      { name: "Sat", earnings: 2400 },
      { name: "Sun", earnings: 1800 },
    ],
    month: [
      { name: "Week 1", earnings: 4800 },
      { name: "Week 2", earnings: 5200 },
      { name: "Week 3", earnings: 6100 },
      { name: "Week 4", earnings: 7300 },
    ],
    year: [
      { name: "Jan", earnings: 12000 },
      { name: "Feb", earnings: 9000 },
      { name: "Mar", earnings: 15000 },
      { name: "Apr", earnings: 18000 },
      { name: "May", earnings: 21000 },
      { name: "Jun", earnings: 24000 },
      { name: "Jul", earnings: 18000 },
      { name: "Aug", earnings: 22000 },
      { name: "Sep", earnings: 19000 },
      { name: "Oct", earnings: 21000 },
      { name: "Nov", earnings: 23000 },
      { name: "Dec", earnings: 28000 },
    ],
  };

  const chartData = data[timeRange] || data.month;

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "8px",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
            formatter={(value) => [`$${value}`, "Earnings"]}
          />
          <Legend />
          <Bar
            dataKey="earnings"
            name="Earnings"
            fill="#4f46e5"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
