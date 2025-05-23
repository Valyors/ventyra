// app/pages/register/page.tsx

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/navbar';

const Register = () => {
  const [email, setEmail] = useState('');
  const [pseudo, setPseudo] = useState(''); // nouvel état pour le pseudo
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Appel API Register en incluant le pseudo
    const res = await fetch('/api/auth-md5/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, pseudo, password }),
    });

    const data = await res.json();

    if (res.status === 201) {
      // Sauvegarder le token dans le localStorage
      localStorage.setItem("token", data.token);
      // Redirige après l'inscription réussie
      router.push('/pages/enter-code');
    } else {
      setError(data.error || 'Erreur lors de l\'inscription');
    }
  };

  function scrollToFormation(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#032720]">
      <Navbar scrollToFormation={scrollToFormation} />
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#032720]">Créer un compte</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#9EA3BF]">Pseudo</label>
            <input
              type="text"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              className="mt-1 p-2 border border-[#9EA3BF] rounded-md w-full text-[#032720]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-[#9EA3BF]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border border-[#9EA3BF] rounded-md w-full text-[#032720]"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-[#9EA3BF]">Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border border-[#9EA3BF] rounded-md w-full text-[#032720]"
              required
            />
          </div>

          <button type="submit" className="w-full bg-[#032720] text-white p-2 rounded-md">
            S&apos;inscrire
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-[#9EA3BF]">
          Déjà un compte ? <a href="/pages/login" className="text-[#47CC88]">Se connecter</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
