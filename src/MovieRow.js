import React from 'react'

class MovieRow extends React.Component {
    viewMovie(){
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render(){
        return ( 
     <table>
      <tbody>
        <tr>
             <td>
                <img width="70" height="100" alt=" movie" src={this.props.movie.poster_src} style={{
                      paddingTop: 8,
                      paddingLeft: 16,
                    }}/>
            </td>
            <td>
             <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.overview}</p>
            <input type="button" onClick={this.viewMovie.bind(this)} value="View on the movie db"/>
            </td>
        </tr>
    </tbody>
     </table> 
            
        )
    }
}
export default MovieRow