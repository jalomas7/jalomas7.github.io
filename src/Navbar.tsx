import { Link } from "react-router";
import styled from '@emotion/styled'

const NavbarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 1em;
    background-color: #0090aa;
    align-items: center;
    justify-content: end;
    gap: 1em;
    padding: 20px;
}
`

export const Navbar: React.FunctionComponent = () => {

    return (
        <NavbarContainer>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </NavbarContainer>
    );
}