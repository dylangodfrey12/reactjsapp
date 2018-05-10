import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
//jquer
import $ from 'jquery'

class App extends Component {
constructor(props) {
  super(props)
  this.state ={}
/*
const movies = [
  {id:0, poster_src: "https://image.flaticon.com/icons/svg/861/861054.svg", title: "Avengers: Infinity War", overview: " some thing something darkside"},
  {id:1, title: "Avengers: Infinity War", overview: " some thing something darkside"},
  {id:2, title: "Avengers: Infinity War", overview: " some thing something darkside"},
  {id:3, title: "Avengers: Infinity War", overview: " some thing something darkside"},

]
  var movieRows = []
  movies.forEach((movie) => {
    const movieRow = <MovieRow movie={movie}/>
    movieRows.push(movieRow)
  })

  this.state = {rows: movieRows}*/
this.performSearch("avengers")
 
}
searchChangeHandler(event){
  console.log(event.target.value)
  const searchTerm = event.target.value
  this.performSearch(searchTerm)
}
performSearch(searchTerm) {
  const urlString = "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&language=en-US&api_key=9d19d277d39bf6f8c7a9021241ed10c1&query=" + searchTerm
  $.ajax({
    url: urlString,
    success: (searchResults)=> {
      console.log(searchResults)
      const results = searchResults.results
      var movieRows = []
      results.forEach((movie)=>{
        movie.poster_src = "http://image.tmdb.org/t/p/w185" + movie.poster_path
       // console.log(movie.poster_path)
        const movieRow = <MovieRow movie={movie}/>
        movieRows.push(movieRow)
      })
      this.setState({rows: movieRows})
    },
    error:(xhr,status,err)=>{
      console.log(err)
    }
  })
}

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="leaf.svg"/>
              </td>
              <td>
                <h2>Super Movie Searcher Powered by React</h2>
              </td>
            </tr>  
          </tbody>
        </table>
        <input style={{
          fontSize: 24,
          display: 'block',
          width: "99%",
          paddingTop: 8,
          paddingLeft: 16,
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter a Movie"/>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
