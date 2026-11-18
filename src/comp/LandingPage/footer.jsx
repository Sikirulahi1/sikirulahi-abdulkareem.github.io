import { Footer } from '../../assets/styles';

const FooterComponent = () => {
  return (
    <Footer>
      <p>
        © Copyright {new Date().getFullYear()} Sikirulahi Abdulkareem. 
        Last updated: Nov, 2026.
      </p>
    </Footer>
  );
};

export default FooterComponent;