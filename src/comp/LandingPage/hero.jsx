import { HeroContainer } from "../../assets/styles"
import profile from "../../assets/img/prof_pic4.png"

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <h1>Sikirulahi Abdulkareem</h1>
      <div className="hero-content">
        <div className="hero-text">
          <div className="social-links">
            <a href="mailto:kareemsikiru2018@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://drive.google.com/file/d/1bPFCDbsFkXncn2M43aJ2a4QdwFO8vCMA/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://github.com/Sikirulahi1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/abdulkareem-sikirulahi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://medium.com/@sikirulahi" target="_blank" rel="noopener noreferrer">Medium</a>
          </div>

          <p>
            I am Sikirulahi Abdulkareem, a First Class graduate in Mechatronics Engineering from the <a href="https://funaab.edu.ng/" target="_blank" rel="noopener noreferrer">Federal University of Agriculture, Abeokuta</a>, Nigeria. I am currently a Research Intern at <a href="https://funaab.edu.ng/" target="_blank" rel="noopener noreferrer">FUNAAB</a>, supervised by <a href="https://funaab.edu.ng/staff/owoeye-samuel-oluyemi/" target="_blank" rel="noopener noreferrer">Dr. S.O. Owoeye</a> and <a href="https://funaab.edu.ng/staff/durodola-folasade-olayinka/" target="_blank" rel="noopener noreferrer">Dr. Durodola</a>, and an Independent Researcher at <a href="https://mlcollective.org/" target="_blank" rel="noopener noreferrer">ML Collective</a>.
          </p>

          <p>
            My research lies at the intersection of Artificial Intelligence and Robotics. I am particularly interested in robotics, automation, robot perception, navigation, and intelligent decision-making. I want to explore how AI can enable robots to understand their environment, make reliable decisions, and perform tasks autonomously. I am also interested in areas such as computer vision, deep learning, reinforcement learning, and multimodal AI, especially where they can contribute to more capable and reliable robotic systems.
          </p>
        </div>
        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;