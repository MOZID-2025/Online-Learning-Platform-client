import { motion } from "framer-motion";

const TopInstructors = () => {
  // Instructor data
  const instructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Web Development Expert",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      desc: "10+ years in full-stack development and modern JavaScript frameworks.",
    },
    {
      id: 2,
      name: "David Miller",
      title: "UI/UX Designer",
      image:
        "https://images.pexels.com/photos/3777550/pexels-photo-3777550.jpeg",
      desc: "Specialist in design systems and user-centered interfaces using Figma.",
    },
    {
      id: 3,
      name: "Emily Carter",
      title: "Data Science Mentor",
      image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg",
      desc: "Passionate about AI and machine learning with 8+ years of experience.",
    },
    {
      id: 4,
      name: "James Anderson",
      title: "Machine Learning Engineer",
      image:
        "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
      desc: "Focused on Python, TensorFlow, and data-driven solutions for AI systems.",
    },
  ];

  // Animation variants for Framer Motion
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-green-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Top Instructors
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Learn from industry experts who bring real-world experience and
          passion for teaching.
        </motion.p>

        {/* Animated Instructor Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {instructors.map((inst) => (
            <motion.div
              key={inst.id}
              variants={card}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer transition duration-300"
            >
              <img
                src={inst.image}
                alt={inst.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-green-500"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {inst.name}
              </h3>
              <p className="text-green-500 text-sm mb-2">{inst.title}</p>
              <p className="text-gray-600 text-sm">{inst.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TopInstructors;
