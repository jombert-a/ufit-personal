<script lang="ts">
	import UInputField from "$lib/kit/molecules/input-field/UInputField.svelte";
  import type { ActionData, PageData } from "./$types";
  import { getToastStore } from "@skeletonlabs/skeleton";

  const toastStore = getToastStore();  

  export let form: ActionData;
  if (form?.message) {
    toastStore.trigger({
      message: form.message,
      background: "variant-filled-error",
    });
  }

  export let data: PageData;
  if (data.afterRegistration) {
    toastStore.trigger({
      message: "Successfull registration",
      background: "variant-filled-success",
    });
  }

</script>

<form class="flex flex-col gap-6" method="POST">
  <UInputField
    name="login"
    type="text"
    value=""
    placeholder="best_athlete"
    label="Login"
    status={form?.login}
  />

  <UInputField
    name="password"
    type="password"
    value=""
    label="Password"
    status={form?.password}
  />

  <button type="submit" class="btn variant-filled">Sign In</button>

  <a href="/auth/registration" class="text-center">
    Go to registration page
  </a>
</form>
