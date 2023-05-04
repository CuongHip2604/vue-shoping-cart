<template>
  <div class="w-4/6 md:w-3/6 lg:w-2/6 xl:w-4/6 p-6 bg-white rounded-md">
    <Form @submit="onSubmit" :validation-schema="validationSchema">
      <div className="flex flex-col gap-4">
        <div class="grid grid-cols-2 gap-4">
          <Field
            name="email"
            label="The email"
            v-slot="{ errorMessage, field }"
            v-model="formState.email"
          >
            <Input
              v-bind="field"
              id="email"
              label="Email"
              type="text"
              placeholder="Enter your email"
              :errorMessage="errorMessage"
              disabled
            />
          </Field>
          <Field
            name="username"
            label="The username"
            v-slot="{ errorMessage, field }"
            v-model="formState.username"
          >
            <Input
              v-bind="field"
              id="username"
              label="Username"
              type="text"
              placeholder="Enter your username"
              :errorMessage="errorMessage"
              disabled
            />
          </Field>
          <Field
            name="fullname"
            label="The fullname"
            v-slot="{ errorMessage, field }"
            v-model="formState.fullname"
          >
            <Input
              v-bind="field"
              name="fullname"
              id="fullname"
              label="Full name"
              type="text"
              placeholder="Enter your full name"
              :errorMessage="errorMessage"
              :disabled="isLoading"
            />
          </Field>
          <Field
            name="phoneNumber"
            label="The phone number"
            v-slot="{ errorMessage, field }"
            v-model="formState.phoneNumber"
          >
            <Input
              v-bind="field"
              name="phoneNumber"
              id="phoneNumber"
              label="Phone number"
              type="number"
              placeholder="Enter your phone number"
              :errorMessage="errorMessage"
              :disabled="isLoading"
            />
          </Field>
        </div>
        <Field
          name="address"
          label="The address"
          v-slot="{ errorMessage, field }"
          v-model="formState.address"
        >
          <Input
            v-bind="field"
            name="address"
            id="address"
            label="Address"
            type="text"
            placeholder="Enter your address"
            :errorMessage="errorMessage"
            :disabled="isLoading"
          />
        </Field>
        <Button
          label="Update"
          class="mt-6"
          type="submit"
          :disabled="isLoading"
        ></Button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field } from "vee-validate";
import Input from "../../components/Input.vue";
import Button from "../../components/Button.vue";
import { computed, onMounted, ref } from "vue";
import { useAuthStore } from "../../store/auth";

const authStore = useAuthStore();

const isLoading = ref(false);
const formState = ref({
  email: "",
  username: "",
  fullname: "",
  address: "",
  phoneNumber: "",
});

const validationSchema = {
  email: "required|email",
  username: "required",
  fullname: "required",
  address: "required",
  phoneNumber: "required|integer|min:10|max:10",
};

const userProfile = computed(() => authStore.$state.userProfile);

onMounted(() => {
  if (userProfile) {
    formState.value = {
      email: userProfile.value.email,
      username: userProfile.value.username,
      fullname: userProfile.value.fullname,
      phoneNumber: userProfile.value.phoneNumber,
      address: userProfile.value.address,
    };
  }
});

const onSubmit = async (values) => {
  isLoading.value = true;
  await authStore.updateProfile(userProfile.value.id, values);
  isLoading.value = false;
};
</script>

<style lang="scss" scoped></style>
