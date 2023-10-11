<script lang="ts">
	import UIcon, { UIconName } from "$lib/kit/atoms/icon/UIcon.svelte";
	import { user } from "$lib/store/user";

  $: auth = $user !== null;
</script>

<div class="flex gap-2 items-center">
  {#if auth}
    <UIcon name={UIconName.DUMPBELL} alt='Go to Account' />
    <UIcon name={UIconName.GEAR} alt='Go to Settings' />
  {:else}
    <a href="/sign-in">
      <UIcon name={UIconName.LOGIN} alt='Go to Sign In' />
    </a>
  {/if}
</div>