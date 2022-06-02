import React, { Component } from 'react'
import SearchForm from './components/SearchForm'
import Nav from './components/Nav'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import apiKey from './config'


export default class App extends Component {

  constructor() {
    super();
    this.state = {
        results: [],
        arizona: [],
        utah: [],
        pnw: []
      };
    }
    
  componentDidMount() {
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1')
    .then(response => response.json())
    .then(responseData => {
      this.setState({results: responseData.data });
    })
    .catch(error =>{
      console.log('error fetching and parsing data', error)
    });
  }

  render() {
    console.log(this.state.results);
    return (
      <BrowserRouter>
        <SearchForm />
        <Nav />
      </BrowserRouter>
    )
  }
}

