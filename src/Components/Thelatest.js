import React, { useContext } from 'react'
import { TourContext } from './TourContext'
import { Link } from 'react-router-dom'

const Thelastest = () => {
    const{value2,value4,value5}=useContext(TourContext)
    const[Hollywood]=value2;
    const[Bollywood]=value4;
    const[Food]=value5;
  return (
    <>
    <div className='latestheading'><h1>The-Latest</h1>
    <div className='border-bottoms'></div></div>
    <div className='latest-cont'>
     
        {   // eslint-disable-next-line
Hollywood.map((article,index) => {
if(index>=Hollywood.length-1) {
return(
<div key={index} className="latest-fitness" >
  
<div>
  <Link to={`/Hollywood/${article.id}`}><img  src={  article.image  } style={{height:"200px",width:"300px"}} alt="From The Article"/></Link></div>
<div><h2>Hollywood</h2></div>
<div>
{/* icle.CategoryName}`} className={styles.AllSections_Title}>{  article.Title  }</NavLink>to={`/article/${article.Title}/${art */}
<div >{  article.info  }</div>
</div>
<div>
<span ><h4>{ article.date }</h4></span>
{/* <span > / { article.PublishedDate  }</span> */}
</div>
</div> 
   )
     }
    }
    )    
  }
    
    {  // eslint-disable-next-line
       Bollywood.map((moviedetails,index)=>{
         if(index >= Bollywood.length-1){
         return (
           <div key={index} className='latest-fitness'>
             <div>
               <Link to={`/Bollywood/${moviedetails.id}`}><img  src={moviedetails.image  } style={{height:"200px",width:"300px"}} alt="From The Article"/></Link></div>
    <div><h2>Bollywood</h2></div>
   <div>
   {/* icle.CategoryName}`} className={styles.AllSections_Title}>{  article.Title  }</NavLink>to={`/article/${article.Title}/${art */}
   <div >{  moviedetails.info  }</div>
   </div>
   <div>
     <span ><h4>{ moviedetails.date }</h4></span>
     {/* <span > / { article.PublishedDate  }</span> */}
     </div>
           </div>
         )
         }
       }

       )
    }

{  // eslint-disable-next-line
       Food.map((fooddetails,index)=>{
         if(index >= Food.length-1){
         return (
           <div key={index} className='latest-fitness'>
             <div>
               <Link to={`/Food/${fooddetails.id}`}><img  src={fooddetails.image  } style={{height:"200px",width:"300px"}} alt="From The Article"/></Link></div>
    <div><h2>Food</h2></div>
   <div>
   {/* icle.CategoryName}`} className={styles.AllSections_Title}>{  article.Title  }</NavLink>to={`/article/${article.Title}/${art */}
   <div >{ fooddetails.info  }</div>
   </div>
   <div>
     <span ><h4>{ fooddetails.date }</h4></span>
     {/* <span > / { article.PublishedDate  }</span> */}
     </div>
           </div>
         )
         }
       }

       )
    }



</div>
</> 
                ) 
                  
}

export default Thelastest