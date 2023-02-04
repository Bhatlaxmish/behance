import React from 'react';
import "./navbar.css";

export default function Navbar() {
  return (
    <div>
          <nav >
              <div class="left-links ">
                  <a class="links selected" href="/">Behance</a>
                  <a class="links" href="/"> For you</a>
                  <a class="links" href="/">  Discover</a>
                  <a class="links" href="/">   Livestreams</a>
                  <a class="links" href="/">  Jobs</a>
                  <a class="links" href="/"> Hire</a>
              </div>
              <div class="right-links">
                  <a class="links addbackgroundred" href="/">sign up</a>
                  <a class="links addbackground" href="/">login</a>
                  <a class="links" href="/">Free trial </a>
                  <a class="links" href="/">Adobe</a>
              </div>
          </nav>

<div className="nowitisvisible2">
        <div class="left-links ">
          <a class="links selected" href="/">Behance</a>
          <a class="links" href="/"> For you</a>
          <a class="links" href="/">  Discover</a>
          <a class="links" href="/">   Livestreams</a>
          <a class="links" href="/">  Jobs</a>
          <a class="links" href="/"> Hire</a>
        </div>
        <div class="right-links">
          <a class="links addbackgroundred" href="/">sign up</a>
          <a class="links addbackground" href="/">login</a>
          <a class="links" href="/">Free trial </a>
          <a class="links" href="/">Adobe</a>
        </div>
</div>

    </div>
  )
}
