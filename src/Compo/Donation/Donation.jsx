import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { StoreData } from "../Store/Store";

const Donation = () => {
    const DonationData = useLoaderData();
    const [filteredData, setFilteredData] = useState([]);
    const [cousto, setcousto] = useState(4);

    useEffect(() => {
        const donate = StoreData();
        if (DonationData.length > 0) {
            const AllData = DonationData.filter((data) => donate.includes(data.id));
            setFilteredData(AllData);
        }
    }, []);

    return (
        <div className="max-w-[1320px] m-auto overflow-hidden mt-12">
            <div className="grid lg:grid-cols-2  gap-3 items-center">
                {filteredData.slice(0, cousto).map((donat, id) => (
                    <div key={id} className=" lg:flex">
                        <div>
                            <img className=" lg:w-[220px] lg: h-[200px] rounded-l-md" src={donat.image} alt="" />
                        </div>
                        <div className="grow space-y-3 rounded-r-md" style={{ 
                            backgroundColor: donat.styles.Background,
                            padding: '10px'
                        }}>
                            <h1 style={{ 
                                backgroundColor: donat.styles.color,
                                color: donat.styles.textColor,
                                width: '80px',
                                padding: '3px',
                                textAlign: "center",
                                borderRadius: "5px",
                            }}>
                                {donat.category}
                            </h1>
                            <h1 className="text-2xl  font-semibold mt-5">{donat.title}</h1>
                            <h1 style={{color: donat.styles.textColor}} className="text-lg font-semibold">{donat.price}</h1>
                            <button style={{background: donat.styles.textColor}} className="text-lg font-semibold text-white p-2 rounded-md">{donat.button}</button>
                        </div>
                    </div>
                ))}
            </div>
            <div onClick={() => setcousto(DonationData.length)} className={DonationData.length === cousto ? 'hidden' : ''} style={{ textAlign: "center" }}>
          <button className="p-3 text-white bg-[#009444] text-center text-lg rounded-md mt-4">See All</button>
</div>

        </div>
    );
};

export default Donation;
