import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

import './main.css';
import CountryDetail from '../countrydetail/CountryDetail';
// import Data from '../../countries.json'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSup: this.props.data,
      currentCountry: this.props.data[0].name.common,
      
    }
  }


  showContries = () => {
    return(
      this.props.data.map((eachCountry, i)=>{
        return(
          <NavLink key={i} activeClassName="currentLocation" className="wow list-group-item list-group-item-action" to={eachCountry.cca3}><span>{eachCountry.flag}</span> {eachCountry.name.common}</NavLink>
        )
      })
    )
  }

  render() {
    // console.log(this.state.dataSup[0]);

    return (
      <div className="main-component">

        <div>
            <div>
              <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
                  <a className="navbar-brand" href="/">WikiCountries</a>
                </div>
              </nav>
              <div className="container">
                <div className="row">
                  <div className="col-5">
                    <div className="list-group countries-list">

                      {/* My countries will go here */}
                      {this.showContries()}

                    </div>
                  </div>

                  <CountryDetail data={this.props.data}/>
                  {/* <Route path='/country/:details' component={CountryDetail}/> */}

                </div>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default Main;
