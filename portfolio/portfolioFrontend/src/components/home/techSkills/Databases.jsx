import React from "react";

function Databases() {
  const database = ["MongoDB", "MySQL", "Oracle SQL"];

  const databaseImage = {
    MongoDB: { image: "/mongodb.webp", classname: "w-18 h-20 mt-5 mx-5" },
    MySQL: { image: "/MySQL.webp", classname: "w-20 h-20 mt-5 mx-5" },
    "Oracle SQL": {
      image: "/OracleSQL.webp",
      classname: "w-18 h-20 mt-5 mx-5",
    },
  };

  return (
    <div className="flex gap-6 justify-center flex-wrap m-auto">
      {database.map((item) => (
        <div key={item} className="flex flex-col items-center">
          <img
            src={databaseImage[item].image}
            alt={item}
            className={databaseImage[item].classname + " rounded-xl"}
          />
          <span className="mt-2 underline underline-offset-2 text-white text-shadow-[0px_0px_20px] text-shadow-white text-sm font-medium">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Databases;
