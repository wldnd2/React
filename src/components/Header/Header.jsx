import React from "react";

const Header = () => {
  return (
    <div className="header-wrap">
      <header>
        <h1>
          <button>
            <img src="" alt="hyundai" />
          </button>
        </h1>
        <nav>
          <ul className="left-nav">
            <li>
              <button>connect wallet</button>
            </li>
            <li>
              <button>connect wallet</button>
            </li>
            <li>
              <ul className="locale">
                <li>
                  <button>EN</button>
                </li>
                <li>
                  <button>KR</button>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <ul className="right-nav">
          <li>
            <button>
              <img src="" alt="discord" />
            </button>
          </li>
          <li>
            <button>
              <img src="" alt="twitter" />
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
