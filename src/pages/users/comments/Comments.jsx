/* eslint-disable react/prop-types */
import { List, ListItem, ListItemText } from '@mui/material';

import styles from './Comments.module.css';
const Comments = ({ selectedPost, comments }) => {
  return (
    <div className={styles.commentsContainer}>
      <h2>Comments</h2>
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
