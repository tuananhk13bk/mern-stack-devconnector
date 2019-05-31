import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center d-flex flex-column justify-content-center">
      <p className="mb-0">
        Copyright &copy; {new Date().getFullYear()} DevConnector
      </p>
    </footer>
  );
};

export default Footer;
