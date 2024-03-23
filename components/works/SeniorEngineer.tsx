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
          Automated Data Ingestion for Australian Client
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Reduced manual work by 70 percent by automating creation of config files with Python. Led the automation team.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Responsible for handling end-to-end process(Design to Test), Automated ETL process using Pyspark and BODS into HDFS. Created Pyspark jobs to ingest data from HDFS to Hive.
        </li>
      </ul>
    </motion.div>
  );
};

export default TechnologyAnalyst;
