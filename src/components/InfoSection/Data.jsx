import ImageCar from "../../assets/images/car.svg";
import ImageFile from "../../assets/images/files.svg";
import ImageSaving from "../../assets/images/pig-savings.svg";
export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headline: "Unlimited transactions with Zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: ImageCar,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};
export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Unlimited Access",
  headline: "Log in to your account at anytime",
  description:
    "We have you covered no matter where you are located. All you need is internet connection and a phone or computer",
  buttonLabel: "Learn More",
  imgStart: true,
  img: ImageSaving,
  alt: "Piggy Bank",
  dark: false,
  primary: false,
  darkText: true,
};
export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our Team",
  headline: "Creating an Account is extremely easy",
  description:
    "Get everything setup and ready in under 10 minutes. All you need to do is add your information and you are ready to go ",
  buttonLabel: "Start Now",
  imgStart: false,
  img: ImageFile,
  alt: "Files",
  dark: false,
  primary: false,
  darkText: true,
};
