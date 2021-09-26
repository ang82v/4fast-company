import React from "react";

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

export default Qualitie;
