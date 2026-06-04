import { FaJs, FaJava, FaLinux, FaHtml5, FaGithub, FaNodeJs, FaPython } from "react-icons/fa";

function Skillbox({ icon, title, description }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center', maxWidth: '300px' }}>
            {icon}
            <text style={{ fontSize: '20px', fontWeight: 'bold' }}>{title}</text>
            <text style = {{ fontSize: '16px', justifyContent: 'center', alignItems: 'center' }}>{description}</text>
        </div>
    )
}



export function Skills() {
    return (
        <section id="skills"style={{ backgroundColor: 'teal', padding: '10vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px', color: 'lightgrey' }}>
            <text style={{ fontSize: '40px', fontWeight: 'bold' }}>Skills</text>
            <text>Here are some of my Skills!</text>
            <text>Always wanting to learn more.</text>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))', gap: '10rem', padding: '5rem' }}>

                {Skillbox({ icon: <FaJs style={{ fontSize: '100px' }} />, title: "JavaScript", description: "Developed interactive frontend functionality using JavaScript within React applications, including dynamic rendering, API communication, and responsive user interfaces." })}

                {Skillbox({ icon: <FaJava style={{ fontSize: '100px' }} />, title: "Java", description: "Built full-stack applications using Java and Spring Boot, including REST APIs, backend business logic, and database integration with Microsoft SQL Server. Used in both internship and personal projects." })}

                {Skillbox({ icon: <FaLinux style={{ fontSize: '100px' }} />, title: "Linux", description: "Experience working with Linux systems and command line interfaces." })}

                {Skillbox({ icon: <FaHtml5 style={{ fontSize: '100px' }} />, title: "HTML/CSS", description: "Experience building responsive and accessible web applications." })}

                {Skillbox({ icon: <FaGithub style={{ fontSize: '100px' }} />, title: "GitHub", description: "Experience working with Git and GitHub for version control and collaboration." })}

                {Skillbox({ icon: <FaNodeJs style={{ fontSize: '100px' }} />, title: "Node.js", description: "Experience building scalable server-side applications with Node.js and Express." })}

                {Skillbox({ icon: <FaPython style={{ fontSize: '100px' }} />, title: "Python", description: "Experience using Python's FastAPI to create RESTful APIs." })}

            </div>
        </section>
    );
}