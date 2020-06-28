
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Jinnatul Islam",
  title: "Hi all, I'm Morol",
  subTitle: emoji("A passionate Software Developer 🚀 and content writer ✍ having an experience of building modern Web applications with JavaScript / TypeScript/ Nodejs / Reactjs and some other cool libraries and frameworks."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/jinnatul",
  linkedin: "https://www.linkedin.com/in/jinnatul-islam-morol-b07172143",
  gmail: "morolswediu@gmail.com",
  twitter: "https://twitter.com/morolswediu",
  facebook: "https://www.facebook.com/mdjinnatul.islam"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end & Back end for your web and mobile applications"),
    emoji("⚡ Problem-solver & write clean code"),
    emoji("⚡ Progressive Web Applications"),
    emoji("⚡ Develop high performance API services"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS"),
    emoji("⚡ Write problem-solving related new content")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend/ServerSide",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Algorithms & Data Structure",
      progressPercentage: "85%"
    },
    {
      Stack: "Database",
      progressPercentage: "90%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Back-End Developer",  
      company: "Js - Pro",
      companylogo: require("./assets/images/pro-js.png"),
      date: "June 2020 – Present",
      desc: "",
      organizationURL: "https://github.com/pro-js",
      descBullets: [

      ]
    },
    {
      role: "Software Engineer",  
      company: "TeamTigers",
      companylogo: require("./assets/images/teamTigers.jpeg"),
      date: "April 2020 – Present",
      desc: "",
      organizationURL: "https://github.com/TeamTigers"
    },
    {
      role: "Back-End Developer",   
      company: "e-Luminous",
      companylogo: require("./assets/images/eLuminous.png"),
      date: "May 2019 – April 2020",
      desc: "",
      organizationURL: "https://github.com/e-Luminous"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "jinnatul", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/npm.png"),
      link: "https://github.com/pro-js/npm-packages",
      description: "npm company behind Node package manager. We try to cover add all npm packages github repository link & install commands."
    },
    {
      image: require("./assets/images/resources.png"),
      link: "https://github.com/pro-js/resources",
      description: "Here is a list of best resources to get you started with learning how to code. Awesome lists about all kinds of interesting topics."
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Most active GitHub users in Bangladesh",
      subtitle: "Top active github user in Bangladesh.",
      image: require("./assets/images/topCommit.png"),
      footerLink: [
        { name: "Source", url: "https://commits.top/bangladesh.html" }
      ]
    },
    {
      title: "Summer Take-Off 2017",
      subtitle: "Competitive programming content.",
      image: require("./assets/images/diu9.jpg"),
      footerLink: [
        { name: "Source", url: " http://algo.codemarshal.org/contests/diu-summer2017-takeoff-main/standings" }
      ]
    },

    {
      title: "6 Star Gold on OJ",
      subtitle: "I achive this 6 star Gold Level Badge on Hackerrank online judge",
      image: require("./assets/images/hrGold.png"),
      footerLink: [
        { name: "Source", url: "https://www.hackerrank.com/jinnatul" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://programming-jinnatul.blogspot.com/2018/05/100-sql-problem-solution.html",
      title: "  100 SQL Problem & Solution",
      description: "You can learn about sql problem & query for this post."
    },
    {
      url: "http://programming-jinnatul.blogspot.com/2018/09/algorithm-and-programming-technique.html",
      title: "Algorithm and programming Technique list",
      description: "You can learn about Competitive programming for this post."
    },
    {
      url: "http://programming-jinnatul.blogspot.com/2018/09/blog-post.html",
      title: "বাংলা ভাষায় লেখা প্রোগ্রামিং এর সবচেয়ে বড় রিসোর্স কালেকশন",
      description: "You can learn about Competitive programming for this post, and get most important resourses."
    },
    {
      url: "https://programming-jinnatul.blogspot.com/2018/12/posix-programming-how-to-create-process.html",
      title: "Posix Programming",
      description: "How to way create a process, child process, multiple child process., thread., multiple threads, , message, message send, message receive."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+880-1793-696177",
  email_address: "morolswediu@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "morolswediu"//Replace "twitter" with your twitter username without @
  
};

export { 
  greeting, 
  socialMediaLinks, 
  skillsSection, 
  techStack, 
  workExperiences, 
  openSource, 
  bigProjects, 
  achievementSection, 
  blogSection, 
  talkSection, 
  podcastSection, 
  contactInfo , 
  twitterDetails
};
