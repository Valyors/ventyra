import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface ModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  module: {
    id: number;
    title: string;
    content: {
      objectives: string[];
      schedule: {
        title: string;
        duration: string;
        details: string[];
      }[];
      evaluation: string;
      duration: string;
    };
  };
  onPrevious: () => void;
  onNext: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export default function ModuleModal({
  isOpen,
  onClose,
  module,
  onPrevious,
  onNext,
  hasNext,
  hasPrevious,
}: ModuleModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-900 z-10">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {module.title}
                </h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-[#02BD92]">
                    {module.content.duration}
                  </span>
                  <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                  >
                    <IoClose size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Objectives */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Objectifs pédagogiques
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {module.content.objectives.map((objective, index) => (
                      <li
                        key={index}
                        className="text-gray-700 dark:text-gray-300"
                      >
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Schedule */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Déroulé
                  </h3>
                  <div className="space-y-6">
                    {module.content.schedule.map((item, index) => (
                      <div key={index} className="border-l-2 border-[#02BD92] pl-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          <span className="text-sm font-medium text-[#02BD92]">
                            {item.duration}
                          </span>
                        </div>
                        <ul className="list-disc pl-5 space-y-1">
                          {item.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="text-gray-700 dark:text-gray-300"
                            >
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Evaluation */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    Évaluation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {module.content.evaluation}
                  </p>
                </div>
              </div>

              {/* Footer with navigation */}
              <div className="flex justify-between items-center p-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={onPrevious}
                  disabled={!hasPrevious}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    hasPrevious
                      ? "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                      : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <FaArrowLeft />
                  <span>Module précédent</span>
                </button>
                <button
                  onClick={onNext}
                  disabled={!hasNext}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    hasNext
                      ? "bg-[#02BD92] hover:bg-[#02BD92]/90 text-white"
                      : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500 cursor-not-allowed"
                  }`}
                >
                  <span>Module suivant</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
