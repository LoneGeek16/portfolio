import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const LeadMLEngineer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Machine Learning Engineer III
        <span className="text-textGreen tracking-wide">@IBSxExpedia</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sept 2022 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          PEAK ML Team in Expedia group - developed end to end ML model along with MLops for Room type mapping and Occupancy Forecasting
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Search relevance and Ranking in Expedia group - Being a Lead solutions engineer, My role is to work closely with solution architects to deploy an optimum ML model as per client requirements.
        </li>
        <li className="text-base flex gap-2 text-textDark">

          <span className="text-textGreen tracking-wide">Tools used</span>: Github, Jenkins, docker, Github actions, Airflow
        </li>
      </ul>
    </motion.div>
  );
};

export default LeadMLEngineer;
