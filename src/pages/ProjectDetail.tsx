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
      <h1 className="text-4xl font-bold mb-4 text-center">{project.title}</h1>

      {/* Long Description */}
      <p className="text-lg mb-4 text-center">{project.longDescription}</p>

      {/* Conditionally Show Video OR Images */}
      {project.showVideoOnly && project.video ? (
        // Show Only Video (For Medicare Data Project)
        <div className="w-full flex justify-center">
          <video controls className="w-full md:w-3/4 lg:w-2/3 h-auto rounded-lg">
            <source src={project.video} type="video/mp4" />
            <source src={project.video} type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        // Show Images Normally (For Other Projects)
        project.images && project.images.length > 0 && (
          <div className="w-full flex justify-center">
            {project.images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${project.title} screenshot ${index + 1}`} 
                className="w-full md:w-3/4 lg:w-2/3 rounded-lg shadow-md"
              />
            ))}
          </div>
        )
      )}

      {/* GitHub Link (Only If Available) */}
      {project.github && (
        <div className="text-center mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition inline-block"
          >
            View on GitHub
          </a>
        </div>
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
