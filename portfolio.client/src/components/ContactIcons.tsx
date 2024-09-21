
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

interface ContactIconsProps {
  direction?: 'row' | 'column';
  iconSize?: string;
}

const ContactIcons: React.FC<ContactIconsProps> = ({ direction = 'row', iconSize = 'text-3xl' }) => {
  const directionClass = direction === 'row' ? 'flex-row space-x-4' : 'flex-col space-y-4';

  return (
    <ul className={`flex ${directionClass}`}>
      <li>
        <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className={`flex items-center ${iconSize}`}>
          <IoIosMail />
        </a>
      </li>
      <li>
        <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} className={`flex items-center ${iconSize}`} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href={process.env.NEXT_PUBLIC_GITHUB_URL} className={`flex items-center ${iconSize}`} target="_blank" rel="noopener noreferrer">
          <FaGithubSquare />
        </a>
      </li>
    </ul>
  );
};

export default ContactIcons;