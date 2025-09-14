// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar navbar-dark bg-dark px-3">
//       <Link className="navbar-brand" to="/">📝 MERN-Blog</Link>
//       <div>
//         {localStorage.getItem("token") ? (
//           <>
//             <Link className="btn btn-outline-light mx-2" to="/dashboard">Dashboard</Link>
//             <button className="btn btn-danger" onClick={logout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <Link className="btn btn-outline-light mx-2" to="/login">Login</Link>
//             <Link className="btn btn-outline-light" to="/register">Register</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//till here original code

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar>
        <Button component={Link} to="/" color="inherit" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          📝 MERN-Blog
        </Button>
        {token ? (
          <>
            <Button component={Link} to="/dashboard" color="primary">Dashboard</Button>
            <Button onClick={logout} color="secondary">Logout</Button>
          </>
        ) : (
          <>
            <Button component={Link} to="/login" color="primary">Login</Button>
            <Button component={Link} to="/register" color="secondary">Register</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

