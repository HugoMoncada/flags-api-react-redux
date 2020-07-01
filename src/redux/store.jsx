import {createStore} from 'redux'


const intialState = {
     countryList:[],
     loding:false,
     singleCountry:{
          flag:"",
          name:"",
          nativeName:"",
          population:"",
          region:"",
          subRegion:"",
          capital:"",
          topLevelDomain:"",
          currencies: "",
          languages: [],
          borders:[]
     },
     filterByContinent:[],
     countrySelected: "",
     filterByName:[]
}


const reducer = (state = intialState, action) => {

     switch(action.type){

          case "SET_COUNTRY_LIST":{
               return{
                    ...state,
                    countryList: action.payload
               }
          }
              

          case "SET_ONE_COUNTRY":{

               console.log("Accediendo a un solo pais ",action.payload[0].name);
               console.log("setting loading to true ");
               state.loding= true
               console.log("buscando las fronteras para enviar");
               //Borders show in the obj as an alpha 3 code "ALF" "ARG" u look a new country based on that
               const borderList = action.payload[0].borders.map(item=>{
                    console.log("fronteras del objeto recibido: ",item);    
                    //get countrys based on the alpha code                 
                    let res = state.countryList.filter((country) => country.alpha3Code === item)
                    return res;
               })
               console.log("Completo, Enviando lista de fronteras");

               return{
                    ...state,
                    singleCountry: {
                        flag: action.payload[0].flag,
                        name: action.payload[0].name,
                        nativeName: action.payload[0].nativeName,
                        population: action.payload[0].population ,
                        region: action.payload[0].region,
                        subRegion: action.payload[0].subregion,
                        capital: action.payload[0].capital,
                        topLevelDomain: action.payload[0].topLevelDomain[0],
                        currencies: action.payload[0].currencies[0].name,
                        languages: action.payload[0].languages,
                        borders: borderList
                    },
                    loading:false
               }
          }


          case "FILTER_BY_CONTINENT":{

               console.log("Entrando al filtro por continente para: ", action.payload);
               console.log("Cambiando el estado de filterByName a vacio evitando conflictos");
                    
               return{
                    ...state,
                    filterByContinent: state.countryList.filter((country)=> country.region === action.payload),
                    countrySelected: action.payload,
                    filterByName:[]
               }
          }


          case "FILTER_BY_NAME":{
               console.log("filtering by name");   
               console.log("Cambiando el estado de filterByContinent a vacio evitando conflictos");
            
               return{
                    ...state,
                    filterByName: state.countryList.filter((country) => country.name.toLowerCase().includes(action.payload.toLowerCase())),
                    filterByContinent: [],
                    countrySelected: ""
               }  
          }


          default:
               return state;

     }

}




export  default createStore(reducer)