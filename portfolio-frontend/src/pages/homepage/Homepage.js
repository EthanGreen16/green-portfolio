import headshot from './Ethan-Green.jpg';
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

export function Homepage() {
    return (
        <section id="homepage" style={{ backgroundColor: '#f8fafc'}}>
            {/* Centered header */}
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                padding: '2rem 0 1rem 0',
                textAlign: 'center'
            }}>
                <text style={{ fontSize: '40px', fontWeight: 'bold' }}>Ethan Green</text>
                <text style={{ fontSize: '20px' }}>University of Arkansas Graduate '26 | Full-Stack Developer | AI Developer</text>
            </div>     

            {/* Main content - side by side with minimal dead space */}
            <div style={{ 
                display: 'flex', 
                flexDirection: 'row', 
                gap: '3rem',  
                padding: '1rem 2rem 2rem 2rem',
                maxWidth: '80%',  
                margin: '0 auto',
                alignItems: 'start'
            }}>                
                {/* Left side - description */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ fontSize: '18px', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <p>I'm a recent Computer Science graduate from the University of Arkansas with a passion for building clean and practical software that solves real problems. I enjoy full-stack development and have experience working with Java, Spring Boot, React, SQL, and REST APIs through both professional and personal projects.</p>
                        <p>During my internship at First Horizon Bank, I developed internal web applications that improved how teams accessed and managed company data. I've also worked on projects ranging from contact management systems to enterprise scheduling platforms, where I collaborated with development teams to build scalable and user-friendly tools.</p>
                        <p>I'm especially interested in backend development, modern web applications, and creating software that is both functional and allows great user experience. Outside of development, I'm always looking for opportunities to grow as a developer and take on new technical challenges.</p>
                    </div>

                    {/* Degree info - centered under description */}
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <text style={{ fontSize: '18px', fontWeight: 'bold' }}>University of Arkansas (Fayetteville)</text>
                        <ul style={{ fontSize: '18px', listStyle: 'none', padding: 0, marginTop: '0.5rem' }}>
                            <li>Bachelor of Science in Computer Science</li>
                            <li>Minor in Mathematics</li>
                        </ul>
                    </div>
                </div>

                {/* Right side - image and links */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '350px' }}>
                    <img
                        src={headshot}
                        alt="Ethan Green"
                        style={{
                            width: '100%',
                            maxWidth: '350px',
                            height: 'auto',
                            objectFit: 'cover',
                            borderRadius: '10%',
                            border: '2px solid black',
                        }}
                    />
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(2, 1fr)', 
                        marginTop: '1.5rem', 
                        width: '100%', 
                        justifyItems: 'center', 
                        gap: '1rem' 
                    }}>                          
                        <a href="https://www.linkedin.com/in/ethan-green-5321362a3/" rel="noopener noreferrer" 
                        style={{ textDecoration: 'none', color: 'black', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                            LinkedIn
                            <FaLinkedin style={{ marginLeft: '0.5rem', color: "#0077b5" }} />
                        </a>
                        <a href="https://github.com/EthanGreen16" rel="noopener noreferrer" 
                        style={{ textDecoration: 'none', color: 'black', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                            GitHub <FaGithub style={{ marginLeft: '0.5rem', color: "#24292e" }} />
                        </a>
                        <a href="/Ethan-Green-Resume.pdf" download rel="noopener noreferrer" 
                        style={{ textDecoration: 'none', color: 'black', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                            Resume <FaFilePdf style={{ marginLeft: '0.5rem', color: "#dc2626" }} />
                        </a>
                        <a href="/Ethan-Green-Transcript.pdf" download rel="noopener noreferrer" 
                        style={{ textDecoration: 'none', color: 'black', fontSize: '18px', display: 'flex', alignItems: 'center' }}>
                            Transcript <FaFilePdf style={{ marginLeft: '0.5rem', color: "#dc2626" }} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}