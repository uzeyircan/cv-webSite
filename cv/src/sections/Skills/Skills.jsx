import React from "react";
import styles from "../Skills/SkillStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML5"></SkillList>
        <SkillList src={checkMarkIcon} skill="CSS"></SkillList>
        <SkillList src={checkMarkIcon} skill="JavaScript"></SkillList>
        <SkillList src={checkMarkIcon} skill="Python"></SkillList>
        <SkillList src={checkMarkIcon} skill="C#"></SkillList>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React"></SkillList>
        <SkillList src={checkMarkIcon} skill="Vue"></SkillList>
        <SkillList src={checkMarkIcon} skill=".NET Core"></SkillList>
        <SkillList src={checkMarkIcon} skill="Node.js"></SkillList>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git"></SkillList>
        <SkillList src={checkMarkIcon} skill="Docker"></SkillList>
        <SkillList src={checkMarkIcon} skill="VS Code"></SkillList>
        <SkillList src={checkMarkIcon} skill="Figma"></SkillList>
        <SkillList src={checkMarkIcon} skill="Postman"></SkillList>
      </div>
      <hr />
    </section>
  );
}

export default Skills;
