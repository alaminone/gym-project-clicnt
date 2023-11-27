import "./Button.css";
  
// eslint-disable-next-line react/prop-types
const Button = ({ buttonname }) => {
    return  <button className="custom-button">{buttonname}</button>;
};

export default Button;