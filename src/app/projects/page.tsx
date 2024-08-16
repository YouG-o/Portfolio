
import Card from '@/src/components/Card/Card';
import projectsData from '@/src/data/projects.json';

const Projects = () => {
  return (
    <div className="min-h-full py-11 border-3 border-red-500">
      <section className='flex gap-4'>
        <Card card={projectsData[0]} />
        <Card card={projectsData[0]} />
        <Card card={projectsData[0]} />
        <Card card={projectsData[0]} />
      </section>
    </div>
  )
}

export default Projects