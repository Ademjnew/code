import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class EditMovie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: {
          id: '',
          userId: '',
          title: '',
          body: ''
      }
    };
  }

  async componentDidMount() {
    let movie = await axios.get('/api/movies/'+this.props.match.params.id)

    this.setState({ movie: movie.data.movie[0] });
      
  }

  onChange = (e) => {
    const state = this.state.movie
    state[e.target.name] = e.target.value;
    this.setState({movie:state});
  }

   onSubmit= async (e) => {
    e.preventDefault();

    const { id, userId, title, body } = this.state.movie;

    let newMovie = await axios.put('/api/movies/'+this.props.match.params.id,{ id, userId, title, body });
  }

  render() {
    return (
      <div className="form-container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              EDIT MOVIE
            </h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="id">id:</label>
                <input type="text" className="form-control" name="id" value={this.state.movie.id} onChange={this.onChange} placeholder="id" />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" value={this.state.movie.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div className="form-group">
                <label htmlFor="body">Body:</label>
                <input type="text" className="form-control" name="body" value={this.state.movie.body} onChange={this.onChange} placeholder="body" />
              </div>
             
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

