<template>
  <form @submit.prevent="handleSubmit">
    <label>Name:</label>
    <input
      type="text"
      placeholder="Enter name here"
      required
      v-model="form.name"
    />

    <label>Email:</label>
    <input
      type="email"
      placeholder="Enter email here"
      required
      v-model="form.email"
    />

    <label>Password:</label>
    <input
      type="password"
      placeholder="Enter password here"
      required
      v-model="form.password"
    />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Confirm Password:</label>
    <input
      type="password"
      placeholder="Enter again password"
      required
      v-model="form.confirmPassword"
    />

    <!-- <div class="submit">
            <button @click="">Create an Account</button>
        </div> -->
    <router-link to="/login">
      <button class="submit">Submit</button>
    </router-link>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "SignUp",
      props: {
        msg: String,
      },
      form: {
        name: "",
        email: "",
        password: "",
        passwordError: "",
        confrimPassword: "",
      },
      error: [],
    };
  },
  methods: {
    handleSubmit() {
      //validate password
      this.passwordError =
        this.password.length > 7
          ? ""
          : "Password must be at least 8 chars long";
    
      this.error = [];
      const usernamePattern =
        /^(?=.*[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"'])\S+$/;
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-='|"']{8,}$/;
      // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (this.name !== "" && !usernamePattern.test(this.name)) {
        this.error.push("Invalid Name");
      } else if (this.password !== "" && !passwordPattern.test(this.password)) {
        this.error.push("Invalid Password");
      } else if (this.password !== this.confrimPassword) {
        this.error.push("Password Does not match");
      }
      // else if (obj.email !== "" && !emailPattern.test(obj.email)) {
      // this.error.push("Invalid Email");
      // }

  }
}
}
</script>
<style scoped>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
  margin: 25px 0 15px;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
