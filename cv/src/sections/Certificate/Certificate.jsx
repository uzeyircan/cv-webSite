import React from "react";
import styles from "../Certificate/CertificateStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import CertificateList from "../../common/CertificateList";
function Certificate() {
  return (
    <section id="Certificate" className={styles.container}>
      <h1 className="sectionTitle">Certificate</h1>
      <div className={styles.CertificateList}>
        <CertificateList
          src={checkMarkIcon}
          Certificate="ASP.NET Core MVC"
        ></CertificateList>
      </div>
      <hr />
    </section>
  );
}

export default Certificate;
