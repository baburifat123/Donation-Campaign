import { useEffect, useState } from "react";
import DataDesign from "./DataDesign/DataDesign";


const Data = () => {
    const [datas, setData] = useState([]);
    const [filterData, setFilterData] = useState(null);
  
    useEffect(() => {
      fetch('Data.json')
        .then(res => res.json())
        .then(datas => {
          setData(datas);
          setFilterData(datas);
        })
    }, []);
    
    const serchValue = e => {
        const Search = e.target.value;

        if (Search.trim() === "") {
          setFilterData(null);
        } else {
          const searchFilter = datas.filter(val => val.category.toLowerCase().includes(Search.toLowerCase()));
          setFilterData(searchFilter);
        }
      };
     


    return (
<>
<div className="space-y-10 my-8 lg:my-[150px]">
      <h1 className="text-5xl font-bold text-center">I Grow By Helping People In Need</h1>
      <div className="items-center flex justify-center">
        <input onChange={serchValue} placeholder="Search here" className="w-[400px] h-14 border pl-3" type="text" />
        <div>
          <button className="text-white bg-[#FF444A] text-base p-4 rounded-r-lg" onClick={serchValue}>
            Search
          </button>
        </div>
      </div>
    </div>
    <div className="gap-6 flex-wrap grid md:grid-cols-3 lg:grid-cols-4 mb-10">
      {filterData
        ? filterData.map((data, id) => <DataDesign key={id} data={data}></DataDesign>)
        : datas.map((data, id) => <DataDesign key={id} data={data}></DataDesign>)}
    </div>

 </>
    );
};

export default Data;