import React from "react";
import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fitlift}
          link="https://github.com/uzeyircan/fitness-app/tree/main"
          h3="Fitness"
          p="Fitness App"
        ></ProjectCard>
        <ProjectCard
          src={freshBurger}
          link="https://github.com/uzeyircan/hotel-reservation-system"
          h3="Hotel Reservation"
          p="Reservation App"
        ></ProjectCard>
        <ProjectCard
          src={hipsster}
          link="https://github.com/uzeyircan/csharp-form-examples"
          h3="C# Form Examples"
          p="C# Examples App"
        ></ProjectCard>
        <ProjectCard
          src={viberr}
          link="https://github.com/uzeyircan/practice-assignment"
          h3="Practice Assigment"
          p="C# Practice Assigment"
        ></ProjectCard>
      </div>
    </section>
  );
}
export default Projects;
