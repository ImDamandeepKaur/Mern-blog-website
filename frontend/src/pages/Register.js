// import React, { useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Register = () => {
//   const [form, setForm] = useState({ username: '', password: '' });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('https://mern-blog-backend-m0x4.onrender.com/api/auth/register', form);
//       toast.success("Registered successfully!");
//     } catch (err) {
//       toast.error("Registration failed!");
//     }
//   };

//   return (
//     <div className="col-md-6 mx-auto">
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Username" className="form-control mb-2"
//           onChange={e => setForm({ ...form, username: e.target.value })} />
//         <input type="password" placeholder="Password" className="form-control mb-2"
//           onChange={e => setForm({ ...form, password: e.target.value })} />
//         <button className="btn btn-primary w-100">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

// Till Here Original Code

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Box, TextField, Button, Typography } from '@mui/material';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://mern-blog-backend-m0x4.onrender.com/api/auth/register', form);
      toast.success("Registered successfully!");
    } catch {
      toast.error("Registration failed!");
    }
  };

  return (
    <Box maxWidth={400} mx="auto" mt={6} p={3} borderRadius={2} boxShadow={2}>
      <Typography variant="h5" mb={2}>Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField margin="normal" fullWidth label="Username" name="username" value={form.username} onChange={handleChange} required />
        <TextField margin="normal" fullWidth label="Password" name="password" type="password" value={form.password} onChange={handleChange} required />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Register
        </Button>
      </form>
    </Box>
  );
};
export default Register;

