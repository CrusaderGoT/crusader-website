import { MantineColor } from "@mantine/core";

import {
    Icon,
    IconBrandGithubFilled,
    IconBrandLinkedinFilled,
    IconMail,
    IconPhoneCall,
    IconFileCv,
} from "@tabler/icons-react";

type FooterSocialProp = {
    name: string;
    icon: Icon;
    color: MantineColor;
    href: string;
};

export const footerSocialData: FooterSocialProp[] = [
    {
        name: "Email",
        icon: IconMail,
        color: "red.9",
        href: "mailto:enememka44@gmail.com",
    },
    {
        name: "Phone",
        icon: IconPhoneCall,
        color: "green",
        href: "tel:+2347040764431",
    },
    {
        name: "Github",
        icon: IconBrandGithubFilled,
        color: "white",
        href: "https://github.com/CrusaderGoT",
    },
    {
        name: "LinkedIn",
        icon: IconBrandLinkedinFilled,
        color: "blue",
        href: "https://www.linkedin.com/in/chukwuemeka-enemchukwu/",
    },
{
        name: "CV",
        icon: IconFileCv,
        color: "black",
        href: "https://docs.google.com/document/d/1_K2AVqcSk2yhvGqaYW96ySw-MRj1Lh0b/edit?usp=drivesdk&ouid=114543511838669966141&rtpof=true&sd=true",
    },
];
