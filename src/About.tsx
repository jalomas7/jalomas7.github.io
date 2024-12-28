import newStyled from "@emotion/styled"

const Container = newStyled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TextContainer = newStyled.p`
    max-width: 30em;
    text-align: left;
    font-size: 1.5em;

     br {
        margin: 20px; 
        display: block;
        content: "";
    }
`;
export const About: React.FunctionComponent = () => {
    return (
        <Container className="main_content">
            <div className="header_container">
                <h1>About Me</h1>
            </div><br />
            <TextContainer>
                I am a first generation college student from a small town in West
                Tennessee called Henderson. I first discovered my love for computers
                and technology at a young age, playing video games and using
                the family desktop. Growing up, my access to
                the internet was limited to my time at school, so almost the
                entirety of my computer knowledge comprised of self taught
                trial-and-error. I was fascinated by how computers were so
                prevelant in everyday life, and strived to learn as much as I could
                about them. <br />

                My fascination with computers culminated when I made the decision to
                pursue a bachelor's degree in Computer Science at the University of
                Tennessee, Knoxville. Prior to my first day of class, I had
                absolutely no experience programming. In college, I learned C/C++ first,
                then moved on to scripting languages like python and Javascript<br />

                After graduating, I moved to the Nashville Tennessee area and started working
                for Asurion, one of the leading technology companies of middle Tennessee. At Asurion,
                I learned what it means to be a true software engineer. It was no longer just
                about coding projects, but working on a team to create meaningful products.<br />

                During my time at Asurion, I worked hands on in various code bases, but I
                became most familiar with React and Typescript. I used these and other tools to build
                things such as a survey application to replace our costly existing application. I also
                built a site designed to help customers optimize and replace their phone batteries.
                <br />

                During my tenure at Asurion, I gained valuable leadership skills. I was selected to be
                a mentor for the prestigious Software Engineering Apprenticeship Program. This program
                was the first of it's kind in Tennessee, where employees outside the technology space at
                Asurion were given the opportunity to become software engineers. I taught a student who knew
                nothing about software engineering or programming. Within 12 months, she was hired as a
                full time software engineer at Asurion. <br />

                My time at Asurion culminated on a team tasked with figuring out how to replace customers'
                broken technology. I served as technical leader on this team for 3 years, where I managed
                10 other engineers as we built this tool. I represented my team's engineers at meetings and
                demonstrations as well as guided the technical decisions for the app itself.
                <br />

                The majority of my experience is in web development. I have 7 years experience with React, Typescript,
                and Node.js. I consider myself a full stack engineer as I am comfortable working on the front-end as well
                as the back-end. I enjoy front-end development especially as it blends my love for programming and art,
                and I enjoy collaborating with designers to bring their vision to life.
            </TextContainer>
        </Container>
    )
}