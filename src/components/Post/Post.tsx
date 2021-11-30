import { FC, useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';

import { getPost } from '../../services/getPost';
import { FullPost } from '../../types/post';

import MainInfo from './components/MainInfo';
import Statuses from './components/Statuses';
import Disclaimers from './components/Disclaimers';
import PostTypes from './components/PostTypes';
import Formats from './components/Formats';
import classes from './Post.module.scss';

const Posts: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<FullPost | null>(null);

  const { id } = useParams<{ id: string }>();

  async function fetchPost() {
    try {
      setIsLoading(true);
      const newPost = await getPost(Number(id));
      setPost(newPost);
    } catch (e) {
      console.warn('Error on post fetch', e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className={classes.wrap}>
      {!isLoading ? (
        post ? (
          <>
            <MainInfo
              mainHeadline={post.mainHeadline}
              body={post.body}
              fbTitle={post.fbTitle}
              fieldClass={classes.field}
            />

            <div className={classes['secondary-wrap']}>
              <div className={classes.box}>
                <Statuses
                  status={post.status}
                  topStatus={post.topStatus}
                  advStatus={post.advStatus}
                  fieldClass={classes.field}
                />
                <Disclaimers
                  disclaimers={post.disclaimers}
                  fieldClass={classes.field}
                />
                <PostTypes
                  isBreakingNews={post.isBreakingNews}
                  isAdv={post.isAdv}
                  isEditorPick={post.isEditorPick}
                  isSmartNews={post.isSmartNews}
                  isOperaRss={post.isOperaRss}
                  fieldClass={classes.field}
                />
              </div>

              <div className={classes.box}>
                <TextField
                  label="Description"
                  multiline
                  rows={6}
                  value={post.description}
                />
              </div>

              <div className={classes.box}>
                <Formats format={post.format} fieldClass={classes.field} />
              </div>
            </div>
          </>
        ) : (
          <>Invalid post id</>
        )
      ) : (
        <CircularProgress className={classes.loader} />
      )}
    </div>
  );
};

export default Posts;
