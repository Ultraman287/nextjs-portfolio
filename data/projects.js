import generalized_chess from "@/assets/images/Tutorial_play_game.gif";
import bubblify from "@/assets/images/Bubblify.png";
import remote_mouse_rust from "@/assets/images/Rocket-rs.png";

export const projects = [
  {
    title: "Generalized Chess",
    subtitle: "Pygame, Tensorflow, Python, Figma, hashlib, pickle",
    description:
      "Developed a user-friendly chess piece and board customization frontend using Pygame, translating Figma mockups into a fully playable interface. Implemented the Alphazero algorithm with Openspiel in Tensorflow to automate bot creation in these variations of chess.",
    image: generalized_chess,
    link: "https://github.com/Ultraman287/generalized_chess",
  },
  {
    title: "Bubblify",
    subtitle: "Python, Reflex, Gmail API, CockroachDB, MindsDB, Intel",
    description:
      "Developed an email categorization application using the Gmail API for fetching emails. Utilized MindsDB for intelligent email categorization, and stored results and session data in CockroachDB. Tackled frontend development challenges in Reflex, balancing Pythonic code with JavaScript conversions.",
    image: bubblify,
    link: "https://github.com/Ultraman287/bubblify",
  },
  {
    title: "Remote Desktop Controller",
    subtitle: "Rust, Rocket, Mouse_rs, React",
    description:
      "Created a RESTful API using the Rocket crate that allows remote control of a desktop's mouse. Coded a mobile-friendly web application with React.",
    image: remote_mouse_rust,
    link: "https://github.com/Ultraman287/remote-mouse-rust",
  },
  {
    title: "Food Preferences Web Application",
    subtitle: "Flask, Firebase, Bootstrap, OpenStreetMap, Leaflet",
    description:
      "Led the backend development of a Flask-based web application in a 7-person team with a focus on handling the filtering algorithm for displaying user-safe food via the Leaflet JavaScript library. Integrated the backend with a NoSQL database in Firebase's Cloud Firestore using their Python API.",
    image: "https://blog.appseed.us/content/images/2024/01/cover-flask.jpg",
    link: "https://github.com/Ultraman287/food-preferences-web-app",
  },
  {
    title: "Stock Prediction Exploration",
    subtitle: "Python, Sklearn, Matplotlib, Tensorflow",
    description:
      "Highlighted the differences in sporadic prediction problems between Linear Regression, Moving Average, Linear Parameter, and Long short-term memory network Machine learning models. Used TensorFlow to create the LSTM recurrent Neural Network and sklearn to make the rest of the models.",
    image:
      "https://datascientest.com/en/files/2023/10/formation-tensorflow-1024x453.jpg",
    link: "https://github.com/Ultraman287/stock-prediction-exploration",
  },
];
