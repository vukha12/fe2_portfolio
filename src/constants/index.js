import project1 from "/assets/projects/project-1.webp";

const navLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "About me",
    link: "#about-me",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
const imageAbout = [
  { name: "about-1", imgPath: "/assets/image/about-1.png" },
  { name: "about-2", imgPath: "/assets/image/about-2.png" },
  { name: "about-3", imgPath: "/assets/image/about-3.png" },
  { name: "about-4", imgPath: "/assets/image/about-4.png" },
  { name: "about-5", imgPath: "/assets/image/about-5.png" },
  { name: "about-6", imgPath: "/assets/image/about-2.png" },
  { name: "about-7", imgPath: "/assets/image/about-3.png" },
  { name: "about-8", imgPath: "/assets/image/about-1.png" },
];
const CONTACT = {
  address: "Thủ Đức, TP. Hồ Chí Minh, Việt Nam",
  phoneNo: "+ ",
  email: "22211TT3957@mail.tdc.edu.vn",
};

const PROJECTS = [
  {
    title: "Job Every",
    image: project1,
    description:
      "Giúp người dùng kết nối với nhà tuyển dụng để tìm kiếm việc làm phù hợp với kỹ năng và kinh nghiệm của họ.",
    technologies: ["NextJS", "Tailwindcss", "MongoDB", "ShadcnUI"],
  },
];
export { navLinks, imageAbout, CONTACT, PROJECTS };
