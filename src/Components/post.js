import React from 'react';
import Card from 'react-bootstrap/Card';

const Post = ({ post }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{post.title}</Card.Title>
				<Card.Text>{post.body}</Card.Text>
				<footer className="blockquote-footer text-right">by <cite>{post.userId}</cite></footer>
			</Card.Body>
		</Card>
	);
}

export default Post;
