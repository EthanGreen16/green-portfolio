import headshot from './Ethan-Green.jpg';
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Homepage() {
    return (
        <section id="homepage" style={{ backgroundColor: 'white'}}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px', padding: '4rem' }}>
                <div style={{ flex: 1, padding: '0px', display: 'flex', flexDirection: 'column', gap: '15px' , justifyContent: 'center'}}>
                    <text style={{ fontSize: '40px', fontWeight: 'bold' }}>Ethan Green</text>
                    <text style={{ fontSize: '20px' }}>University of Arkansas Graduate '26 | Full-Stack Developer</text>

                    <div style={{ fontSize: '20px', maxWidth: '70%' , textIndent: '2rem', fontWeight: 'lighter', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <text>
                            I'm a recent Computer Science graduate from the University of Arkansas with a passion for building clean and practical software 
                            that solves real problems. I enjoy full-stack development and have experience working with Java, Spring Boot, React, 
                            SQL, and REST APIs through both professional and personal projects. </text>

                        <text>
                            During my internship at First Horizon Bank, I developed internal web applications that improved how teams accessed and managed
                            company data. I've also worked on projects ranging from contact management systems to enterprise scheduling platforms, where
                            I collaborated with development teams to build scalable and user-friendly tools. </text>

                        <text>
                            I'm especially interested in backend development, modern web applications, and creating software that is both functional
                            and allows great user experience. Outside of development, I'm always looking for opportunities to grow as a developer and take
                            on new technical challenges.
                        </text>
                    </div>

                    <div>
                        <text style={{ fontSize: '20px', fontWeight: 'initial' }}> University of Arkansas (Fayetteville) </text>
                        <ul style={{ fontSize: '20px', paddingTop: '0px', marginTop: '0px' }}>
                            <li>Bachelor of Science in Computer Science</li>
                            <li>Minor in Mathematics</li>
                        </ul>
                    </div>
                </div>

                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: '400px' }}>
                    <img
                        src={headshot}
                        alt="Ethan Green"
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            height: 'auto',
                            objectFit: 'cover',
                            borderRadius: '10%',
                            border: '2px solid black',
                        }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '5rem' }}>
                        <a href="https://www.linkedin.com/in/ethan-green-5321362a3/" target="_blank" rel="noopener noreferrer" 
                        style={{ textDecoration: 'none', color: 'black', fontSize: '20px', display: 'flex', alignItems: 'center' }}>
                            LinkedIn
                            <FaLinkedin style={{ marginLeft: '1rem', color: 'blue' }} />
                        </a>
                        <a href="https://github.com/EthanGreen16" target="_blank" rel="noopener noreferrer" 
                        style={{ textDecoration: 'none', color: 'black', fontSize: '20px', display: 'flex', alignItems: 'center' }}>
                            GitHub <FaGithub style={{ marginLeft: '1rem' }} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}