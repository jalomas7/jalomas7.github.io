import React from "react";
import jacob_1 from '../img/Jacob_1.jpeg';
import jacob_2 from '../img/Jacob_2.jpeg';
import jacob_3 from '../img/Jacob_3.jpeg';
import jacob_4 from '../img/Jacob_4.jpeg';
import styled from '@emotion/styled';
import { CCarousel, CCarouselItem } from "@coreui/react";

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
    text-align: center;
`

export const Home: React.FunctionComponent = () => {
    return (
        <Container className="main_content">
            <div className="header_container">
                <h1>Welcome to Jacob Massengill's Homepage</h1>
            </div><br />
            <CCarousel controls interval={false}>
                <CCarouselItem>
                    <ProfilePicture src={jacob_3} alt="Jacob" />
                </CCarouselItem>
                <CCarouselItem>
                    <ProfilePicture src={jacob_2} alt="Jacob" />
                </CCarouselItem>
                <CCarouselItem>
                    <ProfilePicture src={jacob_1} alt="Jacob" />
                </CCarouselItem>
                <CCarouselItem>
                    <ProfilePicture src={jacob_4} alt="Jacob" />
                </CCarouselItem>
            </CCarousel>
            <CaptionContainer>I built this site using React, Typescript, and @emotion styled components <br /> Here, you
                can see my story, work, and contact information. Thank you for visiting!<br />
            </CaptionContainer>
        </Container>
    )
}