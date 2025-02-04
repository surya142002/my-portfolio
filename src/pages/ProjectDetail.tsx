import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'medicare-data',
    title: 'Medicare Data Project',
    description: 'A full-stack app for exploring Medicare datasets using React, Node.js, and PostgreSQL. Integrated advanced search features using Meilisearch, created secure user authentication with JWT, and ensured responsive design with Tailwind CSS.',
    video: 'https://your-demo-video-link.com',
  },
  {
    id: 'object-detection',
    title: 'Object Detection AI',
    description: 'Using YOLO and Roboflow to detect assignment similarities and prevent cheating. Required training custom datasets, fine-tuning YOLO models, and leveraging Python libraries such as Pandas.',
    video: 'https://your-demo-video-link.com',
  },
  {
    id: 'pacman-ai',
    title: 'Pac-Man AI',
    description: 'An AI-driven Pac-Man game using classical search algorithms like BFS, DFS, and A*. This project highlights foundational AI concepts in game development.',
    video: 'https://your-demo-video-link.com',
  },
  {
    id: 'my-shell',
    title: 'My Shell',
    description: 'A custom shell built in C and C++ for systems programming. This project involved creating command-line parsing, implementing built-in commands, and handling process management.',
    video: 'https://your-demo-video-link.com',
  },
  {
    id: 'memory-allocator',
    title: 'Memory Allocator',
    description: 'Created a custom memory allocator in C and C++. This project explored dynamic memory management techniques, including allocation strategies and fragmentation handling.',
    video: 'https://your-demo-video-link.com',
  },
  {
    id: 'chatroom',
    title: 'Java Chatroom',
    description: 'A chatroom application using Java and Java graphics, demonstrating object-oriented programming principles and real-time communication features.',
    video: 'https://your-demo-video-link.com',
  },
  {
    id: 'merck-data-viz',
    title: 'Merck Data Visualization',
    description: 'Data visualization project using R Shiny dashboards. Presented complex datasets in an intuitive format and enhanced user interaction with dynamic visual elements.',
    video: 'https://your-demo-video-link.com',
  },
  {
    id: 'battleship',
    title: 'Battleship Game',
    description: 'Java-based Battleship game, my first CS project in high school. It introduced fundamental programming concepts and sparked my interest in computer science.',
    video: 'https://your-demo-video-link.com',
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const projectIndex = projects.findIndex(p => p.id === projectId);
  const project = projects[projectIndex];

  if (!project) {
    return <p>Project not found!</p>;
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
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-4">{project.description}</p>
      
      {/* Video Demo */}
      <div className="w-full h-64 md:h-96 mb-8">
        <iframe
          src={project.video}
          title={`${project.title} Demo`}
          className="w-full h-full rounded-lg"
          allowFullScreen
        ></iframe>
      </div>

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
