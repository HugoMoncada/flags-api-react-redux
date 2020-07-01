import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";



const Country = ({flag,name,population,region,capital,setOneCountry}) => {

    //Call a country being selected in the main list based on a name from the api
    //Only happens here border are gotten from the countrylist state by filtering it
     const llamarUno = async (name) => {
          const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
          const data = await res.json()
          console.log(data);
          //function gotten from dispatchtoprops
          setOneCountry(data)
     }
     
     

     return (
          <article className="col col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
               <Link onClick={()=>(llamarUno(name))} to="/singleCountry"  >
               <div className="card text-left">
                 {/* IMPORTANT: 
                    lazy loading images will load when they are required.
                    helps memory tons    
                 */}
                 <img loading="lazy" className="pais" src={flag} alt=""/>
                 <div className="card-body">
                   <h5 className="card-title mb-3"><strong>{name}</strong></h5>
                   <p className="card-text mb-2"><strong>Population: </strong>{population}</p>
                   <p className="card-text mb-2"><strong>Region: </strong> {region}</p>
                   <p className="card-text"><strong>Capital: </strong> {capital}</p>
                 </div>
               </div>  
               </Link>
          </article>
     )
}

const mapStateToProps = (state) => (
     {
         country: state.country
     }     
    )


const mapDispatchToProps = dispatch =>(
     {
          setOneCountry(country){
               dispatch(
                    {
                         type: "SET_ONE_COUNTRY",
                         payload: country
                    }
               )
          }
     }
)

export default connect(mapStateToProps, mapDispatchToProps) (Country)
