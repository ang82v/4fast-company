import React from "react";
import PropsType from "prop-types";

const Qualitie = ({ qualities }) => {
  // console.log(qualities);
  // перенес обработку массива в qualities
  return (
    <>
      {qualities.map((item) => (
        <span key={item._id} className={"badge m-1 bg-" + item.color}>
          {item.name}
        </span>
      ))}
    </>
  );
};

Qualitie.propTypes = {
  qualities: PropsType.array
};

export default Qualitie;
