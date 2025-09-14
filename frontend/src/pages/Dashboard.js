// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Dashboard = () => {
//   const [post, setPost] = useState({ title: '', content: '' });
//   const [myPosts, setMyPosts] = useState([]);

//   const token = localStorage.getItem("token");

//   const fetchPosts = () => {
//     axios.get("https://mern-blog-backend-m0x4.onrender.com/api/posts")
//       .then(res => {
//         const user = parseJwt(token)?.username;
//         const mine = res.data.filter(p => p.author === user);
//         setMyPosts(mine);
//       });
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const parseJwt = (token) => {
//     try {
//       return JSON.parse(atob(token.split('.')[1]));
//     } catch {
//       return null;
//     }
//   };

//   const createPost = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("https://mern-blog-backend-m0x4.onrender.com/api/posts", post, {
//         headers: { Authorization: token }
//       });
//       toast.success("Post created!");
//       setPost({ title: '', content: '' });
//       fetchPosts();
//     } catch {
//       toast.error("Failed to create post");
//     }
//   };

//   const deletePost = async (id) => {
//     try {
//       await axios.delete(`https://mern-blog-backend-m0x4.onrender.com/api/posts/${id}`, {
//         headers: { Authorization: token }
//       });
//       toast.success("Post deleted!");
//       fetchPosts();
//     } catch {
//       toast.error("Failed to delete");
//     }
//   };

//   return (
//     <div>
//       <h2>✍️ Write New Blog</h2>
//       <form onSubmit={createPost}>
//         <input
//           type="text"
//           className="form-control my-2"
//           placeholder="Title"
//           value={post.title}
//           onChange={e => setPost({ ...post, title: e.target.value })}
//         />
//         <textarea
//           className="form-control my-2"
//           placeholder="Content"
//           rows="4"
//           value={post.content}
//           onChange={e => setPost({ ...post, content: e.target.value })}
//         ></textarea>
//         <button className="btn btn-primary w-100">Post</button>
//       </form>

//       <h3 className="mt-5">🧾 Your Posts</h3>
//       {myPosts.map(p => (
//         <div key={p._id} className="card my-2">
//           <div className="card-body">
//             <h4>{p.title}</h4>
//             <p>{p.content}</p>
//             <button className="btn btn-danger" onClick={() => deletePost(p._id)}>Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Dashboard;


// Till Here Original Code



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Box, Card, CardContent, Typography, IconButton, TextField, Button } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';

// const Dashboard = () => {
//   const [post, setPost] = useState({ title: '', content: '' });
//   const [myPosts, setMyPosts] = useState([]);
//   const token = localStorage.getItem("token");

//   const parseJwt = token => {
//     try { return JSON.parse(atob(token.split('.')[1])); }
//     catch { return null; }
//   };

//   const fetchPosts = () => {
//     axios.get("https://mern-blog-backend-m0x4.onrender.com/api/posts")
//       .then(res => {
//         const user = parseJwt(token)?.username;
//         const mine = res.data.filter(p => p.author === user);
//         setMyPosts(mine);
//       });
//   };

//   useEffect(() => { fetchPosts(); }, []);

//   const handleChange = e => setPost({ ...post, [e.target.name]: e.target.value });

//   const createPost = async e => {
//     e.preventDefault();
//     try {
//       await axios.post("https://mern-blog-backend-m0x4.onrender.com/api/posts", post, {
//         headers: { Authorization: token }
//       });
//       toast.success("Post created!");
//       setPost({ title: '', content: '' });
//       fetchPosts();
//     } catch {
//       toast.error("Failed to create post");
//     }
//   };

//   const deletePost = async id => {
//     try {
//       await axios.delete(`https://mern-blog-backend-m0x4.onrender.com/api/posts/${id}`, {
//         headers: { Authorization: token }
//       });
//       toast.success("Post deleted!");
//       fetchPosts();
//     } catch {
//       toast.error("Failed to delete");
//     }
//   };

//   return (
//     <Box maxWidth={700} mx="auto" mt={6}>
//       <Typography variant="h4" mb={3}>My Blog Dashboard</Typography>
//       <form onSubmit={createPost}>
//         <TextField label="Title" name="title" value={post.title} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
//         <TextField label="Content" name="content" value={post.content} onChange={handleChange} fullWidth required multiline rows={4} sx={{ mb: 2 }} />
//         <Button type="submit" variant="contained">Create New Post</Button>
//       </form>
//       <Typography variant="h5" mt={4} mb={2}>My Posts</Typography>
//       {myPosts.length === 0 ? (
//         <Typography>No posts yet.</Typography>
//       ) : (
//         myPosts.map(p => (
//           <Card key={p._id} sx={{ mb: 2 }}>
//             <CardContent>
//               <Typography variant="h6">{p.title}</Typography>
//               <Typography>{p.content}</Typography>
//               <Typography color="text.secondary" sx={{ mt: 1 }}>Author: {p.author}</Typography>
//               <IconButton onClick={() => deletePost(p._id)} color="error" sx={{ float: 'right' }}>
//                 <DeleteIcon />
//               </IconButton>
//             </CardContent>
//           </Card>
//         ))
//       )}
//     </Box>
//   );
// };
// export default Dashboard;

// Till here second version of code

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Box, Card, CardContent, Typography, IconButton, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../index.css'; // Ensure CSS is imported

const Dashboard = () => {
  const [post, setPost] = useState({ title: '', content: '' });
  const [myPosts, setMyPosts] = useState([]);
  const token = localStorage.getItem("token");

  const parseJwt = token => {
    try { return JSON.parse(atob(token.split('.')[1])); }
    catch { return null; }
  };

  const fetchPosts = () => {
    axios.get("https://mern-blog-backend-m0x4.onrender.com/api/posts")
      .then(res => {
        const user = parseJwt(token)?.username;
        const mine = res.data.filter(p => p.author === user);
        setMyPosts(mine);
      });
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleChange = e => setPost({ ...post, [e.target.name]: e.target.value });

  const createPost = async e => {
    e.preventDefault();
    try {
      await axios.post("https://mern-blog-backend-m0x4.onrender.com/api/posts", post, {
        headers: { Authorization: token }
      });
      toast.success("Post created!");
      setPost({ title: '', content: '' });
      fetchPosts();
    } catch {
      toast.error("Failed to create post");
    }
  };

  const deletePost = async id => {
    try {
      await axios.delete(`https://mern-blog-backend-m0x4.onrender.com/api/posts/${id}`, {
        headers: { Authorization: token }
      });
      toast.success("Post deleted!");
      fetchPosts();
    } catch {
      toast.error("Failed to delete");
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2 }}>
      <div className="hero-header">
        <h1>Welcome Back to Your Creative Space</h1>
        <p>Write, share, and inspire the world—your story starts now.</p>
      </div>
      <Box width="100%" maxWidth="700px" mt={4} className="glass-card">
        <Typography variant="h5" mb={2} fontWeight="bold" color="primary.dark">
          Create a New Blog Post
        </Typography>
        <form onSubmit={createPost}>
          <TextField label="Title" name="title" value={post.title} onChange={handleChange} fullWidth required sx={{ mb: 2 }} />
          <TextField label="Content" name="content" value={post.content} onChange={handleChange} fullWidth required multiline rows={4} sx={{ mb: 2 }} />
          <Button type="submit" variant="contained" fullWidth sx={{ fontWeight: 'bold' }}>Create</Button>
        </form>
      </Box>
      <Box width="100%" maxWidth="700px" mt={4}>
        <Typography variant="h5" mb={2} fontWeight="bold" color="primary.dark">
          My Posts
        </Typography>
        {myPosts.length === 0 ? (
          <Typography color="#fff" textAlign="center" p={5}>
            No posts yet—start by sharing your first idea!
          </Typography>
        ) : (
          myPosts.map(p => (
            <Card key={p._id} className="glass-card" sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{p.title}</Typography>
                <Typography>{p.content}</Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>Author: {p.author}</Typography>
                <IconButton onClick={() => deletePost(p._id)} color="error" sx={{ float: 'right' }}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))
        )}
      </Box>
    </Box>
  );
};
export default Dashboard;
