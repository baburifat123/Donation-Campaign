import { Link } from "react-router-dom";

const DataDesign = ({data}) => {
    const {title, category, image,id} = data;
    return (
        <Link  className=" rounded-3xl flex flex-col " to={`/details/${id}`}>
        <img className="rounded-t-lg" src={image} alt="" />

        <div className="grow rounded-b-lg" style={{ 
            backgroundColor: data.styles.Background,
            padding:'10px'}}>
            
        <h1 style={{ 
        backgroundColor: data.styles.color,
         color:data.styles.textColor, 
         width:'80px',
          padding:'3px', 
          textAlign:"center",
           borderRadius:"5px",}}> 
        {category} 
        </h1>

        <h1 style={{color:data.styles.textColor}}  className="text-lg font-semibold" >{title}</h1>
        </div>
        </Link>
    );
};

export default DataDesign;