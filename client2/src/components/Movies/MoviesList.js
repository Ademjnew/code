import React from 'react';
import { Link } from 'react-router-dom';
import { MovieComponent } from './MovieComponent';
import axios from 'axios'

export class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allMovies: [
            ]
        }
    }


    async componentDidMount(){
        let movies = await axios.get("/api/movies");
        this.setState({allMovies: movies.data});

    }




    // Switch goes to first matching route
    render () {

        let movies = this.state.allMovies ; 
        if(movies.length == 0){
            return (<div>
                Loading data...
            </div>);
        }
        return (
        <div className="movies-list">
            <h3>All Movies</h3>            
            <table className="table">
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        movies.map((Movie, i) => 
                            <MovieComponent
                                key={i}
                                {...Movie}
                                editable = {true} 
                            />
                        )
                    }
                </tbody>
            </table>
            
        </div>
    )
}
}
 