import React from "react";

function CertificateList({ src, Certificate }) {
  return (
    <span>
      <img src={src} alt="CheckMark icon" />
      <p>{Certificate}</p>
    </span>
  );
}

export default CertificateList;
