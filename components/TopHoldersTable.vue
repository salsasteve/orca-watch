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
      default-sort="share"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
      :page-input="hasInput"
    >
      <b-table-column field="address" label="Address" v-slot="props">
        {{ props.row.address }}
      </b-table-column>

      <b-table-column field="balance" label="Balance" v-slot="props">
        {{ props.row.balance }}
      </b-table-column>

      <b-table-column field="share" label="Share" v-slot="props"> {{ props.row.share }}% </b-table-column>

      <template #empty>
        <div class="has-text-centered">No records</div>
      </template>
    </b-table>
  </section>
</template>

<script>
import EthplorerService from '../services/EthplorerService'
import CoinGeckoService from '../services/CoinGeckoService'

export default {
  name: 'TopHoldersTable',
  props: {
    tokenId: String,
  },
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
    const limit = 100
    try {
      this.loading = true
      console.log('1')
      const coinData = await CoinGeckoService.getCoinData(this.tokenId)
      const contractAddress = coinData.data.platforms.ethereum
      const { data } = await EthplorerService.getTopTokenHolders(contractAddress, limit)
      console.log('2')
      this.data = data.holders
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
