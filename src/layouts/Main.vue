<script>
export default {};
</script>

<template>
  <div class="container">
    <ul class="nav">
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          to="/"
        >Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink
          class="nav-link"
          to="/sobre"
        >Sobre</RouterLink>
      </li>
    </ul>
    <div class="jumbotron">
      <RouterView />
    </div>
  </div>
</template>
