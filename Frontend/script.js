
document.getElementById("loginBtn").addEventListener("click", function () {
    // Redirect to the login page (make sure login.html exists)
    window.location.href = "user.html";
  });
    function goToUserDetails() {
      window.location.href = "userdetails.html";
    }
    function scrollSlider(direction) {
      const slider = document.getElementById('cardSlider');
      const scrollAmount = 320;
      slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
    function scrollSlider(direction) {
      const slider = document.getElementById('cardSlider');
      const scrollAmount = 320;
      slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
    
    
    function openBlog(url) {
      window.location.href = url;
    }
    