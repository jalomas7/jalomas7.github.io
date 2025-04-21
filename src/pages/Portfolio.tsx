import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

const LinkContainer = styled.div`
    text-align: left;
    max-width: 800px;
    width: 100%;
    font-size: 1.5em;

    a {
        color: #2D6DAA;
        text-decoration: underline;
        font-weight: bold;
    }
`;
export const Portfolio: React.FC = () => {
    return (
        <Container>
            <h1>Portfolio</h1>
            <LinkContainer>
                <p>
                    <a href='https://www.asurion.com/homeplus/'>
                        Asurion Home+
                    </a>
                    : A web application that allows users to manage their smart home devices and services. I worked on the front-end using React and Typescript, as well as the back-end using Node.js. I was directly responsible for the replacement experience, which requires an active claim to see.
                </p>
                <p>
                    <a href='https://www.npmjs.com/package/simply-typed-universal-bus?activeTab=readme'>
                        Simply Typed Universal Bus
                    </a>
                    : A simple, type-safe event bus for Typescript. This library allows you to create a universal event bus that can be used in both the client and server environments. It is designed to be easy to use and understand, while still providing powerful features.
                </p>
                <p>
                    <a href='https://gradient-generator.com'>
                        Gradient Generator
                    </a>
                    : A simple gradient generator that allows you to create and customize gradients. The generated CSS code can be easily copied and pasted into your project.
                </p>
                <p>
                    <a href='https://github.com/jalomas7/sort-racer'>
                        Sort Racer
                    </a>
                    : A simple fullstack sorting game utilizing websockets, Docker, and Express. The objective is to sort colored balls into the correct order faster than your opponent.
                </p>
            </LinkContainer>
        </Container>
    )
}