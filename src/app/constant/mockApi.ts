import Icon1 from "public/images/avt1.png";
import Icon2 from "public/images/avt2.png";
import Icon3 from "public/images/avt3.png";
import Icon4 from "public/images/avt4.png";
import Icon5 from "public/images/avt5.png";
import Icon6 from "public/images/avt6.png";
import { ServiceType } from "app/types/ServicesType";

import avtUser from "public/images/Vector.png";
import avtX from "public/images/Vector x.png";
import { ReasonsType } from "app/types/RepuType";

export const listServices: ServiceType[] = [
  {
    img: Icon1,
    name: "Construction",
    id: 1,
  },
  {
    img: Icon2,
    name: "Renovation",
    id: 2,
  },
  {
    img: Icon3,
    name: "Consultation",
    id: 3,
  },
  {
    img: Icon4,
    name: "Repair Services",
    id: 4,
  },
  {
    img: Icon5,
    name: "Architecture",
    id: 5,
  },
  {
    img: Icon6,
    name: "Electric",
    id: 6,
  },
];

export const listReason: ReasonsType[] = [
  {
    img: avtUser,
    title: "Best Services",
    description: "Nullam senectus porttitor in eget. Eget rutrum leo interdum.",
  },
  {
    img: avtUser,
    title: "Best Teams",
    description: "Cursus semper tellus volutpat aliquet lacus. ",
  },
  {
    img: avtX,
    title: "Best Designs",
    description: "Ultricies at ipsum nunc, tristique nam lectus. ",
  },
];
