import { useState } from 'react';
import './country.css'
const Country = ({country,handelVisitedCountrys}) => {
//    console.log(country);
const {name,flags,cca2,population,area}=country;

const [visited,setVisited]=useState(false);

const handelVisit=()=>{
setVisited(!visited);
}
    return (
        <div className='country'>
            <h3>Name : <span style={{color:'red'}}>{name?.common}</span></h3>
            
            <div style={{width:'100%',height:'200px'}}>
            <img style={{width:'100%',height:'100%'}} src={flags?.png} alt="" />
            </div>
            <p>Code : {cca2}</p>
            <hr/>
            <p>Population:{population}</p>
            <hr />
            <p>Area : {area}</p>
            <button onClick={handelVisit} style={{backgroundColor:visited?'red':'blue',padding:'8px 15px',borderRadius:'8px',border:'none',color:'white',fontSize:'18px'}}>{
                visited?"Visited":"Go To Visit"
            }</button>
           <span style={{color:'blue',marginLeft:'10px',fontSize:'16px'}}> {
                visited?" You Have Visited":" You Have To  Visit"
            }</span>

            <button onClick={()=>{handelVisitedCountrys(country)}}>Visited Cnty</button>
        </div>
    );
};

export default Country;