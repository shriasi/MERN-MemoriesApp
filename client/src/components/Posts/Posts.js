import React from 'react';

import { useSelector } from 'react-redux';
import posts from '../../reducers/posts';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = useSelector((state) => state.posts);
const classes = useStyles();

console.log(posts);

const Posts = () => {
   
  const classes = useStyles();
    return (
        <>
        <h1>Posts</h1>
        <Post />

        <Post />

        </>
     );
}
export default Posts;