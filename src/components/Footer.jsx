import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-w-5xl mx-auto sm:px-16 pb-6 px-8 flex flex-col gap-7">
      <div className="flex flex-wrap gap-3 items-center justify-between flex-col">
        <p>
          © 2025 <strong>Danilo dev</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-12 h-12 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
