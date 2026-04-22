import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMe, signout } from '../api/auth';
import type { User } from '../types/auth';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
      return;
    }
    getMe(token)
      .then(setUser)
      .catch(() => {
        setError('Session expired. Please sign in again.');
        localStorage.removeItem('token');
        navigate('/signin');
      });
  }, []);

  const handleSignout = async () => {
    const token = localStorage.getItem('token') || '';
    await signout(token);
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', padding: 24 }}>
      <h2>Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button
            onClick={handleSignout}
            style={{ width: '100%', padding: 10, fontSize: 16, marginTop: 16 }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;