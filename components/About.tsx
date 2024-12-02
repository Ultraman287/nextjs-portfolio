import Image from "next/image";
import portrait from "@/assets/images/Portrait.png";
import SocialMediaComponent from "./socialMedia/SocialMedia"; // Adjust the path as necessary

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I&apos;m Saad.
            <br className="hidden lg:inline-block" />I love building innovative apps and solving complex problems.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am currently a software engineer at <strong>Climate Donor</strong>, where I’m building a crowdfund platform to empower climate change initiatives. My work includes optimizing costs, improving application performance, and leading the development of features such as corporate donation integrations and dynamic user dashboards. 
            <br />
            <br />
            Additionally, I am a junior engineer at <strong>Solar B.I.</strong>, contributing to their proprietary data collection platform. My responsibilities include query optimization, bug fixing through <strong>Apache Airflow</strong>, and web development using <strong>Django</strong>, hosted on an <strong>AWS EC2</strong> server.
            <br />
            <br />
            Previously, I co-founded <strong>Discearn</strong>, a startup leveraging AI to enhance online learning and education. Discearn originated from my collaboration with the Masason Foundation and Minerva University, where I conducted AI research and developed a web extension for summarization, chatbot communication, and quiz generation. 
            <br />
            <br />
            My global experiences span software engineering and data analysis in San Francisco, Seoul, Tokyo, and Buenos Aires. I am passionate about solving complex challenges, creating social impact, and exploring new musical instruments. I also enjoy teaching and mentoring others, having been a teaching assistant and a mentor for multiple teams in the past.
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
