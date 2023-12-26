
import { PieChart, Pie, Cell, Label } from "recharts";
import { getStorageSize } from "../Store/Store";

const Statistics = () => {
  const storageSize = getStorageSize();
  const totalSpace = 100; 

  const remainingSpace = totalSpace - storageSize;
  const addedSpace = Math.min(remainingSpace, storageSize); 
  const data = [
    { id: 0, value: storageSize, label: 'Used Space' },
    { id: 2, value: remainingSpace - addedSpace, label: 'Remaining Space' },
  ];

  const COLORS = ['#0088FE', '#FFBB28', '#00C49F'];

  return (
    <div className="flex justify-center">
     <div className=" text-center mt-40">
     <PieChart width={160} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          <Label value={`${remainingSpace}%`} position="left" fontSize={25} fill="red" />

          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}

          <Label
            value={`${storageSize}%`}
            fill="white"
            position="end"
            fontSize={25}
          />
        </Pie>
      </PieChart>
      <div className="flex gap-4">
      <h1 className="flex items-center gap-2">Your Donation   <span className="w-[30px] h-[8px] bg-[#00C49F]"></span>  </h1>
        <h1 className="flex items-center gap-2">Total Donation   <span className="w-[30px] h-[8px] bg-[red]"></span>  </h1>
        </div>
     </div>
    </div>
  );
};

export default Statistics;
