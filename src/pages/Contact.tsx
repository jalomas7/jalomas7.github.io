import newStyled from "@emotion/styled"
import React from "react"

const Container = newStyled.div`
    text-align: center;
`

export const Contact: React.FunctionComponent = () => {
    return (
        <Container>
            <h1>Contact me:</h1>
            <div>
                <p>Phone: 615-917-9715</p>
                <p>Email: jacobmassengill10@gmail.com</p>
            </div>
        </Container>
    )
}