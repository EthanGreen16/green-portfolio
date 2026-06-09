import { FaJs, FaJava, FaLinux, FaHtml5, FaGithub, FaNodeJs, FaPython, FaBrain } from "react-icons/fa";

function Skillbox({ icon, title, description }) {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '10px', 
            justifyContent: 'center', 
            alignItems: 'center', 
            maxWidth: '300px',
            minHeight: '400px'
        }}>            
            <div style={{ 
                width: '150px', 
                height: '150px', 
                borderRadius: '50%', 
                backgroundColor: '#0f172a', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                {icon}
            </div>
            <text style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 'bold' }}>{title}</text>
            <p style = {{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', textAlign: 'center' }}>{description}</p>
        </div>
    )
}



export function Skills() {
    return (
            <section
            id="skills"
            style={{
                backgroundColor: '#374151 ',
                padding: '10vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                color: 'white',
                alignItems: 'center',
                width: '100%',
                boxSizing: 'border-box',
                overflowX: 'hidden'
            }}
            >

            <text style={{ fontSize: '40px', fontWeight: 'bold' }}>Skills</text>
            <text>Here are some of my Skills!</text>
            <text>Always wanting to learn more.</text>

            <div
                style={{
                // width: 'min(1200px, 100%)',   // let the grid take full width, capped for readability
                maxWidth: '100%',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', // exactly 3 columns
                gap: 'clamp(1rem, 10vw, 5rem)',
                padding: 'clamp(1rem, 3vw, 4rem)',
                alignItems: 'start'
                }}
            >

                {Skillbox({ icon: <FaJs style={{ fontSize: '100px' }} />, title: "JavaScript", description: "Developed interactive frontend functionality using JavaScript within React applications, including dynamic rendering, API communication, and responsive user interfaces." })}

                {Skillbox({ icon: <FaJava style={{ fontSize: '100px' }} />, title: "Java", description: "Built full-stack applications using Java and Spring Boot, including REST APIs, backend business logic, and database integration with Microsoft SQL Server. Used in both internship and personal projects." })}

                {Skillbox({ icon: <FaLinux style={{ fontSize: '100px' }} />, title: "Linux", description: "I bring proven experience with Linux systems and command-line interfaces, including terminal operations, shell scripting, and system administration." })}

                {Skillbox({ icon: <FaHtml5 style={{ fontSize: '100px' }} />, title: "HTML/CSS", description: "Developed responsive, accessible web applications with a focus on user experience. Ensured seamless functionality across devices while maintaining accessibility standards." })}

                {Skillbox({ icon: <FaGithub style={{ fontSize: '100px' }} />, title: "GitHub", description: "Possess strong experience in version control and team collaboration utilizing Git and GitHub. I actively use these platforms to maintain structured project histories, manage branches efficiently, and support collaborative development cycles within fast-paced software environments." })}

                {Skillbox({ icon: <FaNodeJs style={{ fontSize: '100px' }} />, title: "Node.js", description: "Developed scalable server-side applications with Node.js and Express. Created robust backend systems capable of handling high-volume requests with optimal performance." })}

                {Skillbox({ icon: <FaPython style={{ fontSize: '100px' }} />, title: "Python", description: "Developed RESTful APIs using Python's FastAPI framework. Built high-performance endpoints with automatic documentation and validation for seamless integration." })}

                {Skillbox({ icon: <FaBrain style={{ fontSize: '100px' }} />, title: "AI/Machine Learning", description: "Experience using different AI frameworks and libraries to drive and help solve complex problems. These applications include Claude, ChatGTP, GitHub Copilot, Devin, and more." })}
            </div>
        </section>
    );
}
