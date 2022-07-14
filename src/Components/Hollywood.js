import { useContext } from "react";
import { TourContext } from "./TourContext";
import { Link } from "react-router-dom";

const Hollywood = () =>{
    const {value2}=useContext(TourContext)
    const[Hollywood]=value2;
    console.log("Hollywood")

    return (
        <div className="tourism-cont">
        <div className='main-cont'>
        <div className='top-heading'>
           <div><h2>Hollywood</h2></div>
           <div className='toppost-border'></div>
           </div>
            {
            Hollywood.map( (Hollywooddetails,index) =>
              <div className='design'>
                <div >
               <Link to={`/Hollywood/${Hollywooddetails.id}`}><img className="images" src={Hollywooddetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h2>{Hollywooddetails.name}</h2>
              </div>
              
              <div>
              <p>{ Hollywooddetails.info}</p> 
              </div>
              <div>
                <h2>{Hollywooddetails.date}</h2>
              </div>
              </div>
              </div>
            
              )
            }
            
        </div>

          <div className='main-cont1'>
          <div className='top-heading'>
           <div><h2>Top-Posts</h2></div>
           <div className='toppost-border'></div>
           </div>
            {
            Hollywood.map( (Hollywooddetails,index) =>
              <div className='design1'>
                <div >
                <Link to={`/Hollywood/${Hollywooddetails.id}`}><img className="images1" src={Hollywooddetails.image} alt="" /></Link>
                </div>
                <div className='content-data'>
              <div >
               <h3>{Hollywooddetails.name}</h3>
              </div>
              
              <div>
                <h5>{Hollywooddetails.date}</h5>
              </div>
              </div>
              </div>
            
              )
            }
          </div>
      </div>
    )
}
export default Hollywood