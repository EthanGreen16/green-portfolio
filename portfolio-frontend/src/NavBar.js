import { Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

export function NavBar() {
    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    switch (entry.target.id) {
                        case "homepage": setValue(0); break;
                        case "skills": setValue(1); break;
                        case "experience": setValue(2); break;
                        case "projects": setValue(3); break;
                        default: setValue(0); break;
                    }
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
}, []);

    return (
        <div style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'black', width: '100%'}}>
            {/* Sticky Navigational Header (Projects, Work Experience)*/}
            <Tabs value={value} onChange={handleChange} centered>
                <Tab component="a" label="About" value={0} href="#homepage" style={{ color: 'white' }} />
                <Tab component="a" label="Skills" value={1} href="#skills" style={{ color: 'white' }} />
                <Tab component="a" label="Work Experience" value={2} href="#experience" style={{ color: 'white' }} />
                <Tab component="a" label="Projects" value={3} href="#projects" style={{ color: 'white' }} />
            </Tabs>
        </div>
    );
}