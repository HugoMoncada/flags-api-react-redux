import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

// ! importante: Los componentes se cargar primero que la info que hay en el reducer
// ! cuando la info se ha subido a la store desde otro componente, en este caso 
// ! El componente card esta rodeado por un link que lleva a esta pagina,
// ! El cargar la pagina se hace primero que la llevada de informacion al reducer
// ! asi que hay que darlea la store un estado loading 
// ! entonces con esto .. se envia la informacion desde el componente country al reducer
// ! la pagina carga pero en el reducer el estado loading esta en true
// ! el estado cambia a false una vez se devuelve o cambia la informacion
// ! esta pagina muestra informacion dependiendo de si el estado loading esta true o false
// ! si loading es true la informacion aun no esta en la store , si cambia a false cambia este componente 
// ! SI NO SE HACE ESTO NO SE CARGA NADA POR QUE NO HAY NADA EN EL STATE CUANDO ESTO CARGA   

  
const SingleCountry =({country,loading, setOneCountry}) => {


  
     return (
          <div>
               {
                    loading ? 
                    (<div>loading</div>)
                    :
                    (
                    <section className="row mb-5">

                         <div className="col-md-6">
                              <div className="card singleCountryImg">
                                   <img src={country.flag} alt=""/>
                              </div>
                         </div>

                         <article className="col-md-6 p-3">

                              <div className="row">
                                   <h2 className="col-12 mt-2 mb-4"><strong>{country.name}</strong></h2>
                              </div>

                              <div className="row singleCardData">
                                   <div className="col-sm-12 col-md-6 mb-3">
                                        <p><strong>Native Name: </strong>{country.nativeName}</p>
                                        <p><strong>Population: </strong>{country.population}</p>
                                        <p><strong>Region: </strong>{country.region}</p>
                                        <p><strong>Sub Region: </strong>{country.subregion}</p>
                                        <p><strong>Capital: </strong>{country.capital}</p>
                                   </div>
                                   <div className="col-sm-12 col-md-6 mb-3">
                                        <p><strong>Top Level Domain: </strong>{country.topLevelDomain}</p>
                                        <p><strong>Currencies: </strong>{country.currencies}</p>
                                        <p><strong>Languages: </strong>
                                        {
                                              country.languages.map(item=>(
                                             <span key={item.name}>{item.name}</span>
                                                  ))
                                        }
                                        </p>
                                   </div>
                              </div>
                              <div className="col-12 px-3"><strong className="mr-1">Borders Countries: </strong>
                              {
                                   //Border recibes objects filtered in the reducer gotten from the countrylist no api fetch
                                   //this got a list of lists so i had to access one level deeper
                                   //Each button has a method that set the new values for one single country
                                   country.borders.map(border=>(
                                        <span key={border[0].name}><button className="btn btn-outline-dark py-0 px-3 mr-2 mb-2" onClick={()=>setOneCountry(border)} >{border[0].name}</button></span>
                                   ))
                              }
                              </div>
                              
                              
                         </article>
                    </section>
                    )
                    
               }
                    <Link className="btn btn-light btn-lg btn-block mx-0 btnSinglePage" to="/">
                         <svg width="1.2em" height="1.2em" viewBox="0 0 15 17" className="mr-1 bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <path fillRule="evenodd" d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                         <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                         </svg>
                         Back
                    </Link>
          </div>
     )
     
}

const mapStateToProps = (state) =>  (
     {
          country: state.singleCountry,
          loading: state.loading
     }
)

const mapDispatchToProps =(dispatch) => (
     {
          setOneCountry(country){
               dispatch({
                    type: "SET_ONE_COUNTRY",
                    payload: country
               })
          }
     }
)



export default connect(mapStateToProps, mapDispatchToProps)(SingleCountry)
