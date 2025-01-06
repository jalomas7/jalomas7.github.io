import React from "react";
import jacob_3 from './img/Jacob_3.jpeg';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfilePicture = styled.img`
    height: 400px;
    border-radius: 25px;

    @media screen and (max-width: 800px) {
        height: 200px;
    }
`;

const CaptionContainer = styled.p`
    font-size: 25px;
    max-width: 18em;
`

export const Home: React.FunctionComponent = () => {
    return (
        <Container className="main_content">
            <div className="header_container">
                <h1>Welcome to Jacob Massengill's Homepage</h1>
            </div><br />
            <ProfilePicture src={jacob_3} alt="Jacob" />
            <CaptionContainer>I built this site using React, Typescript, and @emotion styled components <br /> Here, you
                can see my story, work, and contact information. Thank you for visiting!<br />
            </CaptionContainer>
        </Container>
    )
}