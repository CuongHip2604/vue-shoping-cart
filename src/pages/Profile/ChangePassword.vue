<template>
  <div class="w-4/6 md:w-3/6 lg:w-2/6 xl:w-3/6 p-6 bg-white rounded-md">
    <Form @submit="onSubmit" :validation-schema="validationSchema">
      <div className="flex flex-col gap-4">
        <Field
          name="currentPassword"
          label="The current password"
          v-slot="{ errorMessage, field }"
        >
          <Input
            v-bind="field"
            name="currentPassword"
            id="currentPassword"
            label="Current password"
            type="password"
            placeholder="Enter your current password"
            :errorMessage="errorMessage"
            :disabled="isLoading"
          />
        </Field>
        <Field
          name="password"
          label="The new password"
          v-slot="{ errorMessage, field }"
        >
          <Input
            v-bind="field"
            name="password"
            id="password"
            label="New password"
            type="password"
            placeholder="Enter new password"
            :errorMessage="errorMessage"
            :disabled="isLoading"
          />
        </Field>
        <Field
          name="passwordConfirmation"
          label="The repeat password"
          v-slot="{ errorMessage, field }"
        >
          <Input
            v-bind="field"
            name="passwordConfirmation"
            id="passwordConfirmation"
            label="Repeat password"
            type="password"
            placeholder="Enter repeat password"
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
import { ref } from "vue";
import { useAuthStore } from "../../store/auth";

const isLoading = ref(false);

const authStore = useAuthStore();

const validationSchema = {
  password: "required|",
  currentPassword: "required",
  passwordConfirmation: "required|confirmed:@password",
};

const onSubmit = async (values) => {
  isLoading.value = true;
  await authStore.changePassword(values);
  isLoading.value = false;
};
</script>

<style lang="scss" scoped></style>
