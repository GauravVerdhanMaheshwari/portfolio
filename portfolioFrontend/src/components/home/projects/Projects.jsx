import React, { useState, useEffect } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch("/api/repos");
      const data = await response.json();
      setRepos(data);
    };

    fetchRepos();
  }, []);

  let numberOfRepos = 1;

  const repoImages = {
    978099453: "projects_furniture.webp",
    971497614: "projects_portfolio.webp",
    928860452: "projects_portfolio.webp",
  };
  return (
    <>
      <div className="flex flex-col justify-center mb-10">
        <hr className="text-white h-0.5 my-8 bg-gray-200 border-0 " />
        <h1 className="text-white text-4xl font-semibold text-left mx-50 underline underline-offset-10 text-shadow-gray-200/65 text-shadow-[1px_1px_19px]">
          My GitHub Repositories
        </h1>
      </div>
      <div className="flex flex-col justify-center mb-10">
        {repos.length === 0 ? (
          <p className="text-white text-4xl font-semibold text-left mx-50 text-shadow-gray-200/65 text-shadow-[1px_1px_19px]">
            Loading...
          </p>
        ) : (
          <ul className="flex flex-wrap gap-5 justify-center items-center mx-20 ">
            {repos.map((repo) => {
              if (
                repo.name !== "skills-copilot-codespaces-vscode" &&
                numberOfRepos <= 3
              ) {
                numberOfRepos++;
                return (
                  <div
                    key={repo.id}
                    className="w-full h-full bg-blue-400/90 shadow-[0px_0px_100px] shadow-blue-400/90 border border-blue-100/80 inset-shadow-[0px_10px_100px] inset-shadow-blue-600 rounded-xl p-10 m-5 flex flex-row"
                  >
                    <li key={repo.id} className=" w-full h-full ">
                      <h3 className="text-white text-3xl font-semibold text-center underline underline-offset-10 p-7 text-pretty">
                        {repo.name === "skill-swapping"
                          ? "SKILL SWAPPING"
                          : repo.name === "furniture_website"
                          ? "E-COMMERCE"
                          : repo.name.toUpperCase()}
                      </h3>
                      <p className="text-white text-center pb-5 text-xl text-pretty">
                        {repo.description || "No description"}
                      </p>
                      <p className="text-white text-center pb-5 text-xl text-pretty font-medium">
                        📜 Language: {repo.language}
                      </p>
                      <p className="text-white text-center pb-5 text-xl text-pretty">
                        🌐 URL:{" "}
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white text-center pb-5 text-xl text-pretty transition-all duration-200 ease-in-out  text-shadow-gray-200/65 text-shadow-[1px_1px_19px] hover:text-gray-800 hover:text-shadow-black/60 hover:text-shadow-[1px_1px_19px] font-medium"
                        >
                          View Repo
                        </a>
                      </p>
                    </li>
                    <div className="border-l-2 border-white/50 mx-10"></div>
                    <div className="w-full h-full">
                      <img
                        src={repoImages[repo.id]}
                        alt={repo.name}
                        className="w-auto h-auto object-cover p-3"
                      />
                    </div>
                  </div>
                );
              }
              return null; // If the condition isn't met, return null to exclude the repo
            })}
          </ul>
        )}
      </div>
    </>
  );
}
