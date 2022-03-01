<template>
  <div class="move-stats fs--12">
    <div class="move-stats__global-stats pos--rel">
      <div class="move-stats__global-stat--blockchains flex flex--x-between">
        <p class="move-stats__stat-title fs--12 lh--180">
          blockchains
        </p>
        <p class="move-stats__stat-value fs--34 fw--700 flex flex--x-between" id="blockchains">
          0
        </p>
      </div>
      <div class="move-stats__global-stat--users flex flex--x-between">
        <p class="move-stats__stat-title fs--12 lh--180">
          unique users
        </p>
        <p class="move-stats__stat-value fs--34 fw--700 flex flex--x-between" id="users">
          0
        </p>
      </div>
      <div class="move-stats__global-stat--price flex flex--x-between">
        <p class="move-stats__stat-title fs--12 lh--180">
          price (average)
        </p>
        <p class="move-stats__stat-value fs--34 fw--700 flex flex--x-between" id="price">
          0
        </p>
      </div>
      <div class="move-stats__global-stat--done flex flex--x-between">
        <p class="move-stats__stat-title fs--12 lh--180">
          total transfers done
        </p>
        <p class="move-stats__stat-value fs--34 fw--700 flex flex--x-between" id="done">
          0
        </p>
      </div>
      <div class="move-stats__global-stat--cap flex flex--x-between">
        <p class="move-stats__stat-title fs--12 lh--180">
          total market cap
        </p>
        <p class="move-stats__stat-value fs--34 fw--700 flex flex--x-between" id="cap">
          0
        </p>
      </div>
      <div class="move-stats__global-stat--total flex flex--x-between">
        <p class="move-stats__stat-title fs--12 lh--180">
          elk transfered total
        </p>
        <p class="move-stast__stat-value fs--34 fw--700 flex flex--x-between" id="total">
          0
        </p>
      </div>
    </div>
    <div class="move-stats__elknet-stats flex pos--rel">
      <div class="move-stats__elknet-stat--transfers flex flex--x-between">
        <p class="move-stat-title fs--12 lh--180">
          total transfers
        </p>
        <div class="move-stats__stat-group flex flex--x-between">
          <p class="move-stats__stat-value fw--700 fs--34 flex flex--x-between" id="transfersin">
            0
          </p>
          <p class="move-stats__stat-value fw--700 fs--34 flex flex--x-between" id="transfersout">
            0
          </p>
        </div>
      </div>
      <div class="move-stats__elknet-stat--value flex flex--x-between">
        <p class="move-stats__stat-title fs--12 lh--180">
          total value transfered
        </p>
        <div class="move-stats__stat-group flex flex--x-between">
          <p class="move-stats__stat-value fw--700 fs--34 flex flex--x-between" id="valuein">
            0
          </p>
          <p class="move-stats__stat-value fw--700 fs--34 flex flex--x-between" id="valueout">
            0
          </p>
        </div>
      </div>
    </div>
    <div class="move-stats__crosschain-stat flex flex--x-between fc--green">
      <p class="move-stats__stat-title fs--12 lh--180">
        total value moved cross-chain
      </p>
      <p class="move-stats__stat-value fw--700 fs--34 flex flex--x-between" id="crosschain">
        0
      </p>
    </div>
  </div>
</template>
<script>
export default {
name: 'BaseMoveStats',
  data() {
    return {
      blockchains: {
        value: 0
      },
      users: {
        value: 0
      },
      price: {
        value: 0
      },
      done: {
        value: 0
      },
      cap: {
        value: 0
      },
      total: {
        value: 0
      },
      transfersin: {
        value: 0
      },
      transfersout: {
        value: 0
      },
      valuein: {
        value: 0
      },
      valueout: {
        value: 0
      },
      crosschain: {
        value: 0
      },
      circulating: {
        value: 0
      },
      hasAnimationPlayed: false
    }
  },
  async fetch() {
    const axios = this.$axios
    const circulationApi = await axios.get('https://api.elk.finance/v1/info/circulation')
    const elknetApi = await axios.get('https://api.elk.finance/v1/info/elknet')

    this.circulating.value = circulationApi.data.total
    this.done.value = elknetApi.data.total['num-transfers']
    this.total.value = elknetApi.data.total['amount-transfers']
    this.users.value = elknetApi.data.total.users

    for (const currency in elknetApi.data) {
      // Ignore the total
      if (currency === 'total') {
        continue
      }

      const currencyData = elknetApi.data[currency]
      this.transfersin.value = currencyData['num-transfers-in']
      this.transfersout.value = currencyData['num-transfers-out']
      this.valuein.value = currencyData['amount-transfers-in']
      this.valueout.value = currencyData['amount-transfers-out']
      this.blockchains.value = (Object.keys(elknetApi?.data).length ?? 1) - 1 // -1 to remove "total" key
    }
  },
  methods: {
    getNumberBase(num) {
      // Twelve Zeroes for Trillions
      return Math.abs(Number(num)) >= 1.0e+12
        ? { symbol: 'T', base: 1000000000000 }

        // Nine Zeroes for Billions
        : Math.abs(Number(num)) >= 1.0e+9
        ? { symbol: 'B', base: 1000000000 }

        // Six Zeroes for Millions
        : Math.abs(Number(num)) >= 1.0e+6
        ? { symbol: 'M', base: 1000000 }

        // Three Zeroes for Thousands
        : Math.abs(Number(num)) >= 1.0e+3
        ? { symbol: 'k', base: 1000 }

        : { symbol: '', base: 1 }
    },
    formatNumber(num, { symbol, base }, decimalPlaces = 2) {
      return (num / base).toFixed(decimalPlaces) + symbol
    },
    animateValue(obj, start, end, decimalPlaces, units = true) {
      let startTimestamp = null
      const duration = 2000
      end = parseFloat(end)
      let endBase = this.getNumberBase(end)

      if (!units) {
        endBase = { symbol: '', base: 1 }
      }

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = Math.min((timestamp - startTimestamp) / duration, 1)
        let number = progress * (end - start) + start

        if (end % 1 === 0) {
          number = Math.floor(number)
        }

        const formattedNumber = this.formatNumber(number, endBase, decimalPlaces)

        obj.innerHTML = formattedNumber.replace('.00', '').replace(/\.0$/, '').toLocaleString()

        if (progress < 1) {
          window.requestAnimationFrame(step)
        }
      }

      window.requestAnimationFrame(step)
    },
    intersectionCallback(entry) {
      if(!entry[0].isIntersecting || this.hasAnimationPlayed) {
        return
      }

      this.animateValue(document.querySelector("#blockchains"), 0, this.blockchains.value)
      this.animateValue(document.querySelector("#users"), 0, this.users.value)
      this.animateValue(document.querySelector("#price"), 0, this.price.value)
      this.animateValue(document.querySelector("#done"), 0, this.done.value)
      this.animateValue(document.querySelector("#cap"), 0, this.cap.value)
      this.animateValue(document.querySelector("#total"), 0, this.total.value)
      this.animateValue(document.querySelector("#transfersin"), 0, this.transfersin.value, 1)
      this.animateValue(document.querySelector("#transfersout"), 0, this.transfersout.value, 1)
      this.animateValue(document.querySelector("#valuein"), 0, this.valuein.value, 1)
      this.animateValue(document.querySelector("#valueout"), 0, this.valueout.value, 1)
      this.animateValue(document.querySelector("#crosschain"), 0, this.crosschain.value, 2)

      this.hasAnimationPlayed = true
    },
    async getCurrencyPrice(currency) {
      const endpoints = {
        BSC: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-bsc",
        AVAX: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-avax",
        HECO: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-heco",
        MATIC: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-matic",
        FTM: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-ftm",
        XDAI: "https://api.thegraph.com/subgraphs/name/elkfinance/elkdex-xdai",
        HARMONY: "https://graph.t.hmny.io/subgraphs/name/elkfinance/elkdex-harmony",
        KCC: "https://kcc-graph.elk.finance/subgraphs/name/elkfinance/elkdex-kcc",
        OKEX: "https://okex-graph.elk.finance/subgraphs/name/elkfinance/elkdex-okex",
        HOO: "https://hoo-graph.elk.finance/subgraphs/name/elkfinance/elkdex-hoo",
        ELASTOS: "https://elastos-graph.elk.finance/subgraphs/name/elkfinance/elkdex-elastos",
        MOONRIVER: "https://moonriver-graph.elk.finance/subgraphs/name/elkfinance/elkdex-moonriver",
      }

      const response = await this.$axios({
        url: endpoints[currency],
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

      return response.data.data.tokens[0].tokenDayData[0].priceUSD
    },
    averageArray(array) {
      return array.reduce((a, b) => a + b, 0) / array.length
    }
  },
  async mounted() {
    const observer = new IntersectionObserver(this.intersectionCallback, { threshold: 0.33 })
    observer.observe(document.querySelector(".move-stats"))

    // Even though we did a lot of the API stuff in fetch(), we get the prices here
    // Since I want to use async for this bit, it would make the entire page go slower if we were to do it in Fetch
    const priceSymbols = ['AVAX', 'BSC', 'XDAI']
    const prices = []

    for (const index in priceSymbols) {
      const symbol = priceSymbols[index]

      const price = await this.getCurrencyPrice(symbol)
      prices.push(parseFloat(price))
    }

    const averagePrice = this.averageArray(prices).toFixed(2)

    this.price.value = averagePrice
    this.crosschain.value = this.total.value * averagePrice
    this.cap.value = (this.circulating.value) * averagePrice
  }
}
</script>
<style lang="scss">
.move-stats {
  display: grid;
  grid-template-areas:
  "global"
  "elknet"
  "crosschain";
  gap: 8px;
  margin: 0 0 48px;
  width: 100%;
  max-width: 1160px;
  text-transform: uppercase;

  &__global-stats {
    display: grid;
    grid-area: global;
    grid-template-areas:
    "blockchains users"
    "price done"
    "cap done"
    "total total";
    gap: 8px;
    margin: 48px 0 0;

    &::before {
      content: "GLOBAL";
      position: absolute;
      left: 0;
      bottom: calc(100% + 16px);
    }
  }

  &__global-stat {

    &--blockchains {
      grid-area: blockchains;
    }

    &--users {
      grid-area: users;
    }

    &--price {
      grid-area: price;
    }

    &--done {
      grid-area: done;
    }

    &--cap {
      grid-area: cap;
    }

    &--total {
      grid-area: total;
    }
  }

  &__elknet-stats {
    grid-area: elknet;
    flex-direction: column;
    margin: 48px 0 0;

    &::before {
      content: "ELKNET";
      position: absolute;
      left: 0;
      bottom: calc(100% + 16px);
    }
  }

  &__elknet-stat--transfers {
    margin: 0 0 8px;
  }

  &__crosschain-stat {
    grid-area: crosschain;
    padding: 12px 10px 10px;
    min-height: 96px;
    background: white;
    flex-direction: column;
  }

  &__global-stats > *,
  &__elknet-stats > * {
    flex-direction: column;
    padding:12px 10px 10px;
    min-height: 96px;
  }

  &__global-stats > * {
    background: $purple;
  }

  &__elknet-stats > * {
    background: $darkgreen;
  }

  &__stat-value {

    &::before {
      margin: 0 8px 0 0;
      font-size: 15px;
    }
  }
}

#price::before,
#cap::before,
#crosschain::before {
  content: 'usd';
}

#price::before {
  content: 'usd';
}

#valuein::before,
#transfersin::before {
  content: 'in';
}

#valueout::before,
#transfersout::before {
  content: 'out';
}

@media (min-width: 1160px) {
  .move-stats {
    grid-template-areas:
    "global elknet"
    "crosschain crosschain";

    &__global-stats {
      grid-template-areas:
      "blockchains cap done"
      "price users total";
    }

    &__global-stats > * {
      width: 260px;
    }

    &__elknet-stats > * {
      width: 356px;
    }

  }
}
</style>