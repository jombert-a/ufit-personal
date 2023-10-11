<script lang="ts">
	import UHeader from "$lib/modules/header/UHeader.svelte";
  import "$lib/design/main.css";
	import UNavigation from "$lib/modules/navigation/UNavigation.svelte";
</script>

<UHeader />
<main class="u-layout p-4">
  <slot />
</main>
<UNavigation className="sticky bottom-0" />

<style lang="postcss">
  :global(html, body), .u-layout {
    height: 100%;
    background-color: white;
  }

  :global(body) {
    min-height: 100vh;
  }

  .u-layout {
    display: flex;
    flex-direction: column;
  }
</style>