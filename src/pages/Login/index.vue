<template>
  <div
    class="w-ful h-full flex flex-row justify-center items-center bg-neutral-800/70"
  >
    <div class="w-4/6 md:w-3/6 lg:w-2/6 xl:w-2/6 p-6 bg-white rounded-md">
      <Form @submit="onSubmit" :validation-schema="validationSchema">
        <div className="flex flex-col gap-4">
          <Heading
            title="Welcome to Airbnb"
            subtitle="Login your account"
            center
          />
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
          <Button
            label="Submit"
            class="mt-6"
            type="submit"
            :disabled="isLoading"
          ></Button>
          <div class="text-neutral-500 text-center mt-4 font-light">
            <div class="flex flex-row items-center gap-2 justify-center">
              <div>
                <div>Don't have an account?</div>
              </div>
              <div class="text-neutral-800 cursor-pointer hover:underline">
                <router-link to="/register">Register</router-link>
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

const store = useAuthStore();

const isLoading = ref(false);

const validationSchema = {
  email: "required|email",
  password: "required",
};

async function onSubmit(values) {
  isLoading.value = true;
  const payload = {
    identifier: values.email,
    password: values.password,
  };

  await store.login(payload);
  isLoading.value = false;
}
</script>

<style scoped></style>
