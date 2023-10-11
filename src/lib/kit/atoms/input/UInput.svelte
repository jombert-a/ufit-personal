<script lang="ts">
  export let name: string;
  export let type: string = "text";
  export let placeholder: string;
  export let value: string | number | null;
</script>

<input
  class="input variant-form-material"
  {name}
  {type}
  {placeholder}
  {value}
/>
