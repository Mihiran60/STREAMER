 // JavaScript to toggle the active class
 const links = document.querySelectorAll('.link-item');
    
 links.forEach(link => {
   link.addEventListener('click', function() {
     // Remove active class from all links
     links.forEach(link => link.classList.remove('active'));
     // Add active class to the clicked link
     this.classList.add('active');
   });
 });