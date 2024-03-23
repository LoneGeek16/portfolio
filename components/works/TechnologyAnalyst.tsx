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
          Predictive Maintenance for South California Edison : Consistently achieved 100% compliance with industry best practices.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Key responsibilities were to help the client predict and increase business in different areas of interest.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Led a small team, where we predicted customer loyalty for our client.
        </li>
      </ul>
    </motion.div>
  );
};

export default SeniorEngineer;
