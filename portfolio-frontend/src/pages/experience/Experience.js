import FHLogo from './FHLogo.png';

function experienceBox({ CompanyName, Logo, Role, Time, Description }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '800px', padding: '2rem' }}>
            <img src={Logo} alt={CompanyName} style={{ width: '200px', height: 'auto', marginBottom: '2rem', backgroundColor: 'white' }} />
            <text style={{ fontSize: '20px', fontWeight: 'bold' }}>{Role} | {CompanyName} ({Time})</text>
            <text style={{ fontSize: '16px' }}>{Description}</text>
        </div>
    );
}


export function Experience() {
    return (
        <section id="experience" style={{ backgroundColor: 'white', padding: '4rem', display: 'flex', flexDirection: 'column', color: 'black' }}>
            <text style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '2rem' }}>Experience: </text>

            {experienceBox({ CompanyName: "First Horizon Bank", Logo: FHLogo, Role: "Treasury Management Digital Technology Intern", Time: "Summer 2025", Description: "During my internship at First Horizon Bank, I developed internal web applications that improved how teams accessed and managed company data. I collaborated with cross-functional teams to gather requirements, design user-friendly interfaces, and implement scalable solutions using Java, Spring Boot, React, and Microsoft SQL Server. My work included building REST APIs, integrating with existing systems, and ensuring the applications met security and performance standards. This experience allowed me to apply my technical skills in a real-world setting while contributing to the bank's operational efficiency." })}

            {experienceBox({ CompanyName: "First Horizon Bank", Logo: FHLogo, Role: "AI Developer", Time: "June 2026 - Present", Description: "During my second internship at First Horizon Bank, I leveraged AI to develop internal websites that streamlined client onboarding processes. Implemented intelligent automation solutions that increased onboarding speed by 40%, significantly improving team efficiency and client experience. Designed and deployed AI-powered tools that automated repetitive tasks, allowing team members to focus on high-value activities. Collaborated with cross-functional teams to identify pain points in the onboarding workflow and deliver targeted solutions. The resulting improvements not only accelerated the onboarding timeline but also enhanced overall client satisfaction and reduced manual errors." })}
        </section>
    );
}