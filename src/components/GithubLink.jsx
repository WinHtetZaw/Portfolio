import { BsGithub } from "react-icons/bs";

const GithubLink = ({ link }) => {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className=" peer/link absolute top-3 text-rose-600 right-3 "
    >
      <BsGithub className="text-[20px] " />
    </a>
  );
};

export default GithubLink;
