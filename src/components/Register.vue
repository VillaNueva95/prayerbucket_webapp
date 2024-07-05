<template>
  <div class="page">
    <div class="container bg-white p-4">
      <img src="@/assets/prayerbucket.png" alt="PrayerBucket Logo" class="logo">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="member-tab" data-bs-toggle="tab" data-bs-target="#member" type="button" role="tab" aria-controls="member" aria-selected="true">Members</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="organization-tab" data-bs-toggle="tab" data-bs-target="#organization" type="button" role="tab" aria-controls="organization" aria-selected="false">Organizations</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="member" role="tabpanel" aria-labelledby="member-tab">
          <h2 class="text-center mb-4"></h2>
          <form @submit.prevent="signUp">
            <div class="form-group mb-3 text-center">
              <label class="profile-pic-label">
                <input type="file" @change="onFileChange" class="form-control-file" />
                <div class="profile-pic-circle">
                  <img v-if="profilePictureUrl" :src="profilePictureUrl" alt="Profile Picture" class="profile-pic-preview" />
                </div>
              </label>
            </div>
            <div class="row mb-3">
              <div class="col">
                <input type="text" v-model="first_name" placeholder="First Name" class="form-control rounded-pill" />
              </div>
              <div class="col">
                <input type="text" v-model="last_name" placeholder="Last Name" class="form-control rounded-pill" />
              </div>
            </div>
            <div class="form-group mb-3">
              <input type="text" v-model="organizationID" placeholder="Organization ID" class="form-control rounded-pill" />
            </div>
            <div class="form-group mb-3">
              <input type="email" v-model="email" placeholder="Email" class="form-control rounded-pill" />
            </div>
            <div class="form-group mb-3">
              <input type="password" v-model="password" placeholder="Password" class="form-control rounded-pill" />
            </div>
            <div class="form-group mb-3">
              <input type="password" v-model="confirmPassword" placeholder="Confirm Password" class="form-control rounded-pill" />
            </div>
            <button type="submit" class="btn custom-btn btn-block rounded-pill">Sign Up</button>
          </form>
        </div>
        <div class="tab-pane fade" id="organization" role="tabpanel" aria-labelledby="organization-tab">
          <h2 class="text-center mb-4"></h2>
          <form @submit.prevent="signUpOrganization">
            <div class="form-group mb-3 text-center">
              <label class="profile-pic-label">
                <input type="file" @change="onFileChange" class="form-control-file" />
                <div class="profile-pic-circle">
                  <img v-if="profilePictureUrl" :src="profilePictureUrl" alt="Profile Picture" class="profile-pic-preview" />
                </div>
              </label>
            </div>
            <div class="row mb-3">
              <div class="col">
                <input type="text" v-model="orgName" placeholder="Organization Name" class="form-control rounded-pill" />
              </div>
              <div class="col">
                <select v-model="organizationType" class="form-control rounded-pill">
                  <option disabled value="">Organization Type</option>
                  <option value="Church">Church</option>
                  <option value="Mosque">Mosque</option>
                  <option value="Synagogue">Synagogue</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-3">
              <input type="email" v-model="email" placeholder="Email" class="form-control rounded-pill" />
            </div>
            <div class="form-group mb-3">
              <input type="password" v-model="password" placeholder="Password" class="form-control rounded-pill" />
            </div>
            <div class="form-group mb-3">
              <input type="password" v-model="confirmPassword" placeholder="Confirm Password" class="form-control rounded-pill" />
            </div>
            <div class="form-group mb-3">
              <select v-model="languageType" class="form-control rounded-pill">
                <option disabled value="">Language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Arabic">Arabic</option>
                <option value="French">French</option>
                <option value="Italian">Italian</option>
                <option value="German">German</option>
              </select>
            </div>
            <div class="form-group mb-3">
              <select v-model="locationType" class="form-control rounded-pill">
                <option disabled value="">Location</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
            <button type="submit" class="btn custom-btn btn-block rounded-pill">Sign Up</button>
          </form>
        </div>
      </div>
      <p class="mt-3 text-center text-muted">
        Already have an account?
        <router-link to="/login" class="text-primary">Login here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      first_name: '',
      last_name: '',
      organizationID: '',
      orgName: '',
      organizationType: '',
      languageType: '',
      locationType: '',
      email: '',
      password: '',
      confirmPassword: '',
      profilePicture: null,
      profilePictureUrl: null
    };
  },
  methods: {
    async signUp() {
      if (this.first_name.trim() === '' || this.last_name.trim() === '' || this.email.trim() === '' || this.password.trim() === '' || this.confirmPassword.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      const formData = new FormData();
      formData.append('first_name', this.first_name);
      formData.append('last_name', this.last_name);
      formData.append('organizationID', this.organizationID);
      formData.append('email', this.email);
      formData.append('password', this.password);
      if (this.profilePicture) {
        formData.append('profile_picture', this.profilePicture);
      }

      try {
        const response = await fetch('http://127.0.0.1:5000/add-user', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();
        if (response.ok) {
          alert('Sign up successful!');
          this.$router.push('/login'); // Redirect to login
        } else {
          console.log(result);
          alert('Error: ' + result.error);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error creating user');
      }
    },
    async signUpOrganization() {
      if (this.orgName.trim() === '' || this.organizationType.trim() === '' || this.email.trim() === '' || this.password.trim() === '' || this.confirmPassword.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      const formData = new FormData();
      formData.append('organization_name', this.orgName);
      formData.append('organization_type', this.organizationType);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('language', this.languageType);
      formData.append('location', this.locationType);
      if (this.profilePicture) {
        formData.append('profile_picture', this.profilePicture);
      }

      try {
        const response = await fetch('http://127.0.0.1:5000/add-organization', {
          method: 'POST',
          body: formData
        });

        const result = await response.json();
        if (response.ok) {
          alert('Organization sign up successful!');
          this.$router.push('/login'); // Redirect to login
        } else {
          console.log(result);
          alert('Error: ' + result.error);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error creating organization');
      }
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.profilePicture = file;
        this.profilePictureUrl = URL.createObjectURL(file);
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
