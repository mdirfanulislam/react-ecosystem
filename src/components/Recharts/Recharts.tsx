import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const resultData = [
  { id: 1, name: "Rahim A", roll: 101, dbms: 85, algo: 45, toc: 45 },
  { id: 2, name: "Karim H", roll: 102, dbms: 65, algo: 55, toc: 85 },
  { id: 3, name: "Nusrat J", roll: 103, dbms: 85, algo: 35, toc: 65 },
  { id: 4, name: "Sakib H", roll: 104, dbms: 65, algo: 65, toc: 85 },
  { id: 5, name: "Fatema A", roll: 105, dbms: 85, algo: 75, toc: 65 },
  { id: 6, name: "Tanvir I", roll: 106, dbms: 65, algo: 35, toc: 85 },
  { id: 7, name: "Ayesha S", roll: 107, dbms: 85, algo: 75, toc: 65 },
  { id: 8, name: "Imran K", roll: 108, dbms: 65, algo: 85, toc: 85 },
  { id: 9, name: "Sadia I", roll: 109, dbms: 85, algo: 95, toc: 65 },
  { id: 10, name: "Fahim R", roll: 110, dbms: 65, algo: 65, toc: 85 },
];

const Recharts = () => {
  return (
    <section className="w-full h-125 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          margin={{
            top: 20,
            right: 30,
            bottom: 30,
            left: 20,
          }}
          data={resultData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            label={{
              position: "insideBottomRight",
              value: "Revenue",
              offset: -15,
            }}
            stroke="black"
            dataKey="name"
            fontSize={12}
            interval={0}
            tickMargin={10}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis
            label={{
              value: "Marks",
              angle: -90,
              position: "insideLeft",
              offset: -15,
            }}
            stroke="black"
            width={30}
          />
          <Line type="step" dataKey="dbms" stroke="red" strokeWidth={2} />
          <Line type="natural" dataKey="algo" stroke="green" strokeWidth={2} />
          <Line type="monotone" dataKey="toc" stroke="blue" strokeWidth={2} />
          <Legend verticalAlign="top" height={36} />
          <Tooltip />
          <RechartsDevtools />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
};

export default Recharts;
