import { Link } from "react-router";
import styled from '@emotion/styled'

const NavbarContainer = styled.div`
    display: flex;
    height: 1em;
    background-color: #2D6DAA;
    align-items: center;
    justify-content: end;
    gap: 1em;
    padding: 20px;
`
const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
`
export const Navbar: React.FunctionComponent = () => {

    return (
        <NavbarContainer>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </NavbarContainer>
    );
}