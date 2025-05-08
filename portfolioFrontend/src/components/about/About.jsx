export default function About() {
  return (
    <div className="px-4 py-16 sm:py-24 md:flex-row gap-8">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold text-left m-5 sm:mx-8 md:mx-40 text-shadow-gray-200/65 text-shadow-[0px_0px_30px]">
        About Me
      </h1>
      <hr className="text-white " />
      <div className="flex flex-row justify-start mx-40">
        <div className="flex-1">
          <img
            src="me.webp"
            alt="About Me"
            className="rounded-lg h-100 mt-10"
          />
        </div>
        <div className="flex-1 text-white text-xl align-center justify-center mx-10 text-pretty my-auto">
          <p>
            Hello everyone, I'm <span className="text-blue-500">Gaurav Verdahan Maheshwari </span>
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem error quibusdam debitis repellendus enim corrupti
            quae inventore distinctio eius iure.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem error quibusdam debitis repellendus enim corrupti
            quae inventore distinctio eius iure.
          </p>
        </div>
      </div>
    </div>
  );
}
