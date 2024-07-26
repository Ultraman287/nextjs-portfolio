import Image from "next/image";
import portrait from "@/assets/images/Portrait.png";
import SocialMediaComponent from "./SocialMedia/SocialMedia"; // Adjust the path as necessary

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I&apos;m Saad.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps and solve complex problems.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am the co-founder and Technical lead for Discearn, a startup that
            leverages AI to enhance online learning and education. Discearn is a
            result of my collaboration with the Masason Foundation and Minerva
            University, where I conducted AI research and developed a web
            extension that allows summarization, chatbot communication, and quiz
            generation across the internet.
            <br />
            <br />
            As a computer science student at Minerva, I have gained diverse and
            global experiences in software engineering and data analysis working
            with innovative companies and organizations in San Francisco, Seoul,
            Tokyo, and Buenos Aires. I am passionate about solving complex
            problems, creating social impact, and exploring new musical
            instruments. I also enjoy teaching and mentoring others, having been
            a teaching assistant in the past.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
            <SocialMediaComponent />
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={portrait}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
