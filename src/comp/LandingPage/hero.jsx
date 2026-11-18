import { HeroContainer } from "../../assets/styles"
import profile from "../../assets/img/prof_pic4.webp"

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <h1>Sikirulahi Abdulkareem</h1>
      <div className="hero-content">
        <div className="hero-text">
          <div className="social-links">
            <a href="mailto:kareemsikiru2018@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://drive.google.com/file/d/1m6XCverIWFkY4dIRTpDn2aVxV-Ll1YPW/view" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/Sikirulahi1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/abdulkareem-sikirulahi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://medium.com/@sikirulahi" target="_blank" rel="noopener noreferrer">Medium</a>
          </div>

          <p>
            I am Sikirulahi Abdulkareem, a First Class graduate in Mechatronics Engineering from the <a href="https://funaab.edu.ng/" target="_blank" rel="noopener noreferrer">Federal University of Agriculture, Abeokuta</a> (FUNAAB), Nigeria. I am a Research Assistant at FUNAAB, supervised by <a href="https://funaab.edu.ng/staff/owoeye-samuel-oluyemi/" target="_blank" rel="noopener noreferrer">Dr. S. O. Owoeye</a> and <a href="https://funaab.edu.ng/staff/durodola-folasade-olayinka/" target="_blank" rel="noopener noreferrer">Dr. F. O. Durodola</a>, an Independent Researcher at <a href="https://mlcollective.org/" target="_blank" rel="noopener noreferrer">ML Collective</a>, and an AI/ML Engineer at Optimus AI Labs.
          </p>

          <p>
            My research lies at the intersection of Artificial Intelligence and Robotics. I am interested in robust perception, helping robots understand their surroundings reliably in real-world conditions, and in efficient AI that can run on resource-constrained hardware. More broadly, I am interested in how perception, learning, and decision-making come together to build capable and reliable robotic systems.
          </p>
        </div>
        <div className="hero-image">
          <img src={profile} alt="Profile" fetchPriority="high" loading="eager" />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;