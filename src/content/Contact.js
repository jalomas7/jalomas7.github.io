import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="main_content">
          <div className="header_container">
              <h1>Contact Information</h1>
          </div><br/>
          <p>
              <table className="contact_table">
                  <tr>
                      <td>Email:</td>
                      <td>jacob_massengill@yahoo.com</td>
                  </tr>
                  <tr>
                      <td>Phone:</td>
                      <td>(731) 608-7590</td>
                  </tr>
                  <tr>
                      <td>Social:</td>
                      <td><a href="https://www.linkedin.com/in/jacoblmassengill/"
                              style={{color:'white'}} target="_blank">LinkedIn</a></td>
                  </tr>
              </table>
          </p>
      </div>
    )
  }
}

export default Contact
