import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  const CATEGORIES = [
    {
      id: "f1",
      href: "#",
      name: "Graphic Design",
    },
    {
      id: "f2",
      href: "#",
      name: "UI/UX Design",
    },
    {
      id: "f3",
      href: "#",
      name: "Web Development",
    },
    {
      id: "f4",
      href: "#",
      name: "Mobile App Development",
    },
    {
      id: "f5",
      href: "#",
      name: "Programming and Tech",
    },
    {
      id: "f6",
      href: "#",
      name: "Video Editing",
    },
    {
      id: "f7",
      href: "#",
      name: "Animation",
    },
    {
      id: "f8",
      href: "#",
      name: "Social Media Design",
    },
    {
      id: "f9",
      href: "#",
      name: "Social Media Management",
    },
    {
      id: "f10",
      href: "#",
      name: "Presentation Design",
    },
    {
      id: "f11",
      href: "#",
      name: "Illustration and Digital Art",
    },
  ];

  const EXPLORE = [
    {
      id: "e1",
      href: "#",
      name: "How it works",
    },
    {
      id: "e2",
      href: "#",
      name: "Help and Support",
    },
    {
      id: "e3",
      href: "#",
      name: "Articles",
    },
    {
      id: "e4",
      href: "#",
      name: "Community",
    },
    {
      id: "e5",
      href: "#",
      name: "FAQs",
    },
    {
      id: "e6",
      href: "#",
      name: "Marketplace",
    },
  ];

  const FREELANCERS = [
    {
      id: "fr1",
      href: "#",
      name: "Join as a freelancer",
    },
    {
      id: "fr2",
      href: "#",
      name: "Find Jobs",
    },
    {
      id: "fr3",
      href: "#",
      name: "Freelancing Tips",
    },
    {
      id: "fr4",
      href: "#",
      name: "Community Forums",
    },
    {
      id: "fr5",
      href: "#",
      name: "Success Stories",
    },
  ];

  const COMPANIES = [
    {
      id: "c1",
      href: "#",
      name: "About Allnova",
    },
    {
      id: "c2",
      href: "#",
      name: "Contact Us",
    },
    {
      id: "c3",
      href: "#",
      name: "Privacy Policy",
    },
    {
      id: "c4",
      href: "#",
      name: "Terms of Service",
    },
  ];

  const CLIENTS = [
    {
      id: "cl1",
      href: "#",
      name: "Hire Freelancers",
    },
    {
      id: "cl2",
      href: "#",
      name: "Shared Platform",
    },
    {
      id: "cl3",
      href: "#",
      name: "Post a job",
    },
  ];

  return (
    <div className="pb-[120px] min-h-dvh">
      <div className="flex flex-col justify-center gap-x-[100px] w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px]">
        <div className="flex flex-wrap gap-[60px]">
          <ul className="flex flex-col gap-6">
            <h2 className="text-[14px] font-semibold text-primary-text">
              Categories
            </h2>
            {CATEGORIES.map((category) => (
              <li key={category.id}>
                <a
                  href={category.href}
                  className="text-secondary-text hover:underline text-[16px] capitalize transition-all duration-300"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-6">
            <h2 className="text-[14px] font-semibold text-primary-text">
              Explore
            </h2>
            {EXPLORE.map((explore) => (
              <li key={explore.id}>
                <a
                  href={explore.href}
                  className="text-secondary-text hover:underline text-[16px] capitalize transition-all duration-300"
                >
                  {explore.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-6">
            <h2 className="text-[14px] font-semibold text-primary-text">
              For Freelancers
            </h2>
            {FREELANCERS.map((freelancer) => (
              <li key={freelancer.id}>
                <a
                  href={freelancer.href}
                  className="text-secondary-text hover:underline text-[16px] capitalize transition-all duration-300"
                >
                  {freelancer.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-6">
            <h2 className="text-[14px] font-semibold text-primary-text">
              Company
            </h2>
            {COMPANIES.map((company) => (
              <li key={company.id}>
                <a
                  href={company.href}
                  className="text-secondary-text hover:underline text-[16px] capitalize transition-all duration-300"
                >
                  {company.name}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-6">
            <h2 className="text-[14px] font-semibold text-primary-text">
              For Clients
            </h2>
            {CLIENTS.map((client) => (
              <li key={client.id}>
                <a
                  href={client.href}
                  className="text-secondary-text hover:underline text-[16px] capitalize transition-all duration-300"
                >
                  {client.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-y-2 justify-between items-center py-4 mt-[42px]">
            <SocialMediaIcons />
          <p className="text-secondary-text text-[14px] font-normal">
            &copy;{new Date().getFullYear()} Allnovas. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
