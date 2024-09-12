import ContactIcons from '@/src/components/ContactIcons/ContactIcons';

interface FooterProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ as: Component = 'footer', className = 'hidden' }) => {
  return (
    <Component className={className}>
      <div className="flex flex-col items-center gap-3">
        <p className="text-center"> © {new Date().getFullYear()}</p>
        <ContactIcons direction="row" iconSize="text-3xl" />
      </div>
    </Component>
  );
};

export default Footer;