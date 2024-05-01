import React from "react";

function Nav() {
  return (
    <div>
      <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid position-relative d-flex align-items-center justify-content-between">
          <a
            href="index.html"
            class="logo d-flex align-items-center me-auto me-xl-0"
          >
            <h1 class="sitename">Append</h1>
            <span>.</span>
          </a>

          <nav id="navmenu" class="navmenu">
            <ul>
              <li>
                <a href="index.html#hero" class="">
                  Home
                </a>
              </li>
              <li>
                <a href="index.html#about">About</a>
              </li>
              <li>
                <a href="index.html#services">Services</a>
              </li>
              <li>
                <a href="index.html#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="index.html#pricing">Pricing</a>
              </li>
              <li>
                <a href="index.html#team">Team</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Dropdown</span>{" "}
                  <i class="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Dropdown 1</a>
                  </li>
                  <li class="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i class="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Dropdown 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Dropdown 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Dropdown 2</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 3</a>
                  </li>
                  <li>
                    <a href="#">Dropdown 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index.html#contact">Contact</a>
              </li>
            </ul>
            <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a class="btn-getstarted" href="index.html#about">
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
}

export default Nav;
