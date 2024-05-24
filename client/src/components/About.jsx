import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const About = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden h-screen`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl h-1/3"
      >
        <h3 className={styles.sectionHeadText}>About Us</h3>
        <p className={styles.sectionSubText}>
          <div className="text-white">
            We are a team of 5 undergraduate students of 2025 batch
          </div>
          <div className="mt-8 text-white">
            Abhinav Malhotra: PEC-ECE'25 <br />
            Jatin Singh Bisht: PEC-ECE'25 <br />
          </div>
        </p>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        {/* <EarthCanvas /> */}
        <img src={"https://media.istockphoto.com/id/1250666724/vector/happy-clients-giving-positive-feedback-to-product-quality.jpg?s=612x612&w=0&k=20&c=KVqpf0h7CZftnwNGstdPXC4TLYXs7SWnDN-fNUf78nY="} className="rounded-full max-w-full h-auto" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
