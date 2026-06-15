import FHLogo from './FHLogo.png';

function experienceBox({ CompanyName, Logo, Role, Time, Description }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '800px', padding: '2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <img src={Logo} alt={CompanyName} style={{ width: '200px', height: 'auto' }} />
            <text style={{ fontSize: '20px', fontWeight: 'bold' }}>{Role} | {CompanyName} ({Time})</text>
            <text style={{ fontSize: '16px' }}>{Description}</text>
        </div>
    );
}


export function Experience() {
    return (
        <section id="experience" style={{ backgroundColor: '#f8fafc', padding: '4rem', display: 'flex', flexDirection: 'column', color: 'black', gap: '3rem', alignItems: 'center' }}>
            <text style={{ fontSize: '30px', fontWeight: 'bold' }}>Experience: </text>
            {experienceBox({ 
                CompanyName: "First Horizon Bank", 
                Logo: FHLogo, 
                Role: "Treasury Management Digital Technology Intern", 
                Time: "Summer 2025", 
                Description: (
                        <ul>
                            <li>Developed internal web applications that improved team data access and management</li>
                            <li>Collaborated with cross-functional teams to gather requirements and design interfaces</li>
                            <li>Implemented scalable solutions using Java, Spring Boot, React, and SQL Server</li>
                            <li>Built REST APIs and integrated with existing systems while meeting security standards</li>
                        </ul>
                    ) 
                })}

            {experienceBox({
                CompanyName: "First Horizon Bank", 
                Logo: FHLogo, 
                Role: "AI Developer", 
                Time: "June 2026 - Present",
                Description: (
                    <ul>
                        <li>Leveraged AI to develop internal websites that streamlined client onboarding processes</li>
                        <li>Implemented intelligent automation solutions that increased onboarding speed by 40%</li>
                        <li>Designed and deployed AI-powered tools that automated repetitive tasks, allowing team members to focus on high-value activities</li>
                        <li>Collaborated with cross-functional teams to identify pain points in the onboarding workflow and deliver targeted solutions</li>
                        <li>Resulted in accelerated onboarding timeline, enhanced client satisfaction, and reduced manual errors</li>
                    </ul>
                    ) 
                })}
                </section>
    );
}