
import { IoIosMail } from "react-icons/io";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

interface FooterProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ as: Component = 'footer', className = 'hidden' }) => {
  return (
    <Component className={className}>
      <div className="flex flex-col items-center gap-3">
        <p className="text-center"> © {new Date().getFullYear()}</p>
        <ul className="flex flex-row space-x-4">
          <li>
            <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="flex items-center text-3xl">
              <IoIosMail />
            </a>
          </li>
          <li>
            <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} className="flex items-center text-3xl" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href={process.env.NEXT_PUBLIC_GITHUB_URL} className="flex items-center text-3xl" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare />
            </a>
          </li>
        </ul>
      </div>
    </Component>
  );
};

export default Footer;