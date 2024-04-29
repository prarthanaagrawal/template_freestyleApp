// Function to make requests to the back-end interface and retrieve parameters for education, work experience, projects, and skills
function fetchData() {
  // Make API requests and retrieve data
  // Return the received parameters
  return {
    education: [
      'Education detail 1',
      'Education detail 2',
      'Education detail 3'
    ],
    workExperience: [
      'Work experience detail 1',
      'Work experience detail 2',
      'Work experience detail 3'
    ],
    projects: [
      'Project 1',
      'Project 2',
      'Project 3'
    ],
    skills: [
      'Skill 1',
      'Skill 2',
      'Skill 3'
    ]
  };
}

// Function to display the received parameters in the respective sections of the portfolio website
function displayData(education, workExperience, projects, skills) {
  const educationList = document.getElementById('education-list');
  const workExperienceList = document.getElementById('work-experience-list');
  const projectsList = document.getElementById('projects-list');
  const skillsList = document.getElementById('skills-list');

  education.forEach(detail => {
    const li = document.createElement('li');
    li.textContent = detail;
    educationList.appendChild(li);
  });

  workExperience.forEach(detail => {
    const li = document.createElement('li');
    li.textContent = detail;
    workExperienceList.appendChild(li);
  });

  projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project;
    projectsList.appendChild(li);
  });

  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });
}

// Call the fetchData function to retrieve data from the back-end interface
const data = fetchData();

// Call the displayData function to display the received data in the portfolio website
displayData(data.education, data.workExperience, data.projects, data.skills);
