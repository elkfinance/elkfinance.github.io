<template>
  <div class="tokenomics flex flex--y-center">
    <div class="tokenomics__stats flex flex--x-c">
      <p class="tokenomics__title fs--24 fw--700 fc--green pos--rel">
        ELK Tokenomics
      </p>
      <div class="tokenomics__stat-data fs--18 flex flex--x-center flex--r-nowrap">
        <div class="tokenomics__stat-name flex">
          <p>Total ELK Supply:</p>
          <p>Total ELK Issued:</p>
          <p>Market Cap:</p>
        </div>
        <div class="tokenomics__stat-value flex fw--700">
          <p>{{ totalElkSupply.value.toLocaleString() }}</p>
          <p>{{ totalElkIssued.value.toLocaleString() }}</p>
          <p>{{ marketCap.value.toLocaleString() }} USD</p>
        </div>
      </div>
    </div>
    <div class="tokenomics__chart flex flex--x-center flex--y-center">
      <div class="tokenomics__chart-visual pos--rel">
        <img class="tokenomics__chart-image" src="~/static/piechart.png" alt="">
        <div class="tokenomics__chart-title pos--abs fs--20">
          <span class="tokenomics__chart-altTitle fs--40 fw--700">ELK</span>
          distribution
        </div>
      </div>
      <div class="tokenomics__chart-key flex">
        <div v-for="(label, i) in labels"
             :key="label + i"
             class="tokenomics__chart-label flex pos--rel">
          <p class="tokenomics__chart-label-title">{{ label.title }} - <span
              class="tokenomics__chart-label-value fw--700">{{ label.value }}</span></p>
          <p class="tokenomics__chart-label-subtitle fs--10">{{ label.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseTokenomics',
  data() {
    return {
      totalElkSupply: {
        value: 0
      },
      totalElkIssued: {
        value: 0
      },
      marketCap: {
        value: 0
      },
      labels: [
        {
          title: 'Community Fund',
          subtitle: '',
          value: '20M'
        },
        {
          title: 'Yield Farming Rewards',
          subtitle: '4 years',
          value: '10M'
        },
        {
          title: 'Insurance',
          subtitle: '(e.g. Impermanent Loss Protection)',
          value: '10M'
        },
        {
          title: 'Team & Advisors',
          subtitle: '',
          value: '2M'
        },
        {
          title: 'Airdrops',
          subtitle: '',
          value: '424K'
        }
      ]
    }
  },
  async fetch(){
    const axios = this.$axios
    const circulationApi = await axios.get('https://api.elk.finance/v1/info/circulation')
    const elknetApi = await axios.get('https://api.elk.finance/v1/info/elknet')

    // todo: get data from API

    const response = await this.$axios({
      url: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-avax",
      method: 'POST',
      data: {
        query: `
            query {
                tokens(first: 1, where: {symbol: "ELK"}) {
                    id,
                    symbol,
                    name,
                    decimals,
                    tokenDayData(orderBy:date, orderDirection:desc, first:1){
                        date,
                        priceUSD
                    }
                }
            }
        `
      }
    }, {headers: {'Content-Type': 'application/json'}})

    const price = response.data.data.tokens[0].tokenDayData[0].priceUSD

    this.totalElkSupply.value = 42424242
    this.totalElkIssued.value = circulationApi?.data?.total
    this.marketCap.value = parseInt(circulationApi?.data?.total * price)
  }
}
</script>

<style lang="scss">
.tokenomics {
  flex-direction: column;
  padding: 32px 24px;
  width: 100%;
  max-width: max-content;
  background: rgba(white, .1);
  border-radius: 40px;
  border: 1px solid rgba(white, .1);

  &__title {
    margin: 0 80px 64px 0;
    height: min-content;

    &::after {
      content: '';
      position: absolute;
      top: calc(100% + 4px);
      left: 0;
      width: 100%;
      height: 2px;
      background: $green;
    }
  }

  &__stats,
  &__chart {
    width: 100%;
  }

  &__stats {
    margin: 0 0 16px;
  }

  &__stat-name,
  &__stat-value {
    flex-direction: column;
  }

  &__stat-name > *,
  &__stat-value > * {
    margin: 0 0 16px;
  }

  &__stat-name {
    margin: 0 16px 0 0;
  }

  &__chart-visual {
    margin: 0 16px 24px 0;
  }

  &__chart-image {
    width: 100%;
    max-width: 254px;
  }

  &__chart-title {
    bottom: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    width: min-content;
    text-align: center;
  }

  &__chart-key {
    flex-direction: column;
  }

  &__chart-label {
    flex-direction: column;
    margin: 0 0 16px 32px;
    width: 100%;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -24px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
    }

    &:nth-of-type(1)::before {
      background: #265c4f
    }

    &:nth-of-type(2)::before {
      background: #3c8860
    }

    &:nth-of-type(3)::before {
      background: #65b363
    }

    &:nth-of-type(4)::before {
      background: #abdc62
    }

    &:nth-of-type(5)::before {
      background: #fffd61
    }
  }
}
</style>