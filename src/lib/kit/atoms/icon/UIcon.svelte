<script lang="ts" context="module">
  export enum UIconName {
    LOGIN = "./svg/login.svg",
    DUMPBELL = "./svg/dumpbell.svg",
    GEAR = "./svg/gear.svg",
  }
</script>

<script lang="ts">
  export let name: UIconName
  export let alt: string = ''
</script>

{#await import(name + '?raw') then { default: svg }}
    <span aria-valuetext="{alt}">
      {@html svg}
    </span>
{/await}
