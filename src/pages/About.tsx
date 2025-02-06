import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="p-4 md:p-8 lg:p-16 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Picture */}
      <img 
        src="/me.jpg" 
        alt="Surya Suresh" 
        className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-gray-300 dark:border-gray-600"
      />

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>

      {/* Introduction */}
      <p className="mt-2 text-lg text-center">
        Hi! I'm Surya, a Computer Science graduate from Purdue University (Class of 2024), specializing in 
        artificial intelligence, machine learning, and software development. I love working on projects that 
        bridge the gap between complex technology and real-world applications, whether that’s through AI-driven 
        models, full-stack platforms, or low-level systems programming.
      </p>

      {/* Project Highlights */}
      <p className="mt-6 text-lg text-center">Some of the projects I’ve worked on include:</p>
      <ul className="list-disc list-inside text-lg text-left mt-4">
        <li>
          AI Snitch Machine – A computer vision project using YOLOv8 and Roboflow to detect similarities 
          in student submissions. I focused on data preprocessing and model training.
        </li>
        <li>
          Medicare Data Platform – A full-stack web application built with React, Node.js, and PostgreSQL, 
          allowing users to search ICD-10 and HCPCS medical codes.
        </li>
        <li>
          Systems Programming – Developed a Unix-like shell and a custom memory allocator in C and C++, 
          working with process management, system calls, and dynamic memory allocation.
        </li>
        <li>
          Bio-Wearables Data Visualization – Worked with The Data Mine at Purdue and Merck corporate partners 
          to develop an R Shiny dashboard for analyzing Fitbit data.
        </li>
        <li>
          Pac-Man AI – Implemented BFS, DFS, A*, and reinforcement learning to navigate Pac-Man through mazes.
        </li>
      </ul>

      {/* Work Experience & Agile Exposure */}
      <p className="mt-6 text-lg text-center">
        My experience at The Data Mine at Purdue gave me insight into working in Agile/Scrum environments. 
        I collaborated with a team using Trello and Confluence, attending regular Scrum meetings, setting 
        development goals, and working with corporate mentors to refine our project.
      </p>

      {/* Skills Section */}
      <div className="mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2 text-center">Skills & Technologies</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Programming Languages: Python, Java, C, C++, TypeScript, JavaScript, R, HTML/CSS</li>
          <li>Frameworks & Libraries: React, Node.js, Express, Tailwind CSS, R Shiny</li>
          <li>AI/ML Tools: TensorFlow, PyTorch, Scikit-learn, YOLOv8, Roboflow</li>
          <li>Databases: PostgreSQL, MongoDB</li>
          <li>Other Tools: Git, Agile/Scrum, Trello, Confluence</li>
        </ul>
      </div>

      {/* Closing Statement */}
      <p className="mt-6 text-lg text-center">
        I'm always excited to learn and build innovative projects. Feel free to explore my work and connect with me!
      </p>
    </motion.div>
  );
};

export default About;
