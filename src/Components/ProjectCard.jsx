import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="min-w-[280px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-white/70">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
