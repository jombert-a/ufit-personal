<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<ol class="list">
  {#each data.sessions as session, i (session.id)}
    <li>
      <span class="badge-icon p-4 variant-soft-secondary">
        {i + 1}
      </span>

      <span class="flex-auto">
        { new Date(session.date).toLocaleString() }
      </span>
    </li>
  {/each}
</ol>