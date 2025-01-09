import { CCard, CCardBody, CCollapse } from "@coreui/react";
import newStyled from "@emotion/styled";
import { useState } from "react";

type CollapsibleProps = {
    className?: string;
    children: React.ReactNode;
    header: string;
};

const Container = newStyled.div`
    overflow: hidden;
    min-height: 100px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1200px) {
        min-width: 200px;
    }
`;

const Card = newStyled(CCard)`
    max-width: 300px;
    background-color: #63A5E9;
`

const HeaderContainer = newStyled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 30px;
`;

const ArrowContainer = newStyled.div<{ open: boolean }>`
    transform: rotate(${props => props.open ? '90deg' : '0deg'});
    transition: transform 300ms linear;
`;

export const Collapsible: React.FunctionComponent<CollapsibleProps> = ({ className, header, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <Container className={className} onClick={() => setOpen(!open)}>
            <HeaderContainer>
                <ArrowContainer open={open}>
                    ➤
                </ArrowContainer>
                {header}
            </HeaderContainer>
            <CCollapse visible={open}>
                <Card>
                    <CCardBody>
                        {children}
                    </CCardBody>
                </Card>
            </CCollapse>
        </Container>
    )
}