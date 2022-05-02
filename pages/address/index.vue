/* eslint-disable vue/valid-v-for */
<template>
  <section class="container">
    <b-field label="Input address to check chain">
      <b-input v-model="address" placeholder="Address" rounded></b-input>
    </b-field>
    <b-taglist>
      <template v-for="tag in selectedTags">
        <b-tag type="is-info is-light" rounded>{{ tag }}</b-tag>
      </template>
    </b-taglist>

    <b-button rounded @click="checkAddress">Submit</b-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      address: '',
      selectedTags: [],
    }
  },
  head() {
    return {
      title: this.$route.params.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Best place for Blockchain Analytics',
        },
      ],
    }
  },
  methods: {
    checkAddress() {
      fetch('https://yakkabot.com/helper/isAddressValid/' + this.address)
        .then((res) => res.json())
        .then((json) => (this.selectedTags = json.validTokens))
    },
  },
}
</script>

<style></style>
