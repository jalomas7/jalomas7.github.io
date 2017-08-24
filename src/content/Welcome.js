import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
        <div className="main_content">
          <div className="center_content">
              <div className="header_container">
                  <h1>
                    Welcome to Jacob Massengill's Homepage
                  </h1>
              </div>
              <br/>
              <p>
                I built this site entirely from scratch
                using HTML, CSS, and Javascript.<br/> Here, you
                can see my story and work, as well as contact me and in general see what
                kind of designs I can create.<br/>

                This site is very much a work in progress right now, so you may see some
                goofy stuff going on, but that is perfectly fine.
              </p>
          </div>
        </div>
    );
  }
}

export default Welcome;
