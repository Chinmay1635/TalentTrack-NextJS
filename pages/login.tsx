import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../src/context/AuthContext';
import Login from '../src/components/Auth/Login';
import Navbar from '../src/components/Layout/Navbar';

export default function LoginPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push(`/${user.role}/dashboard`);
    }
  }, [user, router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {!user && <Login />}
    </div>
  );
}