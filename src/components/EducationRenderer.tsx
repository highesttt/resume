import { EducationItem } from "@/dto/EducationItem.dto";
import { motion } from "motion/react";

export const EducationItemRenderer = ({
  item,
  index,
  show,
}: {
  item: EducationItem;
  index: number;
  show: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: show ? 1 : 0, x: show ? 0 : -20 }}
      transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
      className="mb-6 relative"
    >
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
        <div className="flex-1 flex flex-wrap justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-800">
            {item.institution}
          </h3>
          <span className="text-sm bg-blue-100 text-blue-700 py-1 px-2 rounded ml-2">
            {item.period}
          </span>
        </div>
      </div>
      <div className="ml-7 border-l-2 border-gray-100 pl-6">
        <p className="text-gray-600 font-medium mb-2">{item.degree}</p>
        <p className="text-gray-700">{item.description}</p>
      </div>
    </motion.div>
  );
};
