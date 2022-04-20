<template>
  <div>
    <b-taglist>
      <b-tag type="is-primary" size="is-large">Degen Dashboard</b-tag>
    </b-taglist>
    <DegenTable />
  </div>
</template>

<script>
import DegenTable from '../../components/table/Degen'

export default {
  components: {
    DegenTable,
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
}
</script>

<style></style>
