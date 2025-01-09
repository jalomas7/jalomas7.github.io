import React from "react";
import { Collapsible } from "../lib/Collapsible";
import newStyled from "@emotion/styled";

const SkillsList = newStyled.ul`
    display: flex;
    flex-direction: column;
    text-align: left;
`

const SkillsContainer = newStyled.div`
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Skills: React.FunctionComponent = () => {
    return (
        <div>
            <h1>Skills</h1>
            <SkillsContainer>
                <Collapsible header='Expert'>
                    <SkillsList>
                        <li>Typescript, Javascript, NodeJS</li>
                        <li>HTML and CSS</li>
                        <li>React with Context API</li>
                        <li>Git</li>
                        <li>Responsive Design</li>
                        <li>REST APIs</li>
                        <li>Front-end development</li>
                        <li>Back-end development</li>
                        <li>Creative problem solving</li>
                        <li>Unit testing with Jest</li>
                        <li>Agile methodology</li>
                    </SkillsList>
                </Collapsible>
                <Collapsible header='Proficient'>
                    <SkillsList>
                        <li>Serverless</li>
                        <li>AWS Services</li>
                        <li>Infrastructure development</li>
                        <li>Relational Databases</li>
                        <li>NoSQL Databases</li>
                        <li>Analytics Services</li>
                        <li>E2E testing</li>
                        <li>Styled components</li>
                        <li>SPA design</li>
                    </SkillsList>
                </Collapsible>
                <Collapsible header='Familiar'>
                    <SkillsList>
                        <li>Mobile development with React Native</li>
                        <li>Authentication and Authorization</li>
                        <li>CI/CD</li>
                        <li>Docker</li>
                        <li>Webpack</li>
                    </SkillsList>
                </Collapsible>
                <Collapsible header='Soft Skills'>
                    <SkillsList>
                        <li>People management</li>
                        <li>Code review</li>
                        <li>Documentation</li>
                        <li>Conflict resolution</li>
                        <li>Continuous learning</li>
                        <li>Communication</li>
                        <li>Mentoring</li>
                    </SkillsList>
                </Collapsible>
            </SkillsContainer>
        </div>
    )
}