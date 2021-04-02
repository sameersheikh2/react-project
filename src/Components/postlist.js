import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from './post';

const Postlist = () => {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(({ data }) => {
                console.log('posts: ', data[1]);
                setPosts(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);


    return (
        <Container fluid>
            <h1>Posts</h1>
            {JSON.stringify(posts, null, 2)}
        </Container>
    );
}

export default Postlist;
