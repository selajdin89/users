/* eslint-disable react/prop-types */
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import styles from './Posts.module.css';

const Posts = ({ selectedUser, userPosts, handlePostClick }) => {
  return (
    <div className={styles.postsContainer}>
      <List component='ol' disablePadding>
        {selectedUser ? <h2>Posts by {selectedUser.name}</h2> : <h2>Posts</h2>}
        {selectedUser && (
          <div className={styles.posts}>
            {userPosts.map((post, index) => (
              <div key={post.id}>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => handlePostClick(post)}>
                    <ListItemText primary={`${index + 1}. ${post.title}`} />
                  </ListItemButton>
                </ListItem>

                <Divider />
              </div>
            ))}
          </div>
        )}
      </List>
    </div>
  );
};

export default Posts;
