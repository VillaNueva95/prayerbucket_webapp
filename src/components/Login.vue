<template>
  <div class="page">
    <div class="container bg-white p-4">
      <img src="@/assets/prayerbucket.png" alt="PrayerBucket Logo" class="logo">
      <form @submit.prevent="Login"> 
        <div class="form-group mb-3">
          <input type="email" v-model="email" placeholder="Email" class="form-control rounded-pill" />
        </div>
        <div class="form-group mb-3">
          <input type="password" v-model="password" placeholder="Password" class="form-control rounded-pill" />
        </div>
        <button type="submit" class="btn custom-btn btn-block rounded-pill">Login</button>
      </form>
      <p class="mt-3 text-center text-muted">
        Don't have an account?
        <router-link to="/register" class="text-primary">Register here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async Login() {
      if (this.email.trim() === '' || this.password.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }

      const loginData = {
        email: this.email,
        password: this.password
      };

      try {
        const response = await fetch('http://127.0.0.1:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        });

        const result = await response.json();
        if (response.ok) {
          alert('Login successful!');
          this.$router.push('/home');
        } else {
          alert('Error: ' + result.error);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error logging in');
      }
    }
  }
};
</script>

<style scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 400px;
  border: 2px solid rgb(211, 211, 211);
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.logo {
  display: block;
  margin: 0 auto 40px auto; /* Center align and add 20px margin at the bottom */
}

.form-control {
  border-radius: 20px;
  padding: 10px;
  font-size: 12px;
}

.form-control:focus {
  border-color: #4f46e5;
  box-shadow: 0 0 0 0.2rem rgba(79, 70, 229, 0.25);
}

.custom-btn {
  background-color: #5F31E2;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
}

.custom-btn:hover {
  background-color: #4A25B6;
}

.profile-pic-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.profile-pic-label {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
}
</style>
