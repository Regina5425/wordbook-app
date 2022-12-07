import React from "react";
import "./Buttons.scss";
import arrow from "../../img/arrow.svg";

const Button = React.forwardRef(({ children, ...props }, ref) => {
  return <button ref={ref} {...props}>{children}</button>;
});

const ButtonChangeCard = (props) => {
  return (
    <button {...props}>
      <img src={arrow} alt='arrow' />
    </button>
  );
};

export { Button, ButtonChangeCard };
