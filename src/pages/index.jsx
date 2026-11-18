import Hero from "../comp/LandingPage/hero"
import News from "../comp/LandingPage/news"
import Papers from "../comp/LandingPage/papers"
import Footer from "../comp/LandingPage/footer"
import Nav from "../comp/LandingPage/nav"

const LandingPage = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Papers />
      <News />
      <Footer />
    </>
  )
}

export default LandingPage
