import { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { registerUser } from '../api/api';
import { useNavigate } from 'react-router-dom';
export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(form);
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    navigate('/dashboard');
  };

  return (
     <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('register.jpg')" }}
    >
      <Paper
        elevation={4}
        className="w-full max-w-md p-6 rounded-b-4xl"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
        }}
      >
      <Typography variant="h5" gutterBottom>
        <center>Register</center>
      </Typography>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField label="Name" name="name" autoComplete="off" value={form.name} onChange={handleChange} required />
        <TextField label="Email" name="email" type="email" autoComplete="off" value={form.email} onChange={handleChange} required />
        <TextField label="Password" name="password" type="password" autoComplete="new-password"  value={form.password} onChange={handleChange} required />
        <Button type="submit" variant="contained">Register</Button>
        <Button onClick={() => navigate('/login')}>Already have an account?</Button>
      </form>
    </Paper>
    </div>
  );
}
