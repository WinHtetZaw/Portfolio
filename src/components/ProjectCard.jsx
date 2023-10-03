import { FaLongArrowAltRight } from "react-icons/fa";
import GithubLink from "./GithubLink";

const ProjectCard = (props) => {
  const { title, cover, paragraph, projectLink, githubLink } = props.data;
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="200"
      data-aos-duration="500"
      className="group card-container"
    >
      <div className="relative  h-full ">
        <img className="card-img" src={cover} alt={title} />
        <div className="card-cover-container">
          <h3 className="card-cover-title">{title}</h3>
        </div>
      </div>

      <div className="card-body-container">
        <h2 className="card-body-title">{paragraph}</h2>
        <button className="card-body-btn peer/link">
          <a href={projectLink} rel="noreferrer" target="_blank">
            visit website
          </a>
        </button>
        <GithubLink link={githubLink} />
        <FaLongArrowAltRight className="absolute bottom-5 right-5 text-rose-600 text-[20px] -translate-x-10 peer-hover/link:translate-x-0 transition-all duration-200" />
      </div>
    </div>
  );
};

export default ProjectCard;
