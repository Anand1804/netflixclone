import "./heading.css";

const Content = ({
  content,
  align = "",
  color = " ",
  className = " ",
  line,
}) => {
  return (
    <p className={`medium-with-bold ${className} ${align} ${line} ${color}`}>
      {content}
    </p>
  );
};

export default Content;
