import { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { loginUser } from '../api/api';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed. Please check your credentials.');
      console.error(err);
    }
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('login.jpg')" }} 
    >
      <Paper
        elevation={6}
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(5px)',
        }}
        className="p-8 max-w-md w-full"
      >
      <Typography
          variant="h5"
          gutterBottom
          className="text-3xl font-semibold text-center text-gray-800 font-mono">
  Login
</Typography>
        <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-4">
          <TextField
            label="Email"
            name="email"
            type="email"
            autoComplete="off"
            value={form.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <Button onClick={() => navigate('/')}>
            Don't have an account?
          </Button>
        </form>
      </Paper>
    </div>
  );
}
