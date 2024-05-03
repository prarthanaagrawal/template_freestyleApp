// Function to request data from the back-end interface
function requestData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.error(error));
}

// Function to populate the "About Me" section with the user's name, background information, and interests
function populateAboutMe(data) {
  const aboutSection = document.getElementById('about');
  const aboutContent = `
    <h2>About Me</h2>
    <p>Name: ${data.name}</p>
    <p>Background: ${data.background}</p>
    <p>Interests: ${data.interests}</p>
  `;
  aboutSection.innerHTML = aboutContent;
}

// Function to populate the "Projects" section with a list of project cards
function populateProjects(data) {
  const projectsSection = document.getElementById('projects');
  let projectsContent = '<h2>Projects</h2>';
  data.forEach(project => {
    const projectCard = `
      <div class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <img src="${project.image}" alt="${project.title}">
        <a href="${project.url}">View Project</a>
      </div>
    `;
    projectsContent += projectCard;
  });
  projectsSection.innerHTML = projectsContent;
}

// Function to populate the "Skills" section with a list of skills or tags
function populateSkills(data) {
  const skillsSection = document.getElementById('skills');
  let skillsContent = '<h2>Skills</h2>';
  data.forEach(skill => {
    const skillTag = `<span class="skill-tag">${skill}</span>`;
    skillsContent += skillTag;
  });
  skillsSection.innerHTML = skillsContent;
}

// Function to populate the "Contact" section with the user's contact information
function populateContact(data) {
  const contactSection = document.getElementById('contact');
  const contactContent = `
    <h2>Contact</h2>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>
    <p>Social Media: ${data.social}</p>
  `;
  contactSection.innerHTML = contactContent;
}

// Request data from the back-end interface and populate the HTML elements with the retrieved data
requestData('/api/about')
  .then(data => populateAboutMe(data));

requestData('/api/projects')
  .then(data => populateProjects(data));

requestData('/api/skills')
  .then(data => populateSkills(data));

requestData('/api/contact')
  .then(data => populateContact(data));

// Implement optimizations for performance, such as minimizing file sizes and implementing caching strategies
// ...
