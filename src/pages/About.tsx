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

      {/* Introduction (resume-aligned) */}
      <p className="mt-2 text-lg text-center max-w-3xl">
        Hi, I’m Surya, I am a Computer Science graduate from Purdue University (Dec 2024).
        I’m interested in healthcare technology and enjoy building backend systems that work with structured data in a reliable way.
      </p> <br />
      
      {/* Project Highlights (include=true only, and ordered per request) */}
      <h2 className="text-2xl font-semibold mb-2 text-center">Projects I’ve worked on:</h2>
      <ul className="list-disc list-inside text-lg text-left mt-4 max-w-3xl space-y-3">
        <li>
          <span className="font-semibold">Medicare Data Project</span> — Built a full-stack platform to ingest, normalize,
          and search Medicare code datasets (ICD-10-CM, HCPCS) with paginated lookup, secure auth, and PostgreSQL-backed storage.
        </li>
        <li>
          <span className="font-semibold">HL7 v2 → FHIR Interoperability Pipeline</span> — Built a local ingestion pipeline that
          validates ADT^A01 and ORU^R01 HL7 messages and persists FHIR R4 Patient/Encounter/Observation resources to a Dockerized HAPI FHIR server
          using atomic transaction bundles.
        </li>
        <li>
          <span className="font-semibold">Bio-Wearables Data Visualization (Merck / Purdue Data Mine)</span> — Built an interactive R Shiny dashboard
          to visualize Fitbit bio-wearables data, including database querying and filterable charts for trend exploration.
        </li>
        <li>
          <span className="font-semibold">AI Snitch Machine</span> — Used computer vision tooling to detect similarities in student ERD submissions,
          focusing on preprocessing and model training.
        </li>
        <li>
          <span className="font-semibold">My Shell</span> — Implemented a Unix-like shell with process handling, redirection, and piping in C/C++.
        </li>
        <li>
          <span className="font-semibold">Java Chatroom</span> — Built a multi-user chat application in Java with sockets and a Swing UI, including basic testing.
        </li>
        <li>
          <span className="font-semibold">Memory Allocator</span> — Implemented a custom memory allocator in C with allocation strategies and fragmentation handling.
        </li>
        <li>
          <span className="font-semibold">Pac-Man AI</span> — Implemented classical search algorithms (DFS, BFS, UCS, A*) in a Pac-Man environment.
        </li>
        <li>
          <span className="font-semibold">Battleship Game</span> — Built a Java Battleship game with a GUI and core gameplay logic.
        </li>
      </ul>

      {/* Agile Exposure (tightened, less fluffy) */}
      <p className="mt-6 text-lg text-center max-w-3xl">
        Through Purdue’s Data Mine program, I worked in an Agile/Scrum-style team environment with regular check-ins,
        task tracking, and feedback from corporate partners.
      </p>

      {/* Skills Section (resume-aligned, cleaned up) */}
      <div className="mt-6 w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-2 text-center">Skills & Technologies</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li><span className="font-semibold">Languages:</span> Python, JavaScript, TypeScript, SQL</li>
          <li><span className="font-semibold">Web & Backend:</span> React, Node.js, Express, REST APIs, JWT Authentication</li>
          <li><span className="font-semibold">Databases:</span> PostgreSQL</li>
          <li><span className="font-semibold">Tools:</span> Git, Linux/CLI, Docker, Agile/Scrum</li>
        </ul>
      </div>

      {/* Closing Statement (credible, not hypey) */}
      <p className="mt-6 text-lg text-center max-w-3xl">
        I am looking for an entry-level technical role in healthcare tech where I can contribute to data platforms,
        interoperability workflows, and backend systems.
      </p>
    </motion.div>
  );
};

export default About;
