import React,{Fragment} from 'react'
import {connect} from 'react-redux'

const Select = ({filterByContinent,countrySelected}) => {

    

     return (
          <span>
               <select onChange={(e)=>filterByContinent(e.target.value)} value={countrySelected} className="custom-select w-100">
                    <option value="default" defaultValue>Filter by Region</option>
                    <option value="All">All</option>
                    <option value="Africa" >Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
               </select>
          </span>
     )
}


//This allows me to use whatever is in 
const mapStateToProps = (state) => (
     {
         countrySelected: state.countrySelected
     }     
    )

const mapDispatchToProps = (dispatch) => (
     {
          filterByContinent(continent){
               dispatch({
                    type: "FILTER_BY_CONTINENT",
                    payload: continent
               })
          }
     }
)



export default connect(mapStateToProps, mapDispatchToProps)(Select)
