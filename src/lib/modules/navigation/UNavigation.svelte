<script lang="ts">
	import { user } from "$lib/store/user";

  export let className = "";

  $: auth = $user !== null;
</script>

<nav class="{className} p-4 bg-surface-400 shadow-lg">
  App Navigation
</nav>