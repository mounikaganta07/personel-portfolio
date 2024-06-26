// Assuming you have a 'Resume' button with class 'btn'
document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.querySelector('.btn');
  
    // Add click event listener to open PDF in a new tab
    resumeButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior (opening in the same tab)
      
      const pdfUrl = this.getAttribute('href');
      window.open(pdfUrl, '_blank'); // Open PDF in a new tab/window
    });
  });
  