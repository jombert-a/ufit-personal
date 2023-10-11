<script lang="ts">
	import UInput from "$lib/kit/atoms/input/UInput.svelte";

  export let name: string;
  export let type: string = "text";
  export let placeholder: string = "";
  export let value: string | number | null;
  export let label: string;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="label">
  <span>
    { label }
  </span>

  <UInput
    {name}
    {type}
    {placeholder}
    {value}
  />
</label>
