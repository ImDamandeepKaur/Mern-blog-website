// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get('https://mern-blog-backend-m0x4.onrender.com/api/posts')
//       .then(res => setPosts(res.data))
//       .catch(err => console.error("Failed to fetch posts", err));
//   }, []);

//   return (
//     <div>
//       <h2>📚 All Blog Posts</h2>
//       {posts.length === 0 ? (
//         <p>No blog posts yet.</p>
//       ) : (
//         posts.map(post => (
//           <div key={post._id} className="card my-3">
//             <div className="card-body">
//               <h4>{post.title}</h4>
//               <p>{post.content}</p>
//               <small className="text-muted">Author: {post.author}</small>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Home;

// Till Here Original Code

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Typography } from '@mui/material';
// Import your custom CSS
import '../index.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://mern-blog-backend-m0x4.onrender.com/api/posts')
      .then(res => setPosts(res.data))
      .catch(() => setPosts([]));
  }, []);

  return (
    <Box maxWidth={700} mx="auto" mt={6}>
      <Typography variant="h4" mb={3}>All Blog Posts</Typography>
      {posts.length === 0 ? (
        <Typography>No blog posts yet.</Typography>
      ) : (
        posts.map(post => (
          <Card 
            key={post._id} 
            className="glass-card"   // 👈 Added custom class
            sx={{ mb: 2 }}
          >
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography>{post.content}</Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Author: {post.author}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Box>
  );
};

export default Home;
