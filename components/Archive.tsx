import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Text Summarizer"
          des=" Text summarizer is Gen AI model created on top of PaLM which summarizes the story or novel in PDF"
          listItem={["PALM", "Gen AI", "Google Colab"]}
          link="https://colab.research.google.com/drive/1QBBb_VSQUKxQKlw2GRFgYCvXrCfzeVLY"
        />
        <ArchiveCard
          title="Zomato- Sentimental Analysis"
          des="A kaggle Project to determine the sentimental analysis of customer based on reviews and rating"
          listItem={["Numpy", "Sklearn", "NLP"]}
          link="https://www.kaggle.com/code/jagadishr16/eda-and-sentimental-analysis-for-zomato"
        />
        <ArchiveCard
          title="Ola Ensemble learning"
          des=" Built a model for the business case, along with KNN imputation and Feature engineering"
          listItem={["Ensemble Algorithms", "Encoding", "Feature Engineering"]}
          link="https://colab.research.google.com/drive/1A5aGTr5bn4EPdwkvjNfOOQ-9qh4QdD_w"
        />


        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >

            </motion.div>

          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
