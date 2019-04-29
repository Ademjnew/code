import React from 'react';
import axios from 'axios';



export class AddMovie extends React.Component {

    constructor(){
        super();

        this.state = {
           users:[]
          }
        this.submit = this.submit.bind(this);

        this.userId = React.createRef();
        this.id = React.createRef();
        this.title = React.createRef();
        this.body = React.createRef();

    }



    async componentDidMount(){
        let users = await axios.get("/api/users");
        
        this.setState({users: users.data});

    }

    
    async submit(e) {
        e.preventDefault();
        let newMovie = {
            userId : this.userId.current.value,
            _id : this.id.current.value,
            title : this.title.current.value,
            body : this.body.current.value,
        };

        this.userId.current.value = this.id.current.value = this.title.current.value = this.body.current.value = '';
        console.log(newMovie);
        let movie = await axios.post("/api/movies", newMovie);
        console.log(movie);

    }


    render(){
        let users = this.state.users ; 
        if(users.length === 0){
            return (<div>
                Loading data...
            </div>);
        }
        let optionItems = users.users.map((user) =>
            <option key={user.id}>{user.id}</option>
        );


    return (
        <div className="form-container">
            <form onSubmit={this.submit} className="form black-container">
                <label>
                    <h3>Add a Movie</h3>
                    <br />
                    <br />
                    <br />
                </label>
                <label>
                    id: <br/>
                    <input 
                        id="id"
                        type="number"
                        required
                        ref={this.id} 
                    />
                </label>
                <label>
                    title: <br />
                    <input
                        id="title"
                        type="text"
                        required
                        ref={this.title} 
                    />
                </label>
                <label>
                    body: <br />
                    <input
                        id="body"
                        type="text"
                        required
                        ref={this.body} 
                    />
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
    );
}
}