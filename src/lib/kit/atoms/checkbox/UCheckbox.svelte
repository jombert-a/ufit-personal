<script lang="ts">
  export let name: string;
  export let value: boolean;
  export let text: string;
</script>

<label class="flex items-center space-x-2">
  <input class="checkbox" type="checkbox" checked={value} name={name} />
  <p>{ text }</p>
</label>