<script>
	import { enhance } from "$app/forms";
</script>

<form class="flex flex-col gap-6" method="POST" use:enhance>
  <label class="label">
    <span>Email</span>
    <input class="input variant-form-material" type="email" placeholder="client@ufit.personal" />
  </label>

  <label class="label">
    <span>Password</span>
    <input class="input variant-form-material" type="password" />
  </label>

  <button type="submit" class="btn variant-filled">Sign In</button>

  <a href="/registration" class="text-center">
    Go to Sign-Up page
  </a>
</form>
