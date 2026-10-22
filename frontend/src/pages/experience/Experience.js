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
            <text style={{ fontSize: '30px', fontWeight: 'bold' }}>Experience</text>
            {experienceBox({ 
                CompanyName: "First Horizon Bank", 
                Logo: FHLogo, 
                Role: "Treasury Management Digital Technology Intern", 
                Time: "June 2025 - August 2025", 
                Description: (
                        <ul>
                            <li>Developed internal web applications that <strong>improved</strong> team data access and management</li>
                            <li><strong>Collaborated</strong> with cross-functional teams to gather requirements and design interfaces</li>
                            <li>Implemented scalable solutions using <strong>Java</strong>, <strong>Spring Boot</strong>, <strong>React</strong>, and <strong>SQL Server</strong></li>
                            <li>Built <strong>REST APIs</strong> and integrated with existing systems while meeting security standards</li>
                        </ul>
                    ) 
                })}

            {experienceBox({
                CompanyName: "First Horizon Bank", 
                Logo: FHLogo, 
                Role: "Treasury Management Digital Technology Intern", 
                Time: "June 2026 - October 2026",
                Description: (
                    <ul>
                        <li>Leveraged <strong>AI</strong> to develop internal websites that streamlined client onboarding processes</li>
                        <li>Implemented intelligent automation solutions that increased onboarding speed by <strong>40%</strong></li>
                        <li>Designed and deployed <strong>AI-powered</strong> tools that automated repetitive tasks, allowing team members to focus on high-value activities</li>
                        <li>Collaborated with cross-functional teams to identify pain points in the onboarding workflow and <strong>deliver targeted solutions</strong></li>
                        <li>Resulted in <strong>accelerated</strong> onboarding timeline, <strong>enhanced</strong> client satisfaction, and <strong>reduced</strong> manual errors</li>
                    </ul>
                    ) 
                })}
            {experienceBox({
                CompanyName: "First Horizon Bank",
                Logo: FHLogo,
                Role: "IT Systems Engineer I",
                Time: "October 2026 - Present",
                Description: (
                    <ul>
                        <li><strong>Delivered</strong> a client-facing <strong>EBP (Electronic Bill Pay) enrollment UI</strong> using <strong>modern UI libraries</strong>, with <strong>multi-step flow, validation</strong>, and clear <strong>progress indicators.</strong></li>
                        <li><strong>Automated communications:</strong> on completion, <strong>emailed clients</strong> a <strong>BRD summary</strong> and routed the full <strong>BRD plus SQL scripts</strong> to <strong>engineering/stakeholders</strong> to keep a <strong>single source of truth.</strong></li>
                        <li><strong>Implemented secure provisioning</strong> to issue <strong>temporary credentials</strong> at submission, enabling <strong>immediate login</strong> to a <strong>companion portal</strong> for clients to <strong>review their information.</strong></li>
                        <li><strong>Hardened workflows</strong> for <strong>security and compliance</strong> by limiting <strong>sensitive data</strong> in notifications, enforcing <strong>HTTPS</strong>, and applying <strong>least-privilege access</strong> and <strong>audit-ready change controls.</strong></li>
                        <li><strong>Collaborated</strong> across <strong>product, QA,</strong> and <strong>operations</strong> in an <strong>Agile</strong> cadence to <strong>refine requirements, test edge cases</strong>, and <strong>document flows</strong> for associates and support teams.</li>
                        <li><strong>Streamlined end-to-end enrollment</strong> by <strong>reducing manual steps</strong> and aligning <strong>back-office processes</strong>, improving <strong>time-to-activation</strong> and <strong>data accuracy</strong>.</li>

                    </ul>

                )
            })}
                </section>
    );
}