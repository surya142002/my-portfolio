import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import projectsData from '../data/projects.json';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const projects = projectsData.projects;
  const projectIndex = projects.findIndex(p => p.id === projectId);
  const project = projects[projectIndex];

  if (!project) {
    return <p className="text-center text-xl">Project not found!</p>;
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <motion.div
      className="p-4 md:p-8 lg:p-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Project Title */}
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      {/* Long Description */}
      <p className="text-lg mb-4">{project.longDescription}</p>



      {/* Video Demo (Only If Available) */}
      {project.video && (
        <div className="w-full h-64 md:h-96 mb-8">
          <iframe
            src={project.video}
            title={`${project.title} Demo`}
            className="w-full h-full rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
      )}


      {/* GitHub Link (Only If Available) */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition inline-block mb-6"
        >
          View on GitHub
        </a>
      )}


      {/* Navigation Arrows */}
      <div className="flex justify-between items-center mt-8">
        <Link to={`/projects/${prevProject.id}`} className="flex items-center text-blue-500 hover:underline">
          <ArrowLeft className="mr-2" /> {prevProject.title}
        </Link>
        <Link to={`/projects/${nextProject.id}`} className="flex items-center text-blue-500 hover:underline">
          {nextProject.title} <ArrowRight className="ml-2" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
