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
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Card = newStyled(CCard)`
    max-width: 250px;
`

export const Collapsible: React.FunctionComponent<CollapsibleProps> = ({ className, header, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <Container className={className} onClick={() => setOpen(!open)}>
            {header}
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