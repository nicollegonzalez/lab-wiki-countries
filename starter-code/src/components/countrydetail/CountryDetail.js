// import React, { Component } from 'react';

// // import './App.css';
// import Data from '../../countries.json'

// class CountryDetail extends Component {



//   showBorderingCountriesList = () => {
//     // console.log(this.props.data[0].borders);
//     if(this.props.data[0].borders.length !== 0){
//       return(
//         this.props.data[0].borders.map((eachCountry, i)=>{
//           return(
//             <li key={i}>
//              {eachCountry}
//             </li>
//           )
//         })
//       )
//     }
//     else{
//       return(
//         <li>
//          No bordering countries
//         </li>
//       )
//     }
//   }

  
//   render() {
//     console.log(this.props.data[0]);

//     return (
//       <div className="country-detail-component col-7">
//         <h1>{this.props.data[0].name.common}</h1>
//         <table className="table">
//           <thead></thead>
//           <tbody>
//             <tr>
//               <td>Capital</td>
//               <td>{this.props.data[0].capital[0]}</td>
//             </tr>
//             <tr>
//               <td>Area</td>
//               <td>{this.props.data[0].area} km
//                 <sup>2</sup>
//               </td>
//             </tr>
//             <tr>
//               <td>Borders</td>
//               <td>
//                 <ul>
//                   {/* lis go here */}
//                   {this.showBorderingCountriesList()}
//                 </ul>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default CountryDetail;































import React, { Component } from 'react';

import '../../App.css';



import {Link} from 'react-router-dom';

class CountryDetails extends Component{
 

    fetchCountry = (theCode) =>{
        console.log(theCode.data)
        let theCountry = this.props.allCountries.find((eachC)=>{
            return eachC.cca3 === theCode
        });
         return theCountry;
    }


    render(){
       const theCountry = this.fetchCountry(this.props.match.params.code);
       const theCapital = theCountry.capital[0]
       console.log(theCountry)
       const showBorders = () =>{

        const transformedBorders = theCountry.borders.map(this.fetchCountry);
        console.log("=-=-=-==-=-=-=-=-==-=-=", transformedBorders);
           return theCountry.borders.map((eachBorder, i)=>{

            return (<li key={i}>
                        <Link to ={"/countryDetails/"+eachBorder}  >  {transformedBorders[i].flag} {transformedBorders[i].name.common}   </Link>
                    </li>
            )
            

           })
       }

       


        return(
            <div>

            <h1>{theCountry.name.official}</h1>
            <h4>Capital: {theCapital}</h4>
            <h6>Area: {theCountry.area} km<sup>2</sup></h6>

            <ul>
                {showBorders()}
            </ul>


            </div>
        )
    }



}


export default CountryDetails