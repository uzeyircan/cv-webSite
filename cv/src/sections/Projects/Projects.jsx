import React from "react";
import styles from "./ProjectStyles.module.css";
import practice from "../../assets/practice.png";
import hotel from "../../assets/hotel.png";
import examples from "../../assets/examples.png";
import fitness from "../../assets/fitness.png";
import ProjectCard from "../../common/ProjectCard";
import ecommerce from "../../assets/ecommerce.png";
import saasnotes from "../../assets/saasnotes.png";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">
        <a
          href="https://github.com/uzeyircan?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub üzerindeki tüm projelerimi görüntüle"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Projects
        </a>
      </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={saasnotes}
          link="https://github.com/uzeyircan/clario"
          h3="ClarioNot"
          p="First Saas Project"
        ></ProjectCard>
        <ProjectCard
          src={ecommerce}
          link="https://github.com/uzeyircan/mini_E_Commerce"
          h3="E-Commerce"
          p="Mini E-Commerce App"
        ></ProjectCard>
        <ProjectCard
          src={fitness}
          link="https://github.com/uzeyircan/fitness-app/tree/main"
          h3="Fitness"
          p="Fitness App"
        ></ProjectCard>
        <ProjectCard
          src={hotel}
          link="https://github.com/uzeyircan/hotel-reservation-system"
          h3="Hotel Reservation"
          p="Reservation App"
        ></ProjectCard>
        <ProjectCard
          src={examples}
          link="https://github.com/uzeyircan/csharp-form-examples"
          h3="C# Form Examples"
          p="C# Examples App"
        ></ProjectCard>
        <ProjectCard
          src={practice}
          link="https://github.com/uzeyircan/practice-assignment"
          h3="Practice Assigment"
          p="C# Practice Assigment"
        ></ProjectCard>
      </div>
    </section>
  );
}
export default Projects;
