
import Image from 'next/image';

interface SkillIconsProps {
  title?: string;
  techList: string[];
  iconSize: number;
}

const SkillIcons: React.FC<SkillIconsProps> = ({ title, techList, iconSize }) => (
  <div>
    {title && <p>{title} :</p>}
    <div className="stack-icons flex gap-2 flex-wrap">
      {techList.map((tech) => (
        <Image key={tech} src={`/images/skillicons/${tech}.svg`} title={tech} alt={tech} width={iconSize} height={iconSize} />
      ))}
    </div>
  </div>
);

export default SkillIcons;