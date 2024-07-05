<template>
    <div class="home-page">
      <aside class="sidebar">
        <div class="profile-section">
          <div class="profile-picture">
            <img alt="Profile Picture" src="@/assets/avatar.jpg" />
          </div>
          <div class="welcome">
            <div class="text-wrapper-2">Welcome,</div>
            <div class="text-wrapper-3">Jessica Cruz</div>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <router-link to="/home/scriptures"> <i class="fas fa-book"></i> Scriptures</router-link>
            </li>
            <li>
              <router-link to="/home/insights"> <i class="fas fa-lightbulb"></i> Insights</router-link>
            </li>
            <li>
              <router-link to="/home/prayers"> <i class="fas fa-pray"></i> Prayer</router-link>
            </li>
            <li>
              <router-link to="/home/events"> <i class="fas fa-calendar-alt"></i> Events</router-link>
            </li>
            <li>
              <router-link to="/home/groups"> <i class="fas fa-comments"></i> Groups</router-link>
            </li>
            <li>
              <router-link to="/home/settings"> <i class="fas fa-cog"></i> Settings</router-link>
            </li>
            <li>
              <router-link to="/home/logout"> <i class="fas fa-sign-out-alt"></i> Logout</router-link>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </template>
  
  
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
  .home-page {
    display: flex;
    height: 100vh;
    width: 100vw;
  }
  
  .sidebar {
    width: 180px;
    background-color: #5F31E2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  
  .profile-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  
  .profile-picture {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 20px;
    overflow: hidden;
  }
  
  .profile-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .welcome {
    text-align: center;
    color: #fff;
    font-family: 'Poppins', sans-serif;
  }
  
  .text-wrapper-2 {
    font-size: 14px;
    opacity: 0.8;
  }
  
  .text-wrapper-3 {
    font-size: 16px;
    font-weight: 600;
  }
  
  .sidebar nav ul {
    list-style: none;
    padding: 0;
    width: 100%;
  }
  
  .sidebar nav ul li {
    margin-bottom: 10px;
  }
  
  .sidebar nav ul li a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 50px;
    transition: background 0.3s;
    width: 100%;
    box-sizing: border-box;
  }
  
  .sidebar nav ul li a i {
    margin-right: 10px;
  }
  
  .sidebar nav ul li a:hover {
    background-color: #4A25B6;
  }
  
  .main-content {
    flex: 1;
    background-color: #fff;
    padding: 20px;
    overflow-y: auto;
  }
  </style>
  
  