<template>
  <section class="bg-white">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <h1 class="text-2xl font-semibold text-black dark:text-white mb-6">
        Join Us At VIRGULES Now!
      </h1>

      <div class="w-full dark:border md:mt-0 sm:max-w-md xl:p-0 border-none">
        <div class="space-y-4 md:space-y-6">
          <div>
            <form class="space-y-4 md:space-y-6" @submit.prevent="register">
              <div
                class="p-6 space-y-4 md:space-y-6 sm:p-8 bg-[#F5F7F6] rounded-[32px]"
              >
                <div>
                  <label
                    for="firstName"
                    class="block mb-2 text-xs ml-5 font-medium text-gray-900"
                    >First Name</label
                  >
                  <input
                    type="text"
                    id="firstName"
                    v-model="form.first_name"
                    name="firstName"
                    class="bg-transparent border border-gray-300 text-gray-900 sm:text-xs rounded-[62px] focus:ring-black focus:border-black block w-full p-2.5 px-5"
                    required
                  />
                </div>
                <div>
                  <label
                    for="lastName"
                    class="block mb-2 text-xs ml-5 font-medium text-gray-900"
                    >Last Name</label
                  >
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    v-model="form.last_name"
                    class="bg-transparent border border-gray-300 text-gray-900 sm:text-xs rounded-[62px] focus:ring-black focus:border-black block w-full p-2.5 px-5"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-xs ml-5 font-medium text-gray-900"
                    >Email</label
                  >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    v-model="form.email"
                    class="bg-transparent border border-gray-300 text-gray-900 sm:text-xs rounded-[62px] focus:ring-black focus:border-black block w-full p-2.5 px-5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-xs ml-5 font-medium text-gray-900"
                    >Password</label
                  >
                  <input
                    type="password"
                    name="password"
                    id="password"
                    v-model="form.password"
                    placeholder="••••••••"
                    class="bg-transparent border border-gray-300 text-gray-900 sm:text-xs rounded-[62px] focus:ring-black focus:border-black block w-full p-2.5 px-5"
                    required=""
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-1 focus:ring-black text-black text-sm"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-xs">
                    <label for="terms" class="font-light text-gray-500"
                      >I accept the
                      <a class="font-medium text-black hover:underline" href="#"
                        >Terms and Conditions</a
                      ></label
                    >
                  </div>
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
            class="p-6 space-y-4 md:space-y-6 sm:p-8 text-center bg-[#F5F7F6] rounded-[32px] dark:border w-full mt-6"
          >
            <p class="text-sm font-light text-gray-500">
                Already a member? <br /><router-link class="font-bold text-black hover:underline" to="/login">Login</router-link>
                    
                   
                
                
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { defineComponent } from 'vue';
import notificationsService from '../notificationService';


export default {
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/auth/register",
          this.form
        );
        notificationsService.show([response.data.message],"success" );
        this.form = {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        };
    
      } catch (error) {
        if (error.response) {
            

          this.errors = error.response.data;
          notificationsService.show([error.response.data.error],"error" );
        }
      }
    },
  },
};
</script>
