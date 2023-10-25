import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Book Club</h2>
      <p>
        &copy; <span>{year}</span> bookclub.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/SamiurRahmanMukul"
        >
          AZClub
        </a>
      </p>
    </footer>
  );
}
