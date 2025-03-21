import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Looking for a dev? <br className="sm:block hidden" /> Let's get in
        touch.
      </p>
      <Link
        to="/contact"
        className="pointer-events-auto py-4 px-8 bg-gradient-to-r from-purple1 to-purple3 hover:scale-[1.2] text-white font-black rounded-full cursor-pointer transitions duration-500"
      >
        Contact me
      </Link>
    </section>
  );
};

export default CTA;
