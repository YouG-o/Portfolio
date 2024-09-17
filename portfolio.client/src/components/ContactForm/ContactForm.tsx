'use client';
import { useState } from 'react';

import { sendContactForm } from '@/src/utils/api';

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string }) => void;
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setStatus('Tous les champs sont obligatoires.');
      return;
    }

    try {
      await sendContactForm({ name, email, message });
      setStatus('Message envoyé avec succès.');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus(null), 3000);
    } catch (error) {
      setStatus('Erreur lors de l\'envoi du message.');
    }
  };

  return (
    <div className="relative w-2/3 mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border border-gray-300 rounded h-32"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Envoyer
        </button>
      </form>
      <div className="relative">
        {status && (
          <p className={`absolute w-full mt-4 text-center ${status === 'Message envoyé avec succès.' ? 'text-green-500' : 'text-red-500'}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;