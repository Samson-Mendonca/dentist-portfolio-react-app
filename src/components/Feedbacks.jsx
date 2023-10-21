
import { motion } from 'framer-motion';
import { styles } from '../style';
import { testimonials } from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';

function FeedbackComponent() {
    return ( 
        <div className='mt-12  bg-black-100 rounded-[20px]' id='feedback'>
            <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
              <motion.div
              variants={textVariant()}>
                <p className={styles.sectionSubText}>What others say</p>
                <h2 className={styles.sectionHeadText}>Testimonials.</h2>
              </motion.div>
            </div>
            <div className={`${styles.paddingX} -mt-20 
            pb-14 flex flex-wrap gap-7`}>
                {testimonials.map((testimonial, index) =>(
                    <motion.div
                    variants={fadeIn("","spring",index*0.5 , 0.75)}
                    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'>
                        <h4>{testimonial.testimonial}</h4>
                        <div className='mt-7 flex justify-between
                        items-center gap-1'>
                            <div className='flex-1 flex flex-col'>
                                <p>
                                    <span className='blue-text-gradient'>@</span>{testimonial.name}
                                </p>
                                <p>{testimonial.designation} of {testimonial.company}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
     );
}

export default FeedbackComponent;