import React, {useEffect} from 'react'
import Country from './Country'
import {connect} from 'react-redux'
import Select from './Select'
import Search from './Search'


const CountryList = ({countryList, setCountryList,filterByContinent,filterByName}) => {

     

     // if(Number(filterByContinent.length)=== 0){
     //      console.log("Vacia lista por filtro?",true);
     // }
     // else{
     //      console.log("Vacia lista por filtro?",false);
     // }

     // calling api to get all countries
     const getCountryList = async () => {
          const res = await fetch('https://restcountries.eu/rest/v2/all')
          const data = await res.json(res);
          //This dispatch to the reducer via mapStateToProps
          setCountryList(data);          
     }


     useEffect(() => {
          getCountryList();
     },[])

     return (
        
          <section>

               {/* filters */}
               <article className="container row navbar justify-content-between mb-4 buscadores">
                    <div className="col-12 col-md-6 mb-4">
                         <Search/> 
                    </div>
                    
                    {/* so i can justify the regions */}
                    <form className="form-inline pl-4 pr-1 mb-4">
                          <Select/>
                    </form>
               </article>


               <article className="row">
                    {
                         // What this shows depends on state variables manipulated by select and search components 
                         // when the select combobox changes it changes the variable and fill the filterByContinent list
                         // When the search bar changes it fills the filterbycontinet list
                         // Each case in the reducer when called resets the other list to ""
                         // if both are empty it will show all of the countrys, 
                         // if filterByContinent is full it resets filterByName to "" and this shows filterByContinent list
                         // if filterByName is full it resets filterByContinent to "" and this shows filterByName list
                         // Depending on wich list is full this shows one or another

                         Number(filterByContinent.length) === 0 && Number(filterByName)=== 0?(
                              countryList.map(country=>(
                                   <Country key={country.name}
                                        flag={country.flag}
                                        name={country.name}
                                        population={country.population}
                                        region={country.region}
                                        capital={country.capital}
                                   />
                              ))
                         ):
                         Number(filterByContinent.length) !== 0 && Number(filterByName) === 0?
                         (
                              filterByContinent.map(country=>(
                                   <Country key={country.name}
                                        flag={country.flag}
                                        name={country.name}
                                        population={country.population}
                                        region={country.region}
                                        capital={country.capital}
                                   />
                              ))
                         ):
                         Number(filterByContinent.length) === 0 && Number(filterByName) !== 0?
                         (
                              filterByName.map(country=>(
                                   <Country key={country.name}
                                        flag={country.flag}
                                        name={country.name}
                                        population={country.population}
                                        region={country.region}
                                        capital={country.capital}
                                   />
                              ))
                         ):(
                              <h1>Ups!! something went wrong</h1>
                         )
                         
                        

                    }
               </article>               
             
          </section>
     )
}

//This allows me to use whatever is in the store as props
const mapStateToProps = (state) => (
 {
     countryList: state.countryList,
     filterByContinent: state.filterByContinent,
     filterByName: state.filterByName
 }     
)


//This allows me to use setCountryList as a prop inside the component
const mapDispatchToProps = dispatch =>(
     {
          setCountryList(data){
               dispatch(
                    {
                    type:"SET_COUNTRY_LIST",
                    payload: data
                    }
               )
          }
     }
)

export default connect(mapStateToProps, mapDispatchToProps) (CountryList)
