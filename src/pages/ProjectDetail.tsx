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

      {/* Short Description */}
      <p className="text-lg mb-4 text-center">{project.longDescription}</p>

      {/* Conditionally Show Video OR Images */}
      {project.showVideoOnly && project.video ? (
        <div className="w-full flex justify-center">
          <video controls className="w-full md:w-3/4 lg:w-2/3 h-auto rounded-lg">
            <source src={project.video} type="video/mp4" />
            <source src={project.video} type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
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
      

      {/* Extra Description Section (Only Render Sections That Exist) */}
      {project.extraDescription && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Project Walkthrough</h2>

          {project.extraDescription.problemStatement && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Problem Statement</h3>
              <p className="text-lg">{project.extraDescription.problemStatement}</p>
            </div>
          )}

          {project.extraDescription.technicalChallenges?.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Technical Challenges & Solutions</h3>
              <ul className="list-disc list-inside">
                {project.extraDescription.technicalChallenges.map((challenge, index) => (
                  <li key={index} className="text-lg">{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {project.extraDescription.keyFeatures?.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="list-disc list-inside">
                {project.extraDescription.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-lg">{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {project.extraDescription.technologiesUsed?.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Technologies Used</h3>
              <ul className="list-disc list-inside">
                {project.extraDescription.technologiesUsed.map((tech, index) => (
                  <li key={index} className="text-lg">{tech}</li>
                ))}
              </ul>
            </div>
          )}

          {project.extraDescription.whatILearned?.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold">What I Learned</h3>
              <ul className="list-disc list-inside">
                {project.extraDescription.whatILearned.map((lesson, index) => (
                  <li key={index} className="text-lg">{lesson}</li>
                ))}
              </ul>
            </div>
          )}

          {project.extraDescription.futureImprovements?.length > 0 && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Future Improvements</h3>
              <ul className="list-disc list-inside">
                {project.extraDescription.futureImprovements.map((improvement, index) => (
                  <li key={index} className="text-lg">{improvement}</li>
                ))}
              </ul>
            </div>
          )}
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
