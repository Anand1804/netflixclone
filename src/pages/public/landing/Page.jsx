import { useNavigate } from "react-router-dom";
import NavBar from "../../../components/navbar/NavBar";
import Heading from "../../../components/heading/Heading";
import Content from "../../../components/heading/Content";
import CustomButton from "../../../components/button/CustomButton";
import InputField from "../../../components/inputField/InputField";

import ImgOne from "../../../source/tv.png";
import ImgTwo from "../../../source/strangeThings.jpg";
import ImgThree from "../../../source/tvImg2.png";
import ImgFour from "../../../source/children.png";

import "./page.css";
import Banner from "../../../components/banner/Banner";
import Footer from "../../../components/footer/Footer";
import Accordion from "../../../components/accordion/Accordion";
const LandingPage = () => {
  const navigator = useNavigate();
  const handleClick = () => {
    navigator("/signIn");
  };
  return (
    <>
      <div className="landing_container">
        <div className="landing_page">
          <div className="shadow_wrapper">
            <NavBar />
            <section className="landing-content-wrapper">
              <div className="landing-content ">
                <Heading
                  size="bold"
                  color="white"
                  title="Unlimited movies, TV shows, and more"
                />
                <Content
                  className="medium-with-bold"
                  content="Watch anywhere, Cancel anywhere."
                  color="white"
                />
              </div>
              <div className="getStarted_col">
                <Content
                  content="Ready to watch? Enter your email to create or restart your membership."
                  color="white"
                  className="line"
                />
                <div className="landing-input">
                  <InputField
                    type="email"
                    className="width-full inputBg"
                    label="Email Address"
                    getStarted
                  />
                  <CustomButton
                    value="Get started"
                    bg="bg-1"
                    color="white"
                    size="large"
                    rounded="rounded"
                    onClick={handleClick}
                  />
                </div>
              </div>
            </section>
          </div>
          <Banner
            titleText="Enjoy on your TV"
            contentText="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            imgs={ImgOne}
          />
          <Banner
            imgs={ImgTwo}
            titleText="Download your shows to watch offline"
            contentText="Save your favorites easily and always have something to watch."
          />
          <Banner
            imgs={ImgThree}
            titleText="Watch everywhere"
            contentText="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          />
          <Banner
            imgs={ImgFour}
            titleText="Create profiles for kids"
            contentText="Send children on adventures with their favorite characters in a space made just for them—free with your membership."
          />
          <div className="accordian-section">
            <Accordion />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default LandingPage;
