import Content from "../heading/Content";
import Heading from "../heading/Heading";
import "./banner.css";

const Banner = ({ imgs, titleText = " ", contentText = " " }) => {
  return (
    <div className="banner_container">
      <div className="banner_wrapper">
        <div className="description">
          <Heading size="bold" color="white" title={titleText} />
          <Content
            className="medium-with-bold"
            color="white"
            content={contentText}
          />
        </div>
        <div className="tv-image">
          <img src={imgs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
