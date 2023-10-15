<script lang="ts">
	import UInputField from "$lib/kit/molecules/input-field/UInputField.svelte";
  import type { PageData } from "./$types";

	export let data: PageData;
</script>

<form
  class="flex flex-col gap-6 mb-6"
  method="post"
>
  <UInputField
    label="Name"
    name="name"
    placeholder=""
    type="text"
    value={data.user?.name || ""}
  />

  <button formaction="?/logout" class="btn variant-ghost-surface">
    Logout
  </button>
</form>