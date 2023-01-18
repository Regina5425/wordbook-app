import React from "react";
import "./Translate.scss";

const Translate = React.forwardRef(({ russian }, ref) => {
  return (
    <p ref={ref} className='trans'>
      {russian}
    </p>
  );
});

export default Translate;
