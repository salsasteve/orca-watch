<template>
  <section>
    <b-table
      :data="isEmpty ? [] : data"
      :bordered="isBordered"
      :striped="isStriped"
      :narrowed="isNarrowed"
      :hoverable="isHoverable"
      :loading="isLoading"
      :focusable="isFocusable"
      :mobile-cards="hasMobileCards"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      :pagination-rounded="isPaginationRounded"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      default-sort="added"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      :page-input="hasInput"
    >
      <b-table-column v-slot="props" field="name" label="Name">{{ props.row.name }}</b-table-column>
      <b-table-column v-slot="props" field="symbol" label="Symbol">{{ props.row.symbol }}</b-table-column>
      <b-table-column v-slot="props" field="added" label="Date Added"> {{ props.row.added }} </b-table-column>

      <template #empty>
        <div class="has-text-centered">No records</div>
      </template>
    </b-table>
  </section>
</template>

<script>
import { unix } from 'dayjs'
import EthplorerService from '../../services/EthplorerService'

function transformTokenData(data) {
  data.added = unix(data.added)
  return data
}

export default {
  name: 'DegenTable',
  data() {
    return {
      data: [],
      isEmpty: false,
      isBordered: false,
      isStriped: false,
      isNarrowed: false,
      isHoverable: false,
      isFocusable: false,
      isLoading: false,
      hasMobileCards: true,
      isPaginated: true,
      isPaginationSimple: false,
      isPaginationRounded: true,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 10,
      hasInput: false,
    }
  },
  async fetch() {
    try {
      this.loading = true
      const { data } = await EthplorerService.getTokensNew()
      this.data = data.map(transformTokenData)
      console.log(this.data)
      this.loading = false
    } catch (e) {
      this.data = []
      this.loading = false
      console.log(e)
    }
  },
}
</script>

<style></style>
