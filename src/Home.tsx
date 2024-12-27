import React from "react";
import jacob_3 from './img/Jacob_3.jpeg';
import styled from '@emotion/styled';

const ProfilePicture = styled.img`
    height: 400px;
    border-radius: 25px;
`

export const Home: React.FunctionComponent = () => {
    return (
        <div className="main_content">
            <div className="header_container">
                <h1>Welcome to Jacob Massengill's Homepage</h1>
            </div><br />
            <ProfilePicture src={jacob_3} alt="Jacob" />
            <p>I built this site use React and @emotion styled components <br /> Here, you
                can see my story, work, and contact information. Thank you for visiting!<br />
            </p>
        </div>
    )
}