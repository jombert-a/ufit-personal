<script lang="ts">
	import UInputField from "$lib/kit/molecules/input-field/UInputField.svelte";
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div>
  <h1 class="text-xl mb-4">
    Body Measurements
  </h1>
  
  <form class="flex flex-col gap-2">
    <UInputField
      label="Weight"
      name="weight"
      type="number"
      value={data.measurements.weight}
    />

    <UInputField
      label="Height"
      name="height"
      type="number"
      value={data.measurements.height}
    />

    <UInputField
      label="Waist Circumference"
      name="waist"
      type="number"
      value={data.measurements.waist}
    />

    <button class="btn variant-filled-primary mt-4">
      Update your measurements
    </button>

    <button class="btn variant-filled-secondary">
      Watch progress
    </button>
  </form>
</div>
