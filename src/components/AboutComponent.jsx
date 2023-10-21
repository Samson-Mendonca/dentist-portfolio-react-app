import React from 'react';
import { Tilt } from 'react-tilt'//1:13:54
import { motion } from 'framer-motion';
import { styles } from '../style';
import { services } from '../constants/index';
import { fadeIn, textVariant,staggerContainer} from '../utils/motion';

const ServiceCard = ({index, title,icon}) => {
    return (<Tilt  className ="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right","spring",0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                <div
                options ={{max:45,scale:1,speed:450}}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
               <img src={icon} alt="" className='w-16 h-16 object-contain '/>
               <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
                </div>
        </motion.div>
    </Tilt> )
}
 

function AboutComponent() {
    return ( 
        < >
        <motion.section
            id='About'
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once:true, amount:0.25}}
            className={`${styles.padding} max-w-7xl 
            mx-auto relative z-0`}
            >
        <motion.div variants={textVariant()}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
         <p className={styles.sectionSubText}>Introduction</p>
         <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <motion.p variants={fadeIn("","",0.1,1)}>
            I'm a skilled Dentist with real World Experience, and
            expertise in X-ray, Cap-fitting   and Caries removal.
            I'm a hardworking enthusiastic person who gells well with others.
            Let's Work together to bring about a revolution of healthy Smiles! 
        </motion.p>
        <div className='mt-20 flex flex-wrap gap-10'>
            {services.map((service,index) =>(
                <ServiceCard key={service.title}
                index={index}
                {...service}/>
            ))}

        </div><span className='hash-span' >
                    &nbsp;
                </span></motion.section>
        </>
     );
}

export default  AboutComponent;
