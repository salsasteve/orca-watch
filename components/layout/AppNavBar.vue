<template>
  <b-navbar wrapper-class="container">
    <template #end>
      <b-navbar-item tag="nuxt-link" to="/">Home</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/tokens">Tokens</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/degen">Degen</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/address">Address</b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'AppNavBar',
}
</script>
