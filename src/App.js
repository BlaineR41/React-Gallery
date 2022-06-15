import React, { Component } from 'react'
import SearchForm from './components/SearchForm'
import Nav from './components/Nav'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import apiKey from './config'
import PhotoContainer from './components/PhotoContainer'
import NotFound from './components/NotFound'


export default class App extends Component {

  constructor() {
    super();
    this.state = {
        results: [],
        arizona: [],
        utah: [],
        pnw: [],
        query:'colorado'
      };
    }
   
    fetchData(query = this.state.query) {
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`)
        .then(response => response.json())
        .then(responseData => {
          if (query === 'utah'){
            this.setState({utah: responseData.photos.photo });
          }else if (query === 'arizona'){
            this.setState({arizona: responseData.photos.photo });
          }else if (query === 'pnw'){
            this.setState({pnw: responseData.photos.photo });
          }else {
            this.setState({results: responseData.photos.photo });
          }

        })
        .catch(error =>{
          console.log('error fetching and parsing data', error)
        });
      
    }
  componentDidMount () {
    this.fetchData()
    this.fetchData('utah')
    this.fetchData('pnw')
    this.fetchData('arizona')
  }


  render() {
    return (
      <BrowserRouter>
        <SearchForm onSearch={this.fetchData}  />
        <Nav />
        <Switch>
        <Route exact path="/" render={() => <PhotoContainer photos={this.state.results}/>}/>
        <Route path="/arizona" render={() => <PhotoContainer photos={this.state.arizona}/>}/>
        <Route path="/utah" render={() => <PhotoContainer photos={this.state.utah}/>}/>
        <Route path="/pnw" render={() => <PhotoContainer photos={this.state.pnw}/>}/>
        <Route path="/search/:query" render={() => <PhotoContainer photos={this.state.results}/>}  />
        <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
