import newStyled from "@emotion/styled"
import React from "react"

const Container = newStyled.div`
    text-align: center;

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;

        button {
            max-width: 200px;
            min-width: 150px;
            align-self: center;
            background-color: #2D6DAA;
            color: white;
            border: none;
            border-radius: 30px;
            min-height: 50px;

            &:active {
                background-color:rgb(26, 64, 99);
            }
        }
    }
`

export const Contact: React.FunctionComponent = () => {
    return (
        <Container>
            <div className="container">
                <h1>Contact Me</h1>
                <form target="_blank" action="https://formsubmit.co/3b669ebf25a4eb39db6ad01283edba11" method="POST">
                    <div className="form-group">
                        <div className="form-row">
                            <div className="col">
                                <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                            </div>
                            <div className="col">
                                <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" className="form-control" name="message" rows={10} required></textarea>
                    </div>
                    <button type="submit">Submit Form</button>
                </form>
            </div>
        </Container>
    )
}