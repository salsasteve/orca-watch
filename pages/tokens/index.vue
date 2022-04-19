<template>
  <div class="container">
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-12">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <nuxt-link to="/tokens/chainlink"> Chainlink </nuxt-link>
              </article>
              <article class="tile is-child notification is-primary">
                <nuxt-link to="/tokens/rocket-pool"> Rocket Pool </nuxt-link>
              </article>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <nuxt-link to="/tokens/universe-xyz"> Universe.xyz </nuxt-link>
              </article>
              <article class="tile is-child notification is-primary">
                <nuxt-link to="/tokens/pooltogether"> PoolTogether </nuxt-link>
              </article>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <nuxt-link to="/tokens/matic-network"> Polygon </nuxt-link>
              </article>
              <article class="tile is-child notification is-primary">
                <nuxt-link to="/tokens/alchemix"> Alchemix </nuxt-link>
              </article>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <nuxt-link to="/tokens/dopex"> Dopex </nuxt-link>
              </article>
              <article class="tile is-child notification is-primary">
                <nuxt-link to="/tokens/keep3rv1"> Keep3rV1 </nuxt-link>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'IndexPage',
  components: {
    Card,
  },
}
</script>
