import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const TechnologyAnalyst = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Senior systems Engineer
        <span className="text-textGreen tracking-wide">@Infosys</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Sept 2020 - Dec 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led automation of ticketing pipeline to route tickets to different teams based on ticket description.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with different teams for data collection, performed feature engineering and built Random 
Forest classifier saving 40-man hrs./day
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with BHP to develop LSTM Model Network predicting maintenance needs for heavy 
machinery, reducing downtime and saving costs.
        </li>
      </ul>
    </motion.div>
  );
};

export default TechnologyAnalyst;
