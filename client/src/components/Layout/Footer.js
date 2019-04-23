import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-white p-4 text-center">
        Copyright &copy; {new Date().getFullYear()} DevConnector
      </footer>
    </div>
  );
};

export default Footer;
