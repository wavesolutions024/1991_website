import { Link } from "react-router-dom";
import "./Button.scss";

const Butoon = ({btn,text,link}) => {
  return (
    <>
      <Link to={link} className={btn ? "btn btn2" : "btn"}>
        <p className="btn_text">
            {text}
        </p>
        <p className=" text2">{text}</p>
      </Link>
    </>
  );
};

export default Butoon;
