<script lang="ts">
	import type { PageData } from "./$types";
	import { user } from "$lib/store/user";

  export let data: PageData;
  $user = data.user
</script>

<slot />