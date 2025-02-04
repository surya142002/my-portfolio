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
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        About Me
      </h1>

      {/* Introduction */}
      <p className="mt-2 text-base sm:text-lg md:text-xl text-center">
        Hi! I'm Surya, a Computer Science graduate from Purdue University (Class of 2024), specializing in 
        Artificial Intelligence and Machine Learning. I’m passionate about building software that solves real-world problems, 
        particularly in AI, full-stack development, and systems programming.
      </p>

      {/* Project Technologies */}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-center">
        My experience spans a variety of technologies, as demonstrated in my projects:
      </p>
      <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-left mt-4">
        <li><strong>Full-Stack Development:</strong> Built a Medicare Data Platform using <strong>React, Node.js, PostgreSQL, Meilisearch, and JWT authentication</strong>.</li>
        <li><strong>Artificial Intelligence & ML:</strong> Developed an Object Detection AI project using <strong>YOLO, Roboflow, and Python</strong> to detect assignment similarities.</li>
        <li><strong>Systems Programming:</strong> Created a custom <strong>shell</strong> and <strong>memory allocator</strong> in C and C++.</li>
        <li><strong>Data Visualization:</strong> Worked on an R Shiny dashboard for Merck, transforming complex datasets into interactive visuals.</li>
        <li><strong>Game Development & AI:</strong> Implemented AI search algorithms for the <strong>Pac-Man AI</strong> project.</li>
      </ul>

      {/* Personal Interests */}
      <p className="mt-6 text-base sm:text-lg md:text-xl text-center">
        Outside of coding, I enjoy hiking, playing basketball, and making the most of the winter season. 
        As a huge Boston sports fan, you’ll often find me cheering on the Celtics and Patriots.
      </p>

      {/* Skills Section */}
      <div className="mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2 text-center">Skills & Tools</h2>
        <ul className="list-disc list-inside text-base sm:text-lg md:text-xl">
          <li><strong>Programming Languages:</strong> Python, Java, C, C++, TypeScript, JavaScript, R, HTML/CSS</li>
          <li><strong>Frameworks & Libraries:</strong> React, Node.js, Express, Tailwind CSS, R Shiny</li>
          <li><strong>AI/ML Tools:</strong> TensorFlow, PyTorch, Scikit-learn, YOLO, Roboflow</li>
          <li><strong>Databases:</strong> PostgreSQL, MongoDB</li>
          <li><strong>Other Tools:</strong> Git, Google Colab, Agile/Scrum methodologies</li>
        </ul>
      </div>

      {/* Closing Statement */}
      <p className="mt-6 text-base sm:text-lg md:text-xl text-center">
        I’m always eager to learn and take on new challenges in AI, ML, full-stack development, and software engineering. 
        Feel free to explore my work and connect with me!
      </p>
    </motion.div>
  );
};

export default About;
