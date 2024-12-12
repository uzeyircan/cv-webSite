import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"></SkillList>
        <SkillList src={checkMarkIcon} skill="CSS"></SkillList>
        <SkillList src={checkMarkIcon} skill="JavaScript"></SkillList>
        <SkillList src={checkMarkIcon} skill="TypeScript"></SkillList>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React"></SkillList>
        <SkillList src={checkMarkIcon} skill="Vue"></SkillList>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Redux"></SkillList>
        <SkillList src={checkMarkIcon} skill="Git"></SkillList>
        <SkillList src={checkMarkIcon} skill="Bootstrap"></SkillList>
      </div>
      <hr />
    </section>
  );
}

export default Skills;
