const users = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      location: "New York, USA",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "David Smith",
      email: "david.smith@example.com",
      location: "London, UK",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Emma Williams",
      email: "emma.williams@example.com",
      location: "Toronto, Canada",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];
  
  function loadUser() {
    const user = users[Math.floor(Math.random() * users.length)];
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;
    document.getElementById("userLocation").textContent = user.location;
    document.getElementById("userAvatar").src = user.avatar;
  }
  
  window.onload = loadUser;
  