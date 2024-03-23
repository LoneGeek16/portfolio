import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const SystemEngineer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        SystemEngineer
        <span className="text-textGreen tracking-wide">@Infosys</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2020 - Dec 2020
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Cloud Data Engineering: Loaded the files from ADLS to the Delta table, merging all historical and incremental data to get the single source.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed module for performing Data Quality and then loading the data to delta table.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Loaded the incremental data from the Delta table to SQL Datawarehouse.
        </li>
      </ul>
    </motion.div>
  );
};

export default SystemEngineer;
