import { oldImage, code_explainer } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://huggingface.co/spaces/JagadishR/old2new"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={oldImage}
                alt="oldImage"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">OLd Image Colouring</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
               <span className="text-textGreen">Old Image Colourisation</span> refers to the process of adding color to black and white or grayscale images,
               Using advanced algorithms and machine learning techniques,
               this technology analyzes the content and context of the image to intelligently apply appropriate colors,
               restoring them to a more lifelike appearance.
            </p>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/LoneGeek16"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://huggingface.co/spaces/JagadishR/old2new"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://huggingface.co/spaces/JagadishR/Code_explainer"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={code_explainer}
                alt="code_explainer"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Code Explainer</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              <span className="text-textGreen">Code Explainer</span> is a software tool designed to simplify and clarify complex code structures for developers.
              It provides detailed explanations and annotations for different sections of code, helping users understand the logic, functions, and variables involved.
            </p>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/LoneGeek16"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
