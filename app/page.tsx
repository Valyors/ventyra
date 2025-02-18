"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Appel API Register
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.status === 201) {
      // Redirige après l'inscription réussie
      router.push('/pages/quiz');
    } else {
      setError(data.error || 'Erreur lors de l\'inscription');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Créer un compte</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            S&apos;inscrire
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Déjà un compte ? <a href="/login" className="text-blue-500">Se connecter</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
