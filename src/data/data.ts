import type {THeader, TSocial} from "../types/types";
import {v4 as uuidv4} from "uuid";
import logo1 from "../assets/logos/logo1.svg";
import logo2 from "../assets/logos/logo2.svg";
import logo3 from "../assets/logos/logo3.svg";
import logo4 from "../assets/logos/logo4.svg";
import logo5 from "../assets/logos/logo5.svg";
import type {TDesignItem} from "../types/types";
import type {TfooterMenu} from "../types/types";

import pic1 from "../assets/images/design/Picture1.png";
import pic2 from "../assets/images/design/Picture2.png";
import pic3 from "../assets/images/design/Picture3.png";

import youtube from "../assets/icons/socials/youtube.svg";
import facebook from "../assets/icons/socials/facebook.svg";
import twitter from "../assets/icons/socials/twitter.svg";
import In from "../assets/icons/socials/In.svg";
import instagram from "../assets/icons/socials/instagram.svg";


export const headerData:THeader[] = [{
    id: uuidv4(),
    name: "About Us",
},{
    id: uuidv4(),
    name: "Solutions",
},{
    id: uuidv4(),
    name: "Pricing",
},{
    id: uuidv4(),
    name: "Resources",
},]


export const logos:string[]=[logo1,logo2,logo3,logo4,logo5]

export const DesignItems:TDesignItem[]=[{
    id: uuidv4(),
    image: pic1,
    status: "Design Thinking",
    subtitle: "Design Thinking",
    title: "Wild Horse Event",
}, {
     id: uuidv4(),
    image: pic2,
    status: "Festival",
    subtitle: "Festival",
    title: "Music & Colors",
}, {
     id: uuidv4(),
    image: pic3,
    status: "Bootcamp",
    subtitle: "Bootcamp",
    title: "Happy Father’s Day",
}]


export const footerMenu:TfooterMenu[] = [
  {
    id: 1,
    title: "PRODUCT",
    links: [
      { name: "Pricing", href: "#" },
      { name: "Overview", href: "#" },
      { name: "Browse", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Five", href: "#" },
    ],
  },
  {
    id: 2,
    title: "SOLUTIONS",
    links: [
      { name: "Brainstorming", href: "#" },
      { name: "Ideation", href: "#" },
      { name: "Wireframing", href: "#" },
      { name: "Research", href: "#" },
    ],
  },
  {
    id: 3,
    title: "RESOURCES",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Tutorials", href: "#" },
    ],
  },
  {
    id: 4,
    title: "COMPANY",
    links: [
      { name: "About", href: "#" },
      { name: "Press", href: "#" },
      { name: "Events", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
];

export const socials:TSocial[]=[{
    id: uuidv4(),
    icon: youtube,
    href: "#",
},
{
    id: uuidv4(),
    icon: facebook,
    href: "#",
},
{
    id: uuidv4(),
    icon: twitter,
    href: "#",
},
{
    id: uuidv4(),
    icon: instagram,
    href: "#",
},{
    id: uuidv4(),
    icon: In,
    href: "#",
},]