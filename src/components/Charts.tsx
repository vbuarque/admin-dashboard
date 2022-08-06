import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../styles/chart.scss";

const data = [
  {
    name: "0",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "1",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "3",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "4",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "5",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "6",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "7",
    uv: 2412,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "8",
    uv: 1432,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "9",
    uv: 4432,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "10",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
 
];

export function Charts() {
  return (
    <div className="chart">

      <div className="title">
        <div className="title-chart">
          <h3>Today’s trends</h3>
          <span>as of 25 May 2019, 09:41 PM</span>
        </div>

        <div className="chart-description">
          <span className="blue-description">Today</span>
          <span>Yesterday</span>
        </div>
      </div>

      <AreaChart
        width={686}
        height={380}
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom:0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#DFE0EB" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#DFE0EB" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3751FF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3751FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#3751FF"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#DFE0EB"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
}
