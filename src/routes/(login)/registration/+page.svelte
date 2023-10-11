<form class="flex flex-col gap-6">
  <label class="label">
    <span>Name</span>
    <input class="input variant-form-material" type="text" placeholder="Ugut Gencturk" />
  </label>

  <label class="label">
    <span>Email</span>
    <input class="input variant-form-material" type="email" placeholder="client@ufit.personal" />
  </label>

  <label class="label">
    <span>Password</span>
    <input class="input variant-form-material" type="password" />
  </label>

  <a href="/agreement" class="text-xl underline">UFIT-Personal Agreement</a>
  <label class="flex items-center space-x-2">
		<input class="checkbox" type="checkbox" checked />
		<p>By checking this box, you are agreeing to our terms of service</p>
	</label>

  <button type="button" class="btn variant-filled">Sign Up</button>

  <a href="/sign-in" class="text-center">
    Go to Sign-In page
  </a>
</form>
