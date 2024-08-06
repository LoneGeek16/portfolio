import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const SeniorEngineer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Tech Analyst
        <span className="text-textGreen tracking-wide">@Infosys</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Dec 2021 - Jul 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed Credit risk model on mortgage loans to estimate risk weighted assets by modelling 
probability of default for Bank of America.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built and deployed Logistic regression model to estimate probability of default generating new
business worth $6m.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed and built OCR engine using tesseract and CNN-LSTM model to extract content from 
transactional images for audit purpose saving 80-man hrs./day.t.
        </li>
      </ul>
    </motion.div>
  );
};

export default SeniorEngineer;
