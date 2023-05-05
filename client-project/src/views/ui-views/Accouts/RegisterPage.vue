<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const password = ref("");
const fullName = ref("");
const email = ref("");
const address = ref("");
const phone = ref("");
const register = async () => {
  try {
    const res = await axios.post(`http://localhost:8080/api/auth/signup`, {
      username: username.value,
      password: password.value,
      fullName: fullName.value,
      email: email.value,
      address: address.value,
      phone: phone.value,
    });
    console.log(res.data);
    if (res != null) {
      router.push("/login");
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <div class="bg-img">
    <v-container class="container">
      <div class="row justify-center">
        <div class="col-md-6 col-lg-4">
          <div class="login-wrap pa-0 mt-16">
            <h2 class="mb-4 text-white mt-6 text-center">
              Register account to booking?
            </h2>
            <div class="d-flex justify-center">
              <v-form class="w-25 mt-16" @submit.prevent="register">
                <div class="form-group mt-6">
                  <input
                    class="input-login pa-3 mb-4"
                    type="text"
                    v-model="username"
                    placeholder="Username"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    class="mb-4 input-login pa-3"
                    type="password"
                    v-model="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    class="mb-4 input-login pa-3"
                    v-model="fullName"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    class="mb-4 input-login pa-3"
                    type="email"
                    v-model="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    class="mb-4 input-login pa-3"
                    v-model="address"
                    placeholder="Address"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    class="input-login pa-3"
                    v-model="phone"
                    placeholder="Phone number"
                    required
                  />
                </div>
                <div class="form-group w-100 mt-5">
                  <v-btn type="submit" class="w-100 pa-2"> Register </v-btn>
                </div>
              </v-form>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<style>
.bg-img {
  background: linear-gradient(rgba(64, 6, 97, 0.4), rgba(64, 6, 97, 0.4)),
    url(@/assets/images/bg/bg.jpg) top center / cover no-repeat;
  height: 100vh;
}
.input-login {
  border-radius: 20px !important;
  outline: none;
  width: 100%;
  color: white;
  background-color: rgba(144, 126, 154, 0.4);
}
::placeholder {
  color: white;
}
</style>
