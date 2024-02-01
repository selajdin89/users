/* eslint-disable react/prop-types */
import { List, ListItem, ListItemText } from '@mui/material';

import styles from './Comments.module.css';
import { getLastDigit, isLastDigitZero } from './../../helper';
const Comments = ({ selectedPost, comments }) => {
  return (
    <div className={styles.commentsContainer}>
      {selectedPost && comments.length !== 0 ? (
        <h2>
          Comments on post nr:
          {selectedPost.id > 10
            ? getLastDigit(selectedPost.id)
            : isLastDigitZero(selectedPost.id)
            ? '10'
            : selectedPost.id}
        </h2>
      ) : (
        <h2>Comments</h2>
      )}
      {selectedPost && (
        <div className={styles.comments}>
          <List component='ol' disablePadding>
            {comments.map((comment) => (
              <div key={comment.id}>
                <h3></h3>
                <ListItem
                  sx={{ backgroundColor: '#d5bcef', p: 2 }}
                  disablePadding
                >
                  <ListItemText primary={comment.name} />
                </ListItem>
              </div>
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default Comments;
