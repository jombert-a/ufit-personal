<script lang="ts">
  import UCheckbox from "$lib/kit/atoms/checkbox/UCheckbox.svelte";
  import UInputField from "$lib/kit/molecules/input-field/UInputField.svelte";

  import { getToastStore } from "@skeletonlabs/skeleton";
	import type { ActionData } from "./$types";

  const toastStore = getToastStore();  

  export let form: ActionData;
  console.log(form);
  if (form?.message) {
    toastStore.trigger({
      message: form.message,
      background: "variant-filled-error",
    });
  } 
</script>

<form class="flex flex-col gap-6" method="post">
  <UInputField
    name="login"
    type="text"
    value=""
    label="Login"
  />

  <UInputField
    name="name"
    type="text"
    value=""
    label="Name"
  />

  <UInputField
    name="password"
    type="text"
    value=""
    label="Password"
  />


  <a href="/agreement" class="text-xl underline">UFIT-Personal Agreement</a>
  <UCheckbox
    name="agreement"
    value={true}
    text="By checking this box, you are agreeing to our terms of service"
  />

  <button type="submit" class="btn variant-filled">Sign Up</button>

  <a href="/auth/login" class="text-center">
    Go to login page
  </a>
</form>
