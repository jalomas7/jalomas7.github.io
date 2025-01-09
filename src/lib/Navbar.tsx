import { Link, useLocation } from "react-router";
import styled from '@emotion/styled'

const NavbarContainer = styled.div`
    display: flex;
    height: 8vh;
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

    const routes = [
        { to: '/', name: 'Home' },
        { to: '/about', name: 'About' },
        { to: '/skills', name: 'Skills' },
        { to: '/contact', name: 'Contact' }
    ]

    return (
        <NavbarContainer>
            {routes.map(route => {
                return <NavLink to={route.to} className={location.pathname === route.to ? 'active' : 'inactive'} key={route.to}>{route.name}</NavLink>
            })}
        </NavbarContainer>
    );
}