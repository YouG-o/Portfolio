
import Card from '@/src/components/Card/Card';
import aboutData from '@/src/data/about.json';

const Projects = () => {
  return (
    <div className="min-h-full py-11 border-3 border-red-500">
      <section className='flex gap-4'>
        <Card card={aboutData[0]} />
        <Card card={aboutData[0]} />
      </section>
    </div>
  )
}

export default Projects