<template>
  <div>
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <span
              class="navbar-burger"
              v-bind:class="{ 'is-active': isActive }"
              @click="toggle"
              data-target="navbarMenuHeroC"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            id="navbarMenuHeroC"
            class="navbar-menu"
            v-bind:class="{ 'is-active': isActive }"
          >
            <div class="navbar-end">
              <a href="/" class="navbar-item is-active"> Home </a>
              <a href="/tokencards" class="navbar-item"> Tokens </a>
              <a class="navbar-item"> Documentation </a>
              <span class="navbar-item">
                <a class="button is-success is-inverted">
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>Download</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggle() {
      console.log(this.isActive);
      this.isActive = !this.isActive;
    },
  },
};
</script>
