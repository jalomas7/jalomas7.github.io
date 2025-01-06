import React from "react";
import { Collapsible } from "./Collapsible";
import newStyled from "@emotion/styled";

const SkillsList = newStyled.ul`
    display: flex;
    flex-direction: column;
`

export const Skills: React.FunctionComponent = () => {
    return (
        <div>
            <h1>Skills</h1>
            <Collapsible header='Expert'>
                <SkillsList>
                    <li>Typescript, Javascript, NodeJS</li>
                    <li>React</li>
                </SkillsList>
            </Collapsible>
        </div>
    )
}