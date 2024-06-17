<template>
  <section class="bg-white dark:bg-gray-900 mt-16 md:mt-0">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <h1 class="text-2xl font-semibold text-black mb-6">Log in</h1>
      <div class="w-full md:mt-0 sm:max-w-md xl:p-0">
        <div class="">
          <form class="space-y-4 md:space-y-6" @submit.prevent="login">
            <div
              class="p-6 space-y-4 md:space-y-6 sm:p-8 bg-[#F5F7F6] rounded-[32px]"
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-xs ml-5 text-gray-900 dark:text-white"
                  >Email</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="form.email"
                  class="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-[62px] focus:ring-black focus:border-black block w-full p-2.5 px-5"
                  placeholder=""
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-xs ml-5 text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  v-model="form.password"
                  placeholder=""
                  class="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-[62px] focus:ring-black focus:border-black block w-full p-2.5 px-5"
                  required=""
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-1 focus:ring-black text-black text-sm"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-xs">
                    <label for="remember" class="text-black dark:text-gray-300"
                      >Remember me</label
                    >
                  </div>
                </div>
                <a
                  routerLink="/forgot-password"
                  class="text-xs font-bold text-primary-600 hover:underline dark:text-primary-500"
                  >Forgot password?</a
                >
              </div>
            </div>
            <button
              type="submit"
              class="w-full justify-center text-white bg-black font-medium rounded-[32px] text-xl px-5 py-2.5 h-[60px] items-center"
            >
              Continue
            </button>
          </form>
        </div>
        <div
          class="p-6 space-y-4 md:space-y-6 sm:p-8 bg-[#F5F7F6] rounded-[32px] dark:border w-full mt-6"
        >
          <p
            class="text-sm text-center font-light text-black dark:text-gray-400"
          >
            New to VIRGULES?
            <router-link to="/register" class="font-bold hover:underline"
              ><br />Join Us At VIRGULES for FREE Now</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import notificationsService from "@/notificationService";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/auth/login",
          this.form
        );
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        // this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
