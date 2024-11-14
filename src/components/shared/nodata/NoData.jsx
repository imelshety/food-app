
import nodata from "/assets/nodata.png";
const NoData = () => {
  return (
   <div className="w-100 d-flex justify-content-center ">
     <img src={nodata} alt="no-data img" className="w-50" />
     <p>no data availbe </p>
   </div>
)
}

export default NoData