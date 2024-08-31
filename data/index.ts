export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I'm on a quest to discover the intersections where technology meets the organic world.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "I'm a tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 4,
    title: "I like to create things that make a difference.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "",
    description: "",
    className: "lg:row-span-2 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "",
    img: "/VIDALNathan-3.jpg",
    spareImg: "",
  },
  {
    id: 7,
    title: "Do you want to discuss about a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "StageWhisper",
    des: "Application on GOSAI Interface to show the use of audio interaction",
    img: "/theatre2.png",
    iconLists: [
      "/python-svgrepo-com.svg",
      "/pytorch-svgrepo-com.svg",
      "/js-svgrepo-com.svg",
    ],
    link: "https://github.com/Arcadia24/TTS-with-emotion-conversion",
  },
  {
    id: 2,
    title: "GOSAI",
    des: "General-purpose Operating System for Augmented Interfaces",
    img: "/gosaiLOGO.png",
    iconLists: ["/python-svgrepo-com.svg", "/js-svgrepo-com.svg"],
    link: "https://ift.devinci.fr/projects/gosai",
  },
  {
    id: 3,
    title: "CuiCui",
    des: "Classifier of bird species by sound",
    img: "/cuicui.png",
    iconLists: [
      "/python-svgrepo-com.svg",
      "/pytorch-svgrepo-com.svg",
      "/arduino-svgrepo-com.svg",
      "/fastapi-svgrepo-com.svg",
      "/streamlit logo.png",
    ],
    link: "https://ift.devinci.fr/projects/cui-cui",
  },
  {
    id: 4,
    title: "Food Computer",
    des: "Controlled Environments Agriculture",
    img: "/FoodComputer.webp",
    iconLists: [
      "/autodesk-svgrepo-com.svg",
      "/arduino-svgrepo-com.svg",
      "/firebase-svgrepo-com.svg",
      "/js-svgrepo-com.svg",
    ],
    link: "https://ift.devinci.fr/projects/food-computer",
  },
];

export const workExperience = [
  {
    experienceTitle: "Research Engineer Intern",
    workingPlace: "Vizzia",
    locationTime: "Paris, France - Feb 2024 - Jul 2024",
    content: [
      "Creation of a dataset of illegal deposit and analyze it to detect patterns on false positive due to garbage bin",
      "Train a YOLOv8 model to detect garbage bin for illegal deposit and deploy it on AWS",
      "Reduce the number of false positive by 20% using the model",
    ],
    img: "/vizziaLogo.jpeg",
  },
  {
    experienceTitle: "Data Scientist Intern",
    workingPlace: "Danish Crown",
    locationTime: "Randers, Danemark - Apr 2023 - Aug 2023",
    content: [
      "Forecast cattle exportation over 15 months for beef business unit",
      "Creation of a dataset of hides tag of more than 3000 images and videos, labeling it and train an image segmentation model to recognize the tags for a subsidiary",
    ],
    img: "/DCLogo.jpeg",
  },
  {
    experienceTitle: "Developer",
    workingPlace: "Devinci Junior",
    locationTime: "La Défense, France - 2022",
    content: [
      "Developing a data scraping bot for requests for job proposals and deploying them on a web server",
      "Developing a web application for the management of the association",
    ],
    img: "/DVJLogo.png",
  },
];
export const EducationExperience = [
  {
    experienceTitle: "MS Creative Technology",
    workingPlace: "Institute for Future Techonologies",
    locationTime: "La Défense, France - 2022 - 2024",
    content: [
      "Developed multiple projects to improve my skills in differents technologies",
    ],
    img: "/IFTLogo.jpeg",
  },
  {
    experienceTitle: "Engineering Master Degree",
    workingPlace: "ESILV",
    locationTime: "La Défense, France - 2021 - 2024",
    content: [
      "Developed multiple projects to improve my skills in differents technologies",
    ],
    img: "/ESILVLogo.png",
  },
  {
    experienceTitle: "Post-graduate Preparatory Class",
    workingPlace: "Saint-Cyr L'école Military High School",
    locationTime: "Saint-Cyr L'école, France - 2022 - 2024",
    content: [
      "Two years of rigorous coursework in preparation for the engineering school entrance exam in France",
    ],
    img: "/LMSCLogo.jpeg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Arcadia24",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/nathan-vidal/",
  },
];
