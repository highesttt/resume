import { ProjectItem } from "@/dto/ProjectItem.dto";
import { motion } from "motion/react";

export const ProjectItemRenderer = ({
  item,
  index,
  show,
}: {
  item: ProjectItem;
  index: number;
  show: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.1 * (index + 5) }}
      className="mb-8 bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
    >
      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
        <p className="text-gray-700 mb-4">{item.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-600 mb-2">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {item.link && (
        <div className="mt-auto border-t border-gray-200">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>View Project</span>
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      )}
    </motion.div>
  );
};