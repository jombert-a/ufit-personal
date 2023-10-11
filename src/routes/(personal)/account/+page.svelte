<script lang="ts">
	import { user } from "$lib/store/user";
</script>

<form class="flex flex-col gap-6">
  <label class="label">
    <span>Name</span>
    <input class="input variant-form-material" type="text" placeholder="Ugur Gencturk" value={$user?.name} />
  </label>

  <label class="label">
    <span>Age</span>
    <input class="input variant-form-material" type="number" placeholder="18" value={$user?.age}/>
  </label>

  <button type="button" class="btn variant-filled">Update</button>
  <button type="button" class="btn variant-filled">Change password</button>
  <button type="button" class="btn variant-filled">Change Email</button>

  <a href="/measurements/edit" class="btn variant-ghost-primary">Update Measurements</a>

  <button type="button" class="btn variant-ghost-surface">Exit</button>
</form>
