<template>
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-12">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <router-link to="/tokens/chainlink"> Chainlink </router-link>
          </article>
          <article class="tile is-child notification is-primary">
            <router-link to="/tokens/rocket-pool"> Rocket Pool </router-link>
          </article>
        </div>
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <router-link to="/tokens/ethereum"> Ethereum </router-link>
          </article>
          <article class="tile is-child notification is-primary">
            <router-link to="/tokens/pooltogether"> PoolTogether </router-link>
          </article>
        </div>
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <router-link to="/tokens/matic-network"> Polygon </router-link>
          </article>
          <article class="tile is-child notification is-primary">
            <router-link to="/tokens/alchemix"> Alchemix </router-link>
          </article>
        </div>
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-primary">
            <router-link to="/tokens/dopex"> Dopex </router-link>
          </article>
          <article class="tile is-child notification is-primary">
            <router-link to="/tokens/keep3rv1"> Keep3rV1 </router-link>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "IndexPage",
  components: {
    Card,
  },
};
</script>
