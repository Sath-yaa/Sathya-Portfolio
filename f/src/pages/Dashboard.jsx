import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import MapView from '../components/MapView';
import { updateUserLocation } from '../api/api';
import axios from 'axios';
export default function Dashboard() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [loading, setLoading] = useState(false);
  const fetchLocation = () => {setLoading(true);
    navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        try {
          const geoRes = await axios.get('https://nominatim.openstreetmap.org/reverse', {
            params: { format: 'json', lat, lon: lng },
          });
          const place = geoRes.data.display_name;
          const weatherRes = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
              lat,lon: lng,units: 'metric',appid: 'e13f204ab40f107d6dac8094d8f4298d',},
          });
          const temperature = weatherRes.data.main.temp;
          const res = await updateUserLocation({
            userId: user._id,
            location: { lat, lng, place, temperature },
          });

          localStorage.setItem('user', JSON.stringify(res.data));
          setUser(res.data);
        } catch (err) {
          console.error('Failed to fetch data:', err);
          alert('Failed to fetch location or temperature.');
        } finally {
          setLoading(false);
        }
      },
      (err) => {
        console.error('Geolocation error:', err);
        alert('Location permission denied or not available.');
        setLoading(false);
      }
    );
  };

  const handleMapClick = async ({ lat, lng, place, temperature }) => {
    try {
      const res = await updateUserLocation({
        userId: user._id,
        location: user.location,
        extraPin: { lat, lng, place, temperature },
      });
      localStorage.setItem('user', JSON.stringify(res.data));
      setUser(res.data);
    } catch (err) {
      console.error('Update pin failed:', err);
      alert('Unable to save pin location.');
    }
  };

  if (!user) return <Typography variant="h6">Loading user data...</Typography>;

  return (
    <div
      className="p-6 bg-black/60 shadow-xl rounded-xl"
      style={{
        backgroundImage: "url('pexels-apasaric-1694000.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" className="mb-4 font-semibold text-white">
        Welcome, {user.name}
      </Typography>

      <div className="flex gap-4 mb-4">
        <Button
          variant="contained"
          onClick={fetchLocation}
          disabled={loading}
          className="!bg-blue-600 hover:!bg-blue-700 !text-white shadow-md"
        >
          {loading ? 'Fetching...' : 'Get Current Location'}
        </Button>
      </div>

      <MapView user={user} onMapClick={handleMapClick} />
    </div>
  );
}
