import Contact from './Contact';
import Hero from './Hero';
import MapLocation from './sections/MapLocation';
import Mission from './sections/Mission';
import Team from './sections/Team';
import Social from './Social';

const About = () => {
  return (
    <div className=" min-h-[80vh]">
      <Hero />
      <Mission />
      <Team />
      <Contact />
      <MapLocation />
      <Social />
    </div>
  );
};

export default About;
