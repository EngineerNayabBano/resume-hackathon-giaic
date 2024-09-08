// main.ts

// Function to initialize event listeners
function initializeEventListeners(): void {
    const contactItems = document.querySelectorAll('.info-section span');
  
    contactItems.forEach(item => {
      item.addEventListener('click', () => {
        alert(`You clicked on: ${item.textContent}`);
      });
    });
  }
  
  // Function to update skill bars dynamically
  function updateSkillBars(): void {
    const skillbars = document.querySelectorAll('.skillbar');
  
    skillbars.forEach(skillbar => {
      const length = skillbar.getAttribute('style')?.match(/--pgbar-length:\s*([\d.]+)%/);
      if (length) {
        const percent = parseFloat(length[1]);
        // skillbar.style.width = `${percent}%`;
      }
    });
  }
  
  // Function to initialize the page
  function init(): void {
    initializeEventListeners();
    updateSkillBars();
  }
  
  // Call the init function once the document is ready
  document.addEventListener('DOMContentLoaded', init);
  