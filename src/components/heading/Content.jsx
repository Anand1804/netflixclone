import "./heading.css";

const Content = ({ content, color = " ", className = " ", line }) => {
  return (
    <p className={`medium-with-bold ${className} ${line} ${color}`}>
      {content}
    </p>
  );
};

export default Content;
