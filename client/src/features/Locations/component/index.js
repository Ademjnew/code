import React, {Component} from 'react';
import {post} from 'axios';
import config from '../../../config/config.json'


// Alter defaults after instance has been created

export default class Location extends Component {

    componentWillMount() {
        this.props.getUploadsHistory()
    }

    state = {
        file: null
    }

    fileUpload = () => {
        const url = config[process.env.NODE_ENV].api;
        const formData = new FormData();
        formData.append('file', this.state.file)

        const options = {
            headers: {
                'content-type': 'multipart/form-data',
                'x-access-token': this.props.user.token
            }
        }
        post(url + 'location/shapfile', formData, options).then(response => {
            console.log(response.data.message)
        })
    }

    render() {
        const files = this.props.files ? this.props.files.map(e =>
            (
                <tr>
                    <td>{e.fileName}</td>
                    <td>{e.createdAt.replace('T', ' ').replace('Z', ' ')}</td>
                </tr>
            )
        ) : null;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 p-5">
                        <div className="form-group">
                            <label htmlFor="file">ShapeFile</label>
                            <input name="file" type="file"
                                   onChange={
                                       (e) => {
                                           this.setState({file: e.target.files[0]})
                                       }
                                   }
                            />
                        </div>
                        <button className="btn btn-success" onClick={this.fileUpload}>
                            Save
                        </button>
                    </div>
                    <div className="col-md-12">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <td>File</td>
                                <td>Date</td>
                            </tr>
                            </thead>
                            <tbody>
                            {files}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
            ;
    }
}


