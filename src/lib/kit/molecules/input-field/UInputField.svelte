<script lang="ts">
	import UErrorHint from "$lib/kit/atoms/error-hint/UErrorHint.svelte";
import UInput from "$lib/kit/atoms/input/UInput.svelte";
	import type { PropertyStatus } from "$lib/models/ServerError/types";

  export let name: string;
  export let type: string = "text";
  export let placeholder: string = "";
  export let value: string | number | null;
  export let label: string;
  export let fieldClass = "";
  export let status: PropertyStatus | undefined = undefined;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="label {fieldClass}">
  <span>
    { label }
  </span>

  <UInput
    {name}
    {type}
    {placeholder}
    {value}
  />

  {#if status && status.error && status.message}
    <div class="mt-2">
      <UErrorHint error={status.message} />
    </div>
  {/if}
</label>
