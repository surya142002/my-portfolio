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
        Artificial Intelligence and Machine Learning. I’m passionate about applying AI and ML in meaningful ways 
        and have built projects that reflect this, including developing a Medicare public data platform after graduation.
      </p>

      {/* Personal Interests */}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-center">
        Outside of tech, I enjoy hiking, playing basketball, and making the most of the winter season. 
        As a huge Boston sports fan, you’ll often find me cheering on the Celtics and Patriots.
      </p>

      {/* Skills Section */}
      <div className="mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2 text-center">Skills & Tools</h2>
        <ul className="list-disc list-inside text-base sm:text-lg md:text-xl">
          <li>Programming Languages: Python, Java, C, C++, TypeScript, Javascript, R, HTML/CSS</li>
          <li>Frameworks & Libraries: React, Node.js, Express, Tailwind CSS, R Shiny</li>
          <li>AI/ML Tools: TensorFlow, PyTorch, Scikit-learn, YOLO, Roboflow</li>
          <li>Databases: PostgreSQL, MongoDB</li>
          <li>Other Tools: Git, Google Colab, Scrum/Agile</li>
        </ul>
      </div>

      {/* Closing Statement */}
      <p className="mt-6 text-base sm:text-lg md:text-xl text-center">
        I’m always eager to learn and tackle new challenges in AI, ML, and software development. 
        Feel free to explore my work and reach out!
      </p>
    </motion.div>
  );
};

export default About;
