import React, { Component } from 'react';
import axios from 'axios';

class Postlist extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post: []
        }

    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(Response => {
                console.log(Response);
            })
            .catch(error => {
                console.log(error);

            })
    }


    render() {
        return (
            <div>
                <h1> POST list</h1>
            </div>
        )
    }
}
export default Postlist;