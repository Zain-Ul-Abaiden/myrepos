<template>
<form @submit.prevent="handleSubmit">
    <label>Email: </label>
    <input type="text" placeholder="Enter email here" required v-model="email" />
    <br /> <br />

    <label>Password: </label>
    <input type="password" placeholder="Enter password here" required v-model="password" />
    <br /> <br />

    <div class="submit">
            <button>Login</button>
    </div>

</form>
  </template>

<script>
export default{
    data() {
        return {
            email: '',
            password: '',
            passwordError: ''
        }
    },
    methods: {
        handleSubmit(){
          //validate password
          this.passwordError = this.password.length > 7 ? '' : 'Passwor must be at least 8 chars long'
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
}
.error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}
</style>