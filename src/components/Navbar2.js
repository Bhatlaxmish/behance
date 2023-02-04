import React from 'react';
import "./navbar2.css";

export default function Navbar2() {
  return (
    <div >


      
          <div class="left-linkst ">
              <input class="search" type="text" placeholder="Search.." />
        <div class="rights">

              <a class="linkse selected" href="/">Projects</a>
              <a class="linkse" href="/">Images</a>
              <a class="linkse" href="/">    Streams</a>
              <a class="linkse" href="/">     People</a>
              <a class="linkse" href="/">   Moodboards</a>
        </div>
          </div>




          <div className="nowitisvisible">
        <input class="search2" type="text" placeholder="Search.." />
        <a class="linkse selected" href="/">Projects</a>
        <a class="linkse" href="/">Images</a>
        <a class="linkse" href="/">    Streams</a>
        <a class="linkse" href="/">     People</a>
        <a class="linkse" href="/">   Moodboards</a>
          </div>




    </div>
  )
}
