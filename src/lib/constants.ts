// mission assets
import functionalityIcon from "../assets/mission/settings-icon.svg";
import accessibilityIcon from "../assets/mission/processor.svg";
import securityIcon from "../assets/mission/shield-tick.svg";

// Niche assets
import uiuxImage  from '../assets/niches/ui-ux.png';
import webDevImage  from '../assets/niches/web-dev.png';
import mobileDevImage  from '../assets/niches/mobile-dev.png';
import graphicsDesignImage  from '../assets/niches/graphics-design.png';
import videoAnimationImage  from '../assets/niches/video-animation.jpg';
import illustrationImage  from '../assets/niches/illustration.jpg';
import programmingImage  from '../assets/niches/programming.jpg';
import socialImage  from '../assets/niches/social-media.jpg';
import presentationImage  from '../assets/niches/presentation.jpg';

// user assets
import johnKonrad from '../assets/users/john-konrad.png';
import ozzyAbel from '../assets/users/ozzy-abel.png';
import janicaMicheal from '../assets/users/janica-micheal.png';
import marcusBrown from '../assets/users/marcus-brown.png';

// blog assets
import blogImageOne from '../assets/blogs/blog-one.png';
import blogImageTwo from '../assets/blogs/blog-two.png';
import blogImageThree from '../assets/blogs/blog-three.png';

export interface mission {
    icon: string,
    title: string,
    description: string,
}

export type Blog = {
    id: string,
    image: string,
    slug: string,
    title: string
}

export type faq = {
    id: string,
    status: string,
    title: string,
    answer: string,
}

export interface OrbMessage {
  text: string;
  img: string;
  bg: string;
  rotate: string;
}


export const OUR_MISSIONS: mission[] = [
  {
    icon: accessibilityIcon,
    title: "accessibility",
    description:
      "Work anywhere, build your career. Your style, your terms.",
  },
  {
    icon: functionalityIcon,
    title: "functionality",
    description:
      "Connect, create and earn with tools that make freelancing seamless.",
  },
  {
    icon: securityIcon,
    title: "security",
    description:
      "Transparent systems and reduced service fees that protect your hustle",
  },
];

export const NICHES = [
    {
        image: uiuxImage,
        name: 'UI/UX designer'
    },
    {
        image: webDevImage,
        name: 'web development'
    },
    {
        image: mobileDevImage,
        name: 'mobile app development'
    },
    {
        image: graphicsDesignImage,
        name: 'graphics design'
    },
    {
        image: videoAnimationImage,
        name: 'video editing & animation'
    },
    {
        image: illustrationImage,
        name: 'illustration & digital art'
    },
    {
        image: programmingImage,
        name: 'programming & tech'
    },
    {
        image: socialImage,
        name: 'social media design & mgt'
    },
    {
        image: presentationImage,
        name: 'presentation design'
    },
];

export const MOCK_USERS = [
    {
        image: johnKonrad,
        name: 'John Konrad',
        profession: 'Product Designer'
    },
    {
        image: ozzyAbel,
        name: 'Ozzy Abel',
        profession: 'Senior Software Engineer'
    },
    {
        image: janicaMicheal,
        name: 'Janica Micheal',
        profession: 'Product Manager'
    },
    {
        image: marcusBrown,
        name: 'Marcus Brown',
        profession: 'Video Editor'
    },
];

export const BLOGS: Blog[] = [
    {
        id: 'b1',
        image: blogImageOne,
        slug: '#How-to-Keep-Your-Clients-and-earn-their-trust ',
        title: 'How to Keep Your Clients, and earn their trust '
    },
    {
        id: 'b2',
        image: blogImageTwo,
        slug: '#Getting-Started-on-Allnova-Basics-of-Allnova',
        title: 'Getting Started on Allnova: Basics of Allnova'
    },
    {
        id: 'b3',
        image: blogImageThree,
        slug: '#Creating-A-Winning-Gig-Image-Convert-Clients-Easily',
        title: 'Creating A Winning Gig Image: Convert Clients Easily'
    }
];

export const FREQUENTLY_ASKED_QUESTIONS: faq[] = [
    {
        id: 'faq1',
        status: 'general',
        title: 'What is Allnovas about?',
        answer: 'Allnova is a platform designed to connect skilled freelancers with clients seeking top-notch design, tech, and creative services.'
    },
    {
        id: 'faq2',
        status: 'general',
        title: 'Who can use Allnovas?',
        answer: "AllNova is open to freelancers and clients worldwide. Whether you're a designer, developer or creative professional, you can join our platform."
    },
    {
        id: 'faq3',
        status: 'general',
        title: 'How does Allnovas ensure quality?',
        answer: 'We vet all freelancers on our platform to ensure they meet our high standards. Clients can also rate and review freelancers, helping to maintain quality.'
    },
    {
        id: 'faq4',
        status: 'general',
        title: 'Is Allnovas available worldwide?',
        answer: "Yes, AllNova is a global platform. We have freelancers and clients from around the world."
    },
    {
        id: 'faq5',
        status: 'freelancing',
        title: 'How do I become a freelancer on Allnova?',
        answer: "Sign up, create a professional profile, and showcase your skills by creating gigs that highlight your expertise"
    },
    {
        id: 'faq6',
        status: 'freelancing',
        title: 'How do I get clients?',
        answer: "AllNova is open to freelancers and clients worldwide. Whether you're a designer, developer, or creative professional, you can join our platform."
    },
    {
        id: 'faq7',
        status: 'freelancing',
        title: 'Can I work on multiple projects at once?',
        answer: "We vet all freelancers on our platform to ensure they meet our high standards. Clients can also rate and review freelancers, helping to maintain quality."
    },
    {
        id: 'faq8',
        status: 'freelancing',
        title: 'How are freelancers rated?',
        answer: "Yes, AllNova is a global platform. We have freelancers and clients from around the world."
    },
    {
        id: 'faq9',
        status: 'account',
        title: 'How do I create an account?',
        answer: "Sign up, create a professional profile, and showcase your skills by creating gigs that highlight your expertise"
    },
    {
        id: 'faq10',
        status: 'account',
        title: 'Can I switch between being a client and a freelancer?',
        answer: "AllNova is open to freelancers and clients worldwide. Whether you're a designer, developer, or creative professional, you can join our platform."
    },
    {
        id: 'faq11',
        status: 'account',
        title: 'What if I forget my password?',
        answer: "We vet all freelancers on our platform to ensure they meet our high standards. Clients can also rate and review freelancers, helping to maintain quality."
    },
    {
        id: 'faq12',
        status: 'account',
        title: 'How do I update my profile?',
        answer: "Yes, AllNova is a global platform. We have freelancers and clients from around the world."
    },
    {
        id: 'faq13',
        status: 'transfer',
        title: 'How do I get paid as a freelancer?',
        answer: "Sign up, create a professional profile, and showcase your skills by creating gigs that highlight your expertise"
    },
    {
        id: 'faq14',
        status: 'transfer',
        title: 'Are there transaction fees?',
        answer: "AllNova is open to freelancers and clients worldwide. Whether you're a designer, developer, or creative professional, you can join our platform."
    },
    {
        id: 'faq15',
        status: 'transfer',
        title: 'How do I deposit funds as a client?',
        answer: "We vet all freelancers on our platform to ensure they meet our high standards. Clients can also rate and review freelancers, helping to maintain quality."
    },
    {
        id: 'faq16',
        status: 'transfer',
        title: 'What happens if a payment dispute arises?',
        answer: "Yes, AllNova is a global platform. We have freelancers and clients from around the world."
    },
]

export const leftOrbData: OrbMessage[] = [
  { text: "Freelancing transforms passion into profits.", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300", bg: "bg-[#FFF8E2]/90", rotate: "-rotate-3" },
  { text: "Your creativity deserves the world.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300", bg: "bg-[#E8F6FF]/90", rotate: "rotate-1" },
  { text: "Build, earn, evolve — one step at a time.", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300", bg: "bg-[#F2E8FF]/90", rotate: "-rotate-2" },
];

export const rightOrbData: OrbMessage[] = [
  { text: "Work, earn and pray. That is my routine.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300", bg: "bg-[#E8FFE8]/90", rotate: "rotate-3" },
  { text: "Freelancing unlocks freedom to grow.", img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300", bg: "bg-[#FFF0F3]/90", rotate: "-rotate-1" },
  { text: "Your skills can take you anywhere.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300", bg: "bg-[#E6F1FF]/90", rotate: "rotate-2" },
];