import { ReactElement } from "react";

const AboutUsData: {
  title: string;
  paragraphs: { heading: string; paragraph: ReactElement }[];
  title2: string;
  paragraph2: { heading: string; paragraph: string }[];
} = {
  title: "About Us",
  paragraphs: [
    {
      heading: "Our Story",
      paragraph: (
        <>
          Gyanplug is an initiative by IIT-IIM alumni and serial entrepreneurs
          with a passion for revolutionizing the education sector. With
          extensive experience in Edtech, our team has already made significant
          strides in the industry, successfully placing over 20,000 students at
          more than 150 universities by teaching various advanced technologies
          in collaboration with industry professionals.
          <br />
          <br/>
          During this journey, we recognized a critical gap in the education
          system: many discerning students end up in the wrong courses or
          colleges due to the lack of professional admission counseling. This
          often leads to decisions based on peer pressure, parental influence,
          and incomplete online information, resulting in struggles and
          dissatisfaction after admission.
        </>
      ),
    },
    {
      heading: "Our Vision",
      paragraph: (
        <>
          At Gyanplug, our vision is to empower students to make informed
          decisions about their education by providing access to top-tier
          admission counselors across India. We believe that every student
          deserves the opportunity to discover the right course and college that
          aligns with their aspirations and capabilities.
        </>
      ),
    },
    {
      heading: "Our Mission",
      paragraph: (
        <>
          Our mission is to bridge the gap between students and professional
          admission counselors, making quality guidance accessible to all. We
          aim to create a platform where students can connect with experienced
          counselors, receive personalized advice, and make well-informed
          choices for their academic future.
        </>
      ),
    },
  ],
  title2: "Why Choose Gyanplug?",
  paragraph2: [
    {
      heading: "Discovery of Top Counsellors",
      paragraph:
        "Our platform allows you to discover India's top admission counselors and access limited free counseling sessions, helping you make the right choices for your academic journey.",
    },
    {
      heading: "Post-Admission Services",
      paragraph:
        "We go beyond admission counseling by offering support for internships and placements, ensuring you have a smooth transition into the professional world.",
    },
    {
      heading: "Gold Membership Card",
      paragraph:
        "As a Gyanplug member, you can enjoy exclusive privileges on loans, hostels, clubs, and networking events, giving you a head start in your educational and professional life.",
    },
  ],
};

export default AboutUsData;
