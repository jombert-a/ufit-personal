<script lang="ts">
  import "$lib/design/main.css";
  import { Toast, initializeStores } from '@skeletonlabs/skeleton';

  initializeStores();
</script>

<Toast />
<main class="u-layout p-4">
  <slot />
</main>

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