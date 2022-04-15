<template>
  <div>
    <app-nav-bar />
    <nuxt />
  </div>
</template>

<script>
import AppNavBar from '@/components/layout/AppNavBar.vue'
export default {
  name: 'DefaultLayout',
  components: {
    AppNavBar,
  },
}
</script>
