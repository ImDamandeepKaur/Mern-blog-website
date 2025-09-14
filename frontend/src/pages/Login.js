// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [form, setForm] = useState({ username: '', password: '' });
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         'https://mern-blog-backend-m0x4.onrender.com/api/auth/login',
//         form
//       );
//       localStorage.setItem("token", res.data.token);
//       toast.success("Login successful!");

//       // Add a slight delay to let toast show before redirect
//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 500);
//     } catch (err) {
//       toast.error("Login failed!");
//     }
//   };

//   return (
//     <div className="col-md-6 mx-auto">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Username"
//           className="form-control mb-2"
//           onChange={e => setForm({ ...form, username: e.target.value })}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="form-control mb-2"
//           onChange={e => setForm({ ...form, password: e.target.value })}
//           required
//         />
//         <button className="btn btn-success w-100">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// Till Here Original Code


import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, CircularProgress } from '@mui/material';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('https://mern-blog-backend-m0x4.onrender.com/api/auth/login', form);
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");
      setTimeout(() => { navigate("/dashboard"); setLoading(false); }, 500);
    } catch {
      toast.error("Login failed!");
      setLoading(false);
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={6} p={3} borderRadius={2} boxShadow={2}>
      <Typography variant="h5" mb={2}>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField margin="normal" fullWidth label="Username" name="username" value={form.username} onChange={handleChange} required />
        <TextField margin="normal" fullWidth label="Password" name="password" type="password" value={form.password} onChange={handleChange} required />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          {loading ? <CircularProgress size={24} /> : "Login"}
        </Button>
      </form>
    </Box>
  );
};
export default Login;
