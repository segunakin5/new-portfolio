import React from 'react'

const ProjectCard = ({ img, alt, category, title, desc, tags = [], figmaLink, githubLink }) => (
  <div className="project-card">
    <div className="project-image">
      <img src={img} alt={alt} />
      <div className="project-overlay">
        <div className="project-links">
          <a href={figmaLink} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Figma Prototype">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
            </svg>
          </a>

          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div className="project-content">
      <div className="project-category">{category}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="project-tech">{tags.map(t => <span key={t}>{t}</span>)}</div>
    </div>
  </div>
)

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">A showcase of my recent work combining design and development</p>
        </div>

        <div className="projects-grid">
          <ProjectCard 
            img={`${import.meta.env.BASE_URL}sapag.png`}
            alt="Sapa Guard App"
            category="Mobile App"
            title="Sapa Guard"
            desc="Finance calculator app infused with Nigerian slang for fun money tracking. Created an engaging interface that makes budgeting enjoyable with local cultural references."
            tags={['React Native','UI Design','Finance']}
            figmaLink="https://www.figma.com/proto/Jqsif0hK4bpePOH5u6WHdN/SAPA-GUARD?node-id=58-417&p=f&t=OCYoD5DwnU3y9oPu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=58%3A553&show-proto-sidebar=1"
            githubLink="https://github.com/yourusername/sapag"
          />

          <ProjectCard 
            img={`${import.meta.env.BASE_URL}hero.png`}
            alt="Green Harvest Website"
            category="Website"
            title="Green Harvest"
            desc="Fresh farm produce website with a welcoming, clean layout. Designed to connect consumers with local farmers through an intuitive and trustworthy interface."
            tags={['React','E-commerce','Agriculture']}
            figmaLink="https://www.figma.com/proto/LXOzfHO0d2ZBbwvDr6Df8f/Untitled?node-id=1-148&t=IUB5nrrCiu0tjXdb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            githubLink="https://github.com/yourusername/greenharvest"
          />

          <ProjectCard 
            img={`${import.meta.env.BASE_URL}HEROg.png`}
            alt="GadgetsManShubb E-commerce"
            category="E-commerce"
            title="GadgetsManShubb"
            desc="E-commerce store for gadgets with smooth navigation and modern design. Designed and developed a complete shopping experience with intuitive product discovery."
            tags={['REACT.js','E-commerce','Full-Stack']}
            figmaLink="https://www.figma.com/proto/BDCangdBvUwNewor9yWGVD/gadgetsmann-hubb?t=cxaYKziUXA6QjF3e-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=2005-301"
            githubLink="https://github.com/yourusername/gadgetsmanshubb"
          />

          <ProjectCard 
            img={`${import.meta.env.BASE_URL}NELSON.png`}
            alt="Handmade Shoe Vendor"
            category="Web App"
            title="Handmade Shoe Vendor"
            desc="Custom ordering platform for shoe artisans. Designed a comprehensive system for custom measurements, material selection, and order tracking."
            tags={['figma','Custom Orders','Artisan']}
            figmaLink="https://www.figma.com/proto/EBUl4Sftr1dE1G5YSb6Jcr/Handmade-BY-Nelson?node-id=1016-8894&t=2dBosCwp4FasjCqW-1&scaling=min-zoom&content-scaling=fixed&page-id=256%3A412&starting-point-node-id=1016%3A8894"
            githubLink="https://github.com/yourusername/handmadeshoe"
          />

          <ProjectCard 
            img={`${import.meta.env.BASE_URL}KRYPTO.png`}
            alt="Kryptoo Crypto App"
            category="Mobile App"
            title="Kryptoo"
            desc="Crypto investment and tracking app with a minimal, sleek user interface. Designed complex financial data visualization in an accessible format."
            tags={['figma','Crypto','Finance']}
            figmaLink="https://www.figma.com/proto/ZneqU3iBEGTLEB8lO7snWq/AYO-KRYPTO?t=5YK4GUD3zZDQRBSu-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-52&starting-point-node-id=1%3A43"
            githubLink="https://github.com/yourusername/kryptoo"
          />

          <ProjectCard 
            img={`${import.meta.env.BASE_URL}todo.png`}
            alt="Todo List WebApp"
            category="Web App"
            title="Todo List WebApp"
            desc="A modern, intuitive todo list application with drag-and-drop functionality, categories, and progress tracking for enhanced productivity."
            tags={['React','Productivity','PWA']}
            figmaLink="https://figma.com/proto/todolist"
            githubLink="https://github.com/yourusername/todolist"
          />

          <ProjectCard 
            img={`${import.meta.env.BASE_URL}rps.png`}
            alt="Rock Paper Scissors Game"
            category="Game"
            title="Rock Paper Scissors"
            desc="Interactive rock paper scissors game with smooth animations, score tracking, and engaging visual feedback for an entertaining user experience."
            tags={['JavaScript','Game','Animation']}
            figmaLink="https://figma.com/proto/rps"
            githubLink="https://github.com/yourusername/rps"
          />

          <ProjectCard 
            img={`${import.meta.env.BASE_URL}vanguard.png`}
            alt="vanguardpartners"
            category="website"
            title="Vanguard Partners salesforce consulting firm"
            desc="Clean and professional website design for Vanguard Partners, a Salesforce consulting firm, built to highlight their services, expertise, and client-focused approach"
            tags={['Figma','Web Design','Salesforce']}
            figmaLink="https://www.figma.com/proto/zPEo1nKPDyEH8si8n5AQcQ/BACKGROUND-TEST?node-id=119-5&p=f&t=btEq2XRu9ONuvAIe-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=119%3A5"
            githubLink="https://github.com/yourusername/vanguard"
          />

          <ProjectCard 
            img={`${import.meta.env.BASE_URL}johntosin.png`}
            alt="johntosin"
            category="website"
            title="Johntosin"
            desc="A custom homepage design for a professional photographer with a retro-inspired aesthetic. The concept combines vintage elements like a classic film camera and bold serif typography with a clean, modern layout."
            tags={['figma','photography','Animation']}
            figmaLink="https://www.figma.com/proto/duQhrG1KNvETT18XQC2WE5/johntosin?node-id=1-2&p=f&t=abWO52Bc7FowfBq0-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
            githubLink="https://github.com/yourusername/johntosin"
          />

          <ProjectCard 
            img={`${import.meta.env.BASE_URL}peter.png`}
            alt="peter"
            category="website"
            title="Peterson okopi"
            desc="A minimal website design for Peterson Okopi, showcasing his portfolio and services with a clean, modern aesthetic."
            tags={['Figma','Web Design','Animation']}
            figmaLink="https://www.figma.com/proto/IrdZtQLAjY9rfp2l8kHBl2/Peterson-okopi?node-id=37-1968&t=cTwqBWedKGgbvI6D-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=37%3A1968"
            githubLink="https://github.com/yourusername/petersonokopi"
          />

          <ProjectCard 
            img={`${import.meta.env.BASE_URL}JUIC.png`}
            alt="JUICE"
            category="Game"
            title="JUIC.EZ"
            desc="A website design for a music producer with a vibrant and dynamic aesthetic, showcasing their portfolio and latest tracks."
            tags={['figma','music','Animation']}
            figmaLink="https://www.figma.com/proto/1JX4jj0inDkBuor2f7mjaY/JUIC.EZ?t=LkL3YZv6QTOOXohl-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=18-418"
            githubLink="https://github.com/yourusername/juicez"
          />

          <ProjectCard 
            img={`${import.meta.env.BASE_URL}lavender.png`}
            alt="lavender"
            category="website"
            title="Resort welcome page"
            desc="A serene and inviting resort welcome page design, featuring lush lavender fields and a calming color palette for a resort website."
            tags={['Figma','Web Design','Animation']}
            figmaLink="https://www.figma.com/proto/ncU1LUyBwuPITKZqaxjyjD/single-page-resort?node-id=24-101&p=f&t=HNHFwrNamdU7u00e-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=24%3A101"
            githubLink="https://github.com/yourusername/lavender"
          />

          <ProjectCard 
          img={`${import.meta.env.BASE_URL}closeup.png`}
          alt="closeup"
          category="website"
          title="Close-up Photography"
          desc="I designed this toothpaste concept using Closeup’s theme colors of red, black, and white to reflect freshness, boldness, and confidence. The layout combines strong contrast with clean typography, giving it a modern and energetic feel while staying true to the brand’s identity. My focus was to create a design that is clear, eye-catching, and memorable."
          tags={['Figma','branding','Animation']}
          figmaLink="https://www.figma.com/proto/b6B3alDGMnt40geoCfq8mm/Untitled?node-id=1-68&t=AxyAjaI7RkHUWhZK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
          githubLink="https://github.com/yourusername/lavender"
        />
        </div>
      </div>
    </section>
  )
}
