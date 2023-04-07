<template>
  <div
    class="w-ful h-full flex flex-row justify-center items-center bg-neutral-800/70"
  >
    <div class="w-5/6 md:w-4/6 lg:w-3/6 xl:w-3/6 p-6 bg-white rounded-md">
      <Form @submit="onSubmit" :validation-schema="validationSchema">
        <div className="flex flex-col gap-4">
          <Heading
            title="Welcome to Airbnb"
            subtitle="Create an account"
            center
          />
          <div class="flex flex-row gap-6">
            <Field
              name="email"
              label="The email"
              v-slot="{ errorMessage, field }"
            >
              <Input
                v-bind="field"
                id="email"
                label="Email"
                type="text"
                placeholder="Enter your email"
                :errorMessage="errorMessage"
                :disabled="isLoading"
              />
            </Field>
            <Field
              name="username"
              label="The username"
              v-slot="{ errorMessage, field }"
            >
              <Input
                v-bind="field"
                id="username"
                label="Username"
                type="text"
                placeholder="Enter your username"
                :errorMessage="errorMessage"
                :disabled="isLoading"
              />
            </Field>
          </div>
          <div class="flex flex-row gap-6">
            <Field
              name="fullname"
              label="The fullname"
              v-slot="{ errorMessage, field }"
            >
              <Input
                v-bind="field"
                id="fullname"
                label="Full name"
                type="text"
                placeholder="Enter your fullname"
                :errorMessage="errorMessage"
                :disabled="isLoading"
              />
            </Field>
            <Field
              name="password"
              label="The password"
              v-slot="{ errorMessage, field }"
            >
              <Input
                v-bind="field"
                name="password"
                id="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                :errorMessage="errorMessage"
                :disabled="isLoading"
              />
            </Field>
          </div>
          <div class="flex flex-row gap-6">
            <Field
              name="phoneNumber"
              label="The phone number"
              v-slot="{ errorMessage, field }"
            >
              <Input
                v-bind="field"
                id="phoneNumber"
                label="Phone number"
                type="text"
                placeholder="Enter your phone number"
                :errorMessage="errorMessage"
                :disabled="isLoading"
              />
            </Field>
            <Field
              name="address"
              label="The address"
              v-slot="{ errorMessage, field }"
            >
              <Input
                v-bind="field"
                id="address"
                label="Address"
                type="text"
                placeholder="Enter your address"
                :errorMessage="errorMessage"
                :disabled="isLoading"
              />
            </Field>
          </div>
          <Button
            label="Submit"
            class="mt-6"
            type="submit"
            :disabled="isLoading"
          ></Button>
          <div class="text-neutral-500 text-center mt-4 font-light">
            <div class="flex flex-row items-center gap-2 justify-center">
              <div>
                <div>Already have an account?</div>
              </div>
              <div class="text-neutral-800 cursor-pointer hover:underline">
                <router-link to="/login">Login</router-link>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field } from "vee-validate";
import Heading from "../../components/Heading.vue";
import Input from "../../components/Input.vue";
import Button from "../../components/Button.vue";
import { ref } from "vue";
import { useAuthStore } from "../../store/auth";

const authStore = useAuthStore();

const isLoading = ref(false);

const validationSchema = {
  email: "required|email",
  username: "required",
  fullname: "required",
  phoneNumber: "required",
  address: "required",
  password: "required",
};

async function onSubmit(values) {
  isLoading.value = true;
  const payload = {
    ...values,
    confirmed: "true",
    role: "1",
  };
  await authStore.register(payload);

  isLoading.value = false;
}
</script>

<style scoped></style>
