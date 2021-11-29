import { FC, useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import EditIcon from '@mui/icons-material/Edit';

import { getPosts } from '../../services/getPosts';
import { Post } from '../../types/post';

import classes from './Posts.module.scss';
import { IconButton } from '@mui/material';

const Posts: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    try {
      setIsLoading(true);
      const newPosts = await getPosts();
      setPosts(newPosts);
    } catch (e) {
      console.warn('Error on posts fetch', e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={classes.wrap}>
      {!isLoading ? (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Title</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell component="th" scope="row">
                    {post.id}
                  </TableCell>
                  <TableCell>{post.userId}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Posts;
