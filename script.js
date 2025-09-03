// JSON data for dynamic content
const portfolioData = {
  personalInfo: {
    name: "Ziad Safwat Mohamed",
    title: "Software Engineer | Flutter Developer",
    location: "Beni-suef, Egypt",
    phone: "+20 112 481 6059",
    email: "Ziadsafwataraby@gmail.com",
    github: "https://github.com/ZiadSafwat",
    objective:
      "Flutter developer specializing in building mobile, web, and desktop applications, currently a FullStack Dotnet trainee @ ITI. I have solid experience in state management, database handling, and performance optimization, and I enjoy turning complex problems into practical solutions.",
  },
  education: [
    {
      institution: "Beni Suef University",
      degree: "Bachelor of Science in Computer Science",
      period: "2019 - 2023",
      description: "Grade: Very Good, Graduation Project Grade: Excellent",
    },
  ],
  experience: [
    {
      title: "ITI intensive Program",
      subtitle: "FullStack Dotnet & Angular track - in progress",
      period: "July 2025 - Now",
      description:
        "Currently undergoing intensive training in full-stack development with .NET and Angular frameworks.",
    },
    {
      title: "Flutter Developer - Cat Price App",
      subtitle: "Google Play Store",
      period: "2023",
      description:
        "Contributed to the development of the Cat Price app available on Google Play. Implemented fixes and built the admin dashboard using Provider state management, Dio for HTTP requests, and GoRouter for navigation. Added functionality to export data to Excel sheets for business analysis.",
    },
  ],
  achievements: [
    {
      title: "Nasa Space App Cairo",
      description: "Certificate of Participation",
      image: "https://github.com/ZiadSafwat/Ziad-Safwat-Portfolio/blob/main/achievements/participant086000_JXNhyeIH0D.png?raw=true",
    },
    {
        title: "ITI Flutter Summer Training",
        description: "Compelete (60 hrs) Mobile Development using Flutter ",
        image: "https://github.com/ZiadSafwat/Ziad-Safwat-Portfolio/blob/main/achievements/DocScanner%20%D9%A2%D9%A2%E2%80%8F-%D9%A0%D9%A4%E2%80%8F-%D9%A2%D9%A0%D9%A2%D9%A5%20%D9%A1%D9%A2-%D9%A1%D9%A3%20%D9%85_4.jpg?raw=true",
      },
      {
        title: "Certificate from Innov Egypt Program",
        description: "Summer Training in Innovation",
        image: "https://github.com/ZiadSafwat/Ziad-Safwat-Portfolio/blob/main/achievements/ziscO1T47Uu_IPV9vNsg7S.png?raw=true",
      },
      {
        title: " Science & industry innovation Conference",
        description: "Award 2nd prize in Science & industry innovation Conference .",
        image: "https://github.com/ZiadSafwat/Ziad-Safwat-Portfolio/blob/main/achievements/blob_sojsxx_qmc3_UGooK586DR.jpg?raw=true",
      }
  ],
  projects: [
    {
      title: "Halal Restaurant App",
      description:
        "A cross-platform mobile application for managing ingredients, dishes, and meals, with a modern interface for customers to browse and interact with the menu.",
      technologies: ["Flutter", "PocketBase", "MVVM", "Provider"],
      githubUrl: "https://github.com/ZiadSafwat/Halal-Restaurant-App",
      demoUrl: "https://github.com/ZiadSafwat/Halal-Restaurant-App",
      image:
        "https://github.com/ZiadSafwat/Halal-Restaurant-App/blob/main/restaurant%20app/assets/imgs/halal%20icon.png?raw=true",
    },
    {
      title: "E-Commerce Mobile App",
      description:
        "A modern Flutter-based mobile application with responsive design and modular architecture. Includes clean theming, routing, reusable widgets, and responsive layout.",
      technologies: ["Flutter", "Dart", "BLoC", "Clean Architecture"],
      githubUrl: "https://github.com/ZiadSafwat/flutter-shopping-app-ui",
      demoUrl: "https://github.com/ZiadSafwat/flutter-shopping-app-ui",
      image:
        "https://github.com/ZiadSafwat/flutter-shopping-app-ui/raw/main/preview/1.png?raw=true",
    },
    {
      title: "SafwatX – Network Management Tool",
      description:
        "Cross-platform desktop application for scanning, monitoring, and controlling network devices using ARP spoofing and system-level tools.",
      technologies: [
        "Flutter",
        "Dart",
        "DI",
        "C",
        "WinPcap",
        "Provider",
        "linux",
        "windows",
      ],
      githubUrl: "https://github.com/ZiadSafwat/SafwatX",
      demoUrl: "https://ziadsafwat.github.io/SafwatX/",
      image:
        "https://repository-images.githubusercontent.com/981771188/ca5e8b7c-7093-4337-acb2-4bd3fc8302cc",
    },
    {
      title: "Parking System-Graduation Project",
      description:
        "Award 2nd prize in Science & industry innovation Conference, Designed and developed a parking system using Flutter for the mobile app and website with hardware integration (Arduino, Esp module).",
      technologies: ["Flutter", "Firebase", "Arduino", "ESP"],
      githubUrl: "https://www.facebook.com/share/p/16Nkqyihen/",
      demoUrl: "https://www.facebook.com/share/p/16Nkqyihen/",
      image:
        "https://github.com/ZiadSafwat/Ziad-Safwat-Portfolio/blob/main/achievements/blob_sojsxx_qmc3_UGooK586DR.jpg?raw=true",
    },

    {
      title: "(RPM) App",
      description:
        "A Flutter-powered non-verbal IQ test app based on Raven's Progressive Matrices, featuring question timing, auto-skip functionality, and detailed PDF reports .",
      technologies: ["Flutter", "pdf", "ravens matrices", "test"],
      githubUrl:
        "https://github.com/ZiadSafwat/ravens-progressive-matrices-app",
      demoUrl: "https://github.com/ZiadSafwat/ravens-progressive-matrices-app",
      image:
        "https://github.com/ZiadSafwat/ravens-progressive-matrices-app/blob/main/1024.png?raw=true",
    },

    {
      title: "Arabic Number Field Package",
      description:
        "A Flutter package that provides a custom text input widget for handling numbers, converting them to their equivalent Arabic representations.",
      technologies: ["Flutter", "Dart", "Package Development"],
      githubUrl: "https://github.com/ZiadSafwat/arabic_number_field",
      demoUrl: "https://github.com/ZiadSafwat/arabic_number_field",
      image:
        "https://repository-images.githubusercontent.com/909465922/a1659fd1-ac4c-43eb-9220-0351fb2306d9",
    },

    {
      title: "BriefPDF – Online PDF Generator",
      description:
        "A Flutter Web App that allows users to create, edit, and export BriefPDFs seamlessly with JavaScript integration for smooth PDF downloads.",
      technologies: ["Flutter", "JavaScript", "Pdf"],
      githubUrl: "https://github.com/ZiadSafwat/BriefPDF-Generator",
      demoUrl: "https://github.com/ZiadSafwat/BriefPDF-Generator",
      image:
        "https://github.com/ZiadSafwat/BriefPDF-Generator/blob/main/assets/logo.png?raw=true",
    },
    {
      title: "My Designs",
      description: "some of my hobby projects on blender 3d",
      technologies: ["Blender", "3d", "Designs"],
      githubUrl:
        "https://www.instagram.com/p/CYhmDfPj6d-/?igsh=cWp5ejBmendwM3lq",
      demoUrl: "https://www.instagram.com/p/CYhmDfPj6d-/?igsh=cWp5ejBmendwM3lq",
      image:
        "https://waves.pockethost.io/api/files/stories/1vey2rpv3yu7qxl/blob_duoa_rhq_zvk_qEaq2CUlfF.jpg",
    },
  ],
  skills: {
    frontend: ["Flutter", "Dart", "State Management", "UI/UX Design"],
    backend: ["PocketBase", "Firebase", "RESTful APIs", "C#"],
    other: ["Linux", "NGINX", "Git", "Arduino"],
  },
};

// Initialize the page with dynamic content
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Typed.js for the hero section
  new Typed(".typed-text", {
    strings: [
      "Software Engineer",
      "Flutter Developer",
      "Problem Solver",
      "ITI Trainee",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
  });

  // Populate experience timeline
  const timeline = document.getElementById("timeline");
  portfolioData.experience.forEach((exp, index) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item";
    timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.subtitle}</h4>
                <span class="timeline-date">${exp.period}</span>
                <p>${exp.description}</p>
            </div>
        `;
    timeline.appendChild(timelineItem);
  });



  // Populate projects grid
  const projectsGrid = document.getElementById("projects-grid");
  portfolioData.projects.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${
      project.title
    }" loading="lazy">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.technologies
                      .map((tech) => `<span class="project-tag">${tech}</span>`)
                      .join("")}
                </div>
                <div class="project-links">
                    <a href="${
                      project.githubUrl
                    }" class="project-link"><i class="fab fa-github"></i></a>
                    <a href="${
                      project.demoUrl
                    }" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        `;
    projectsGrid.appendChild(projectCard);
  });




  // Populate achievements grid
  const achievementsGrid = document.getElementById("achievements-grid");
  portfolioData.achievements.forEach((project, index) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${
      project.title
    }" loading="lazy">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            
              
            </div>
        `;
        achievementsGrid.appendChild(projectCard);
  });






  // Create particles
  createParticles();

  // Add scroll event listeners for animations
  setupScrollAnimations();

  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuToggle.querySelector("i").classList.toggle("fa-bars");
    menuToggle.querySelector("i").classList.toggle("fa-times");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.querySelector("i").classList.add("fa-bars");
      menuToggle.querySelector("i").classList.remove("fa-times");
    });
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

 // Form submission with mailto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.querySelector('#contactForm [name="name"]').value;
    const email = document.querySelector('#contactForm [name="email"]').value;
    const subject = document.querySelector('#contactForm [name="subject"]').value;
    const message = document.querySelector('#contactForm [name="message"]').value;
    
    // Construct mailto URL
    const mailtoUrl = `mailto:Ziadsafwataraby@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message)}`;
    
    // Open mailto link
    window.location.href = mailtoUrl;
});
 
});

// Create background particles
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  const particleCount = window.innerWidth < 768 ? 25 : 50; // Fewer particles on mobile

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 5 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 5;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

    particlesContainer.appendChild(particle);
  }
}

// Setup scroll animations for timeline and project items
function setupScrollAnimations() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const projectCards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  timelineItems.forEach((item) => observer.observe(item));
  projectCards.forEach((card) => observer.observe(card));
}
