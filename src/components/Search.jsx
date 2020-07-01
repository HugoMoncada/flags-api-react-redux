import React, { Fragment } from 'react'
import {connect} from 'react-redux'

const Search = ({filterByName}) => {
     return (
          <Fragment>
               <span className="input-group">
               <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">
                         <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                         </svg>
                    </span>
               </div>
               
               <input className="form-control inputBusqueda" type="text" placeholder="Search for a country..." onChange={(e) => filterByName(e.target.value)}/>
          </span>
          </Fragment>


     )
}


const mapStateToProps = (state) => (
     {
          countryList: state.countryList
     }
)


const mapDispatchToProps = (dispatch) => (
     {
          filterByName(name){
               dispatch({
                    type: "FILTER_BY_NAME",
                    payload: name
               })
          }
     }
)

export default connect(mapStateToProps,mapDispatchToProps)(Search)
