import FHLogo from './FHLogo.png';

function experienceBox({ CompanyName, Role, Duration, Description }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center', maxWidth: '800px' }}>
            <text style={{ fontSize: '20px', fontWeight: 'bold' }}>{Role} | {CompanyName} ({Duration})</text>
            <text style={{ fontSize: '16px' }}>{Description}</text>
        </div>
    );
}


export function Experience() {
    return (
        <section id="experience" style={{ backgroundColor: 'white', padding: '4rem', display: 'flex', flexDirection: 'column', color: 'black' }}>
            <text style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '2rem' }}>Experience</text>
            <img src={FHLogo} alt="First Horizon Bank Logo" style={{ width: '200px', height: 'auto', marginBottom: '2rem', backgroundColor: 'white'}} />
            <text style={{ fontSize: '20px', fontWeight: 'bold' }}>Software Development Intern | First Horizon Bank (Summer 2025)</text>
            <text style={{ fontSize: '16px', marginBottom: '1rem' }}>
                During my internship at First Horizon Bank, I developed internal web applications that improved how teams accessed and managed
                company data. I collaborated with cross-functional teams to gather requirements, design user-friendly interfaces, and implement
                scalable solutions using Java, Spring Boot, React, and Microsoft SQL Server. My work included building REST APIs, integrating with
                existing systems, and ensuring the applications met security and performance standards. This experience allowed me to apply my technical
                skills in a real-world setting while contributing to the bank's operational efficiency.
            </text>
        </section>
    );
}