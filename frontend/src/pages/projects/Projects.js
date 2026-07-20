
function ProjectBox({ link, title, description, techStack }) {
    return (
        <div style={{
            backgroundColor:'#1f2937',
            padding: '2rem',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundSize: 'contain', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',  
            minHeight: '300px',  
        }}>
            <div style={{
                backgroundColor: 'rgba(31, 41, 55, 0.95)',
                padding: '1.5rem',
                borderRadius: '8px',
                width: '100%'
            }}>
                <h1>{title}</h1>    
                {link && (
                    <a href={link} style={{ 
                        color: '#60a5fa',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        padding: '0.5rem 1rem',
                        borderRadius: '4px',
                        backgroundColor: '#374151',
                    }}>View Code</a>
                )}
                <p>{description}</p>
                <p style={{ color: '#9ca3af' }}>Tech Stack: {techStack}</p>
            </div>
        </div>
    );
}

export function Projects() {
    return (
        <section id="projects" 
            style={{ 
                backgroundColor: '#374151', 
                padding: '10vh', 
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
            
            <div style={{ 
                textAlign: 'center', 
                marginBottom: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                alignItems: 'center'
            }}>
                <h1 style={{ 
                    fontSize: '40px', 
                    fontWeight: 'bold', 
                    margin: 0 
                }}>Projects</h1>
                <text style={{ fontSize: '18px', color: '#9ca3af' }}>Here are some of my projects</text>
                <text style={{ fontSize: '18px', color: '#9ca3af' }}>Currently working on more!</text>
            </div>

            <div id="project-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                width: '100%',
                textAlign: 'center',
            }}>
                <ProjectBox 
                    link="https://github.com/EthanGreen16/green-portfolio" 
                    title="My Portfolio" 
                    description="A modern, responsive portfolio website built with React featuring smooth navigation, dynamic content sections, and a clean UI design. Implements component-based architecture, responsive layouts, and interactive elements to showcase professional experience and projects." 
                    techStack="React, JavaScript, CSS"
                />
                <ProjectBox 
                    link="https://github.com/EthanGreen16/Snake_java" 
                    title="Snake" 
                    description="A classic Snake game built with Java Swing featuring progressive difficulty, collision detection, and real-time score tracking. Demonstrates object-oriented programming principles, event handling, and game loop implementation with smooth arrow key controls and restart functionality." 
                    techStack="Java, Swing"
                />
                <ProjectBox 
                    title="Enterprise Data Dashboard & Analytics Portal" 
                    description="Created a dashboard that extracted different client companies' information from the company database and displayed them on an intuitive interface that allowed internal users to increase information lookup speeds by 25%, ultimately accelerated the rate at which First Horizon's Electronic Bill Payment service is developed and implemented." 
                    techStack="React, JavaScript, CSS, Java, Spring Boot, MySQL"
                />
            </div>
        </section>
    )
}