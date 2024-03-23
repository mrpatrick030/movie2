import React from "react";

function Header({ handleOnSubmit, searchTerm, handleOnChange }) {
  return (
    <>
      <header>
        <h3 data-text="Mov-Rev" id="title">
          Mov-Rev
        </h3>
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            placeholder="Search..."
            className="search"
            value={searchTerm}
            onChange={handleOnChange}
          />
          <button type="submit" id="searchBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>
        <p id="description" className="animated-paragraph">
          Welcome to Mov-Rev! Stay updated with the latest movies and read overviews for an enjoyable movie experience.
        </p>
      </header>
    </>
  );
}

export default Header;
