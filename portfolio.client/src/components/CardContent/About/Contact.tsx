'use client'

import { Contact } from "@/src/types/About";
import ContactIcons from "@/src/components/ContactIcons/ContactIcons";
import ContactForm from "@/src/components/ContactForm/ContactForm";

interface ContactCardProps {
  card: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ card }) => {
  const handleFormSubmit = (data: { name: string; email: string; message: string }) => {
    console.log(data);
  };

  return (
    <div className='flex flex-col sm:flex-row sm:m-5 w-full gap-12 sm:gap-6 overflow-y-auto sm:overflow-y-auto'>
      <div className='sm:flex-1 flex flex-col gap-10 justify-center items-center sm:items-start'>
        <p className="text-xl">
          Vous souhaitez discuter d’un projet ou en savoir plus sur mon travail ?
          N’hésitez pas à me contacter via les plateformes suivantes :
        </p>
        <ContactIcons direction="row" iconSize="text-3xl" />
        <p className="text-xl">Vous pouvez également me joindre via le formulaire le contact.</p>
      </div>
      <div className='sm:flex-1 flex flex-col gap-2 justify-center items-center'>
        <ContactForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default ContactCard;