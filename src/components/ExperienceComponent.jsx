import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { color, motion } from 'framer-motion';
import { styles } from '../style';
import {  textVariant} from '../utils/motion';
import { starbucks , meta } from '../assets/newimg';
import { school , work } from '../assets/newimg';
const experiences = [
  {
    title: "Holy Cross Convent School",
    company_name: "School",
    icon: starbucks,
    iconBg: "#383E56",
    date: "2016",
    points: [
      "Attended and completed my schooling at Holy Cross Convent School in Mira Road.",
    ],
  },
  {
    title: " Jai Hind College",
    company_name: "junior college",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: " 2018",
    points: [
      "completed my junior college in science stream at Jai Hind College ,Churchgate ",
    ],
  },{
    title: "Dy Patil School of Dentistry",
    company_name: "bachelor's in Dental Surgery",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2018 - Present",
    points: [
      "Studying and practicing Dentistry in Nerul",
    ],
  },{
    title: "Extra-Curricular Activity",
    company_name: "Dy Patil School of Dentistry",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2018 - Present",
    points: [
      "Organiser for field visit in St.Thomas Church, panvel.",
      "Member of Student Council as Hospitality Head.",
      "Participated in science seminars and workshops in school.",
      "Participated in various cultural competitions.",
      "Participated in school sports meets.",
    ],
  },{
    title: "INTERNSHIP",
    company_name: "Dy Patil School of Dentistry",
    icon: starbucks,
    iconBg: "#383E56",
    date: "September 2018 - Present",
    points: [
      "Conducted IDA Camp For Cancer Awareness",
      "Involved various types of cases which included:",
"Root canal treatment and Digital Radiography",
"Dental cleanings",
"Composites, Amalgam Restorative fillings and Complete Dentures.",

"Fixed Partial dentures",
"Oral Prophylaxis",
"Impaction,surgical extractions.", 

    ],
  },
  
  {
    title: "Dentist",
    company_name: "Radhika Dental Polyclinic",
    icon: meta,
    iconBg: "#E6DEDD",
    date: " October 2023 - June 2023",
    points: [
      "Currently working at a private Dental clinic in Mira Road.",
    ],
  },
];








const ExperienceComponent = () => {
  return (
    <>
   <motion.div variants={textVariant()}
   id='Experience'>
         <p className={styles.sectionSubText}>What I have done so far?</p>
         <h2 className={styles.sectionHeadText}>Experience.</h2>
         <p>{experiences.title}</p>
        </motion.div>
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
          {experiences.map((element) => (
                <VerticalTimelineElement
                key={element.key}
                iconStyle={{ background: element.iconBg}}
                icon={
                  <div className='flex justify-center
                  items-center w-full h-full'>
                    <img src={element.icon} alt={element.company_name} 
                    className='w-[60] h-[60%] object-contain'/>
                  </div>
                }
                date={element.date}
                contentStyle={ { background:'#1d1836', color:'#fff'}}
                contentArrowStyle={{borderRight:'7px solid #232631'}}>
                  <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                  <p className='text-secondary text-[16px] font-semibold'>{element.company_name}</p>
                  <p>{element.points}</p>
        

                </VerticalTimelineElement>
          ))}
          </VerticalTimeline>
        </div>
    </>
  )
}

export default ExperienceComponent;


