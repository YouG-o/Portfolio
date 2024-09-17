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
    <div className='flex m-5 w-full'>
      <div className='flex-1 flex flex-col gap-10 justify-center'>
        <p className="text-xl">
          Vous souhaitez discuter d’un projet ou en savoir plus sur mon travail ?
          N’hésitez pas à me contacter via les plateformes suivantes :
        </p>
        <ContactIcons direction="row" iconSize="text-3xl" />
        <p className="text-xl">Je serai ravi d&rsquo;échanger avec vous.</p>
      </div>
      <div className='flex-1 flex flex-col gap-2 justify-center items-center'>
        <ContactForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default ContactCard;