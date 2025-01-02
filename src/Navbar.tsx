import { Link, useLocation } from "react-router";
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
    padding: 10px;

    &:hover {
        background-color: #5689C5;
        border-radius: 20px;
        transition: background-color 200ms ease-in-out;
    }
    
    &.active {
        background-color: #5689C5; 
        border-radius: 20px;
    }
`
export const Navbar: React.FunctionComponent = () => {
    const location = useLocation();

    return (
        <NavbarContainer>
            <NavLink to='/' className={location.pathname === '/' ? 'active' : 'inactive'}>Home</NavLink>
            <NavLink to='/about' className={location.pathname === '/about' ? 'active' : 'inactive'}>About</NavLink>
            <NavLink to='/contact' className={location.pathname === '/contact' ? 'active' : 'inactive'}>Contact</NavLink>
        </NavbarContainer>
    );
}