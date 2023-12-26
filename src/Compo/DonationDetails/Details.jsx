import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaveStoreData } from "../Store/Store";
const Details = () => {
   const Datas = useLoaderData();
   const { id } = useParams();
   const FasIn = parseInt(id);
   const data = Datas.find(data => data.id === FasIn);
   const notify = () => {
      SaveStoreData(FasIn);
      toast("Donate Compalete");
   }
   return (
      <>
         <div className="max-w-[1320px] m-auto overflow-hidden mt-4">
            <div className="relative h-[700px]">
               <img className="w-full h-full" src={data.image} alt="" />
               <div className="absolute bottom-0 left-0 flex items-center  z-10 bg-[#64606080] w-full h-[130px]">
                  <button onClick={notify}
                     className="text-white text-xl font-semibold p-3 rounded-md ml-3"
                     style={{ backgroundColor: data.styles.textColor }}>
                     Donate {data.price}
                  </button>
               </div>
            </div>
            <div className="">
               <h1 className="text-5xl font-semibold mt-5">{data.title}</h1>
               <p className="text-[#0B0B0BB2] my-5">{data.description}</p>
            </div>
         </div>
         <ToastContainer />
      </>
   );
};

export default Details;
