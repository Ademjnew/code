import React from 'react';
import { Link } from 'react-router-dom';
import { MovieComponent } from './MovieComponent';
import axios from 'axios'

export class UserMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userMovies: [
            ],
            users: []
        }
        this.userId = React.createRef();
        this.submit = this.submit.bind(this);

    }


    async componentDidMount(){
        let users = await axios.get("/api/users");
        console.log(users)
        
        this.setState({users: users.data});


    }


    async submit(e) {
        e.preventDefault();
        let userId = this.userId.current.value;
           

        this.userId.current.value = '';
        console.log(userId);
        let movies = await axios.get("/api/users/"+userId);
        console.log(movies.data.movies);
        this.setState({userMovies: movies.data.movies});

    }



    // Switch goes to first matching route
    render () {

        let users = this.state.users ; 
        if(users.length === 0){
            return (<div>
                Loading data...
            </div>);
        }
        let optionItems = users.users.map((user) =>
            <option key={user.id}>{user.id}</option>
        );

        const movies = this.state.userMovies ; 
        return (
            <div className="movies-list">
            <div className="form-container">
            <form onSubmit={this.submit} className="form black-container">
                <label>
                    <h3>Choose a user to check his movies</h3>
                    <br />
                    <br />
                    <br />
                </label>
                
                <label>
                    userId: <br />
                    <select ref={this.userId} >
                        {optionItems}
                    </select>
                </label>
                <input type="submit" value="SUBMIT" />
            </form>
        </div>
            {
                movies.length == 0 ?  <div>choose a user and hit submit</div>:
            

            <div className="movies-list">
                <h3>All Movies</h3>            
                <table className="table">
                    <thead>
                     <tr>
                        <th>userId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                        <th>Edit Movie</th>

                    </tr>
                    </thead>
                    <tbody> 
                        
                           
                        {
                            
                            movies.map((Movie, i) => 
                                <MovieComponent
                                    key={i}
                                    {...Movie}
                                />
                            )
                        }
                         
                    </tbody>
                </table>
            

</div>
}
</div>
    );
}
}
 