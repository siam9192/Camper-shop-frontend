import Contact from './Contact';
import MapLocation from './sections/MapLocation';
import Mission from './sections/Mission';
import Team from './sections/Team';

const About = () => {
  return (
    <div className="py-10 min-h-[80vh]">
 
   <Mission/>
    <Team/>
    <Contact/>
    <MapLocation/>
    </div>
  );
};

export default About;
