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
          Led engineering efforts for deploying and maintaining ML model pipelines using GitHub Actions, Jenkins, and other deployment tools.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Utilized AWS services including S3, EMR clusters, EC2, and Lambda for storing models and procesing data and deployed the GBDT model end point on AWS with a feedback loop and monitoring framework.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed and maintained end-to-end ML models and MLOps pipelines to map room types for Expedia, focusing on competitor analysis.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked on projects improving search relevance and ranking on Expedia platform, using various ML models to enhance user experience.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed NLP models (VADER and BERT) to analyze customer feedback and reviews, extracting insights to improve product offerings.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented generative AI models using Amazon Bedrock (CLAUDE and TITAN) to create personalized content recommendations for users based on their search history and preferences.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen tracking-wide">Tools used</span>: Github, Jenkins, docker, Github actions, Airflow
        </li>
      </ul>
    </motion.div>
  );
};

export default LeadMLEngineer;
