
'use client'
import { useState } from 'react';

import { Contact } from "@/src/types/About";
import ContactIcons from "../../ContactIcons/ContactIcons";

interface ContactCardProps {
  card: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ card }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className='flex m-5'>
      <div className='flex-1 flex flex-col gap-10 justify-center'>
        <p className="text-xl">
          Vous souhaitez discuter d’un projet ou en savoir plus sur mon travail ?
          N’hésitez pas à me contacter via les plateformes suivantes :
        </p>
        <ContactIcons direction="row" iconSize="text-3xl" />
        <p className="text-xl">Je serai ravi d&rsquo;échanger avec vous.</p>
      </div>
      <div className='flex-1 flex flex-col gap-2 justify-center'>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-2/3 mx-auto">
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
            className="p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactCard;