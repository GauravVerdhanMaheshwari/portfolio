import React, { useState, useEffect } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [allRepos, setAllRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("/api/repos");
        const data = await response.json();
        setRepos(data);
        setAllRepos(data);
      } catch (error) {
        console.error("Failed to fetch repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const repoImages = {
    978099453: "projects_furniture.webp",
    971497614: "projects_portfolio.webp",
    928860452: "projects_portfolio.webp",
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (!searchTerm) {
      setRepos(allRepos);
      return;
    }

    const filtered = allRepos.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm)
    );
    setRepos(filtered);
  };

  return (
    <>
      <div className="flex flex-row justify-around my-25 sm:mb-8 md:mb-10">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-left underline underline-offset-8 sm:underline-offset-10 text-shadow-gray-200/65 text-shadow-[1px_1px_19px]">
          My Projects
        </h1>
        <input
          type="text"
          placeholder="Search for project"
          className="bg-white px-4 py-2 rounded-2xl"
          onChange={handleSearch}
        />
      </div>

      <div className="flex flex-col justify-center mb-10">
        {loading ? (
          <p className="text-white text-xl sm:text-2xl md:text-3xl text-center animate-pulse">
            ⏳ Loading projects...
          </p>
        ) : repos.length === 0 ? (
          <p className="text-white text-xl sm:text-2xl md:text-3xl text-center font-medium">
            😕 No projects match your search.
          </p>
        ) : (
          <ul className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 justify-center items-center mx-4 sm:mx-10 md:mx-20">
            {repos.map((repo) => {
              if (repo.name === "skills-copilot-codespaces-vscode") return null;

              return (
                <div
                  key={repo.id}
                  className="w-full h-full bg-blue-400/90 shadow-[0px_0px_50px] sm:shadow-[0px_0px_75px] md:shadow-[0px_0px_100px] shadow-blue-400/90 border border-blue-100/80 rounded-xl p-4 sm:p-6 md:p-10 m-3 sm:m-4 md:m-5 flex flex-col md:flex-row"
                >
                  <li className="w-full h-full">
                    <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center underline underline-offset-8 sm:underline-offset-10 p-3 sm:p-5 md:p-7">
                      {repo.name === "skill-swapping"
                        ? "SKILL SWAPPING"
                        : repo.name === "furniture_website"
                        ? "E-COMMERCE"
                        : repo.name.toUpperCase()}
                    </h3>
                    <p className="text-white text-center pb-3 sm:pb-4 md:pb-5 text-base sm:text-lg md:text-xl">
                      {repo.description || "No description"}
                    </p>
                    <p className="text-white text-center pb-3 sm:pb-4 md:pb-5 text-base sm:text-lg md:text-xl font-medium">
                      📜 Language: {repo.language}
                    </p>
                    <p className="text-white text-center pb-3 sm:pb-4 md:pb-5 text-base sm:text-lg md:text-xl font-medium">
                      🌐 URL:{" "}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-200 ease-in-out hover:text-gray-800"
                      >
                        View Repo
                      </a>
                    </p>
                  </li>

                  <div className="hidden md:block border-l-2 border-white/50 mx-5 sm:mx-8 md:mx-10"></div>

                  <div className="w-full h-full mt-4 md:mt-0">
                    <img
                      src={repoImages[repo.id] || "default_project_image.webp"}
                      alt={repo.name}
                      className="w-full md:w-auto h-auto object-cover p-2 sm:p-3"
                    />
                  </div>
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
