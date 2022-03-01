<template>
  <div class="tiles-container">
    <div v-for="(year, i) in years" :key="year + i" class="tiles flex flex--x-center" :class="{'none' : i != select.value}">
      <div class="tiles__quarter quarter-1 flex pos--rel">
        <div v-for="(tile, i) in year.quarter1" :key="tile + i" class="tile flex" :class="'tile--' + tile.status">
          <div class="tile__header flex flex--x-between">
            <p class="tile__name fs--20 fw--700">
              {{tile.name}}
            </p>
            <p class="tile__status">
              {{tile.status}}
            </p>
          </div>
          <p class="tile__content">
            {{tile.content}}
          </p>
        </div>
      </div>
      <div class="tiles__quarter quarter-2 flex pos--rel">
        <div v-for="(tile, i) in year.quarter2" :key="tile + i" class="tile flex" :class="'tile--' + tile.status">
          <div class="tile__header flex flex--x-between">
            <p class="tile__name fs--20 fw--700">
              {{tile.name}}
            </p>
            <p class="tile__status">
              {{tile.status}}
            </p>
          </div>
          <p class="tile__content">
            {{tile.content}}
          </p>
        </div>
      </div>
      <div class="tiles__quarter quarter-3 flex pos--rel">
        <div v-for="(tile, i) in year.quarter3" :key="tile + i" class="tile flex" :class="'tile--' + tile.status">
          <div class="tile__header flex flex--x-between">
            <p class="tile__name fs--20 fw--700">
              {{tile.name}}
            </p>
            <p class="tile__status">
              {{tile.status}}
            </p>
          </div>
          <p class="tile__content">
            {{tile.content}}
          </p>
        </div>
      </div>
      <div class="tiles__quarter quarter-4 flex pos--rel">
        <div v-for="(tile, i) in year.quarter4" :key="tile + i" class="tile flex" :class="'tile--' + tile.status">
          <div class="tile__header flex flex--x-between">
            <p class="tile__name fs--20 fw--700">
              {{tile.name}}
            </p>
            <p class="tile__status">
              {{tile.status}}
            </p>
          </div>
          <p class="tile__content">
            {{tile.content}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseRoadmapTiles',
  data() {
    return {
      years: {
        2021: {
          quarter1: [
            {
              name: 'Beta Launch',
              status: 'done',
              content: 'Launch liquidity pools on several chains'
            },
            {
              name: 'Airdrop & Farming',
              status: 'done',
              content: 'First airdrop and yield farming (per chain)'
            }
          ],
          quarter2: [
            {
              name: 'SH Airdrop',
              status: 'done',
              content: 'Second airdrop (NFT) for strong holders'
            },
            {
              name: 'Beta ElkNet',
              status: 'done',
              content: 'Beta cross-chain functionality'
            }
          ],
          quarter3: [
            {
              name: 'Single Staking',
              status: 'done',
              content: '$ELK single staking pools'
            },
            {
              name: 'Dual Reward Farms',
              status: 'done',
              content: 'Upgraded farming contracts that emit multiple tokens'
            }
          ],
          quarter4: [
            {
              name: 'Chain expansion',
              status: 'in-development',
              content: 'Fuse, IoTeX, Arbitrum, Optimism'
            },
            {
              name: 'Proxy tokens',
              status: 'in-development',
              content: 'Initial support for cross-chain proxy tokens'
            },
            {
              name: 'Upgraded ElkNet',
              status: 'in-development',
              content: 'Improved functionality, fee optimization'
            }
          ]
        },
        2022: {
          quarter1: [
            {
              name: 'CHFT release',
              status: 'in-development',
              content: 'Enable minting of cross-chain native stablecoin'
            },
            {
              name: 'New dApp UI',
              status: 'in-development',
              content: 'Redesigned UI and UX for ElkDEX and ElkNet'
            },
            {
              name: 'Mainnet Nodes',
              status: 'planned',
              content: 'Secure ElkNet by staking ELK'
            }
          ],
          quarter2: [
            {
              name: 'Community Governance',
              status: 'planned',
              content: ''
            },
            {
              name: 'Elk SDK',
              status: 'in-development',
              content: 'For developers and platforms to build on ElkNet'
            }
          ],
          quarter3: [
            {
              name: 'To be announced',
              status: 'planned',
              content: ''
            }
          ],
          quarter4: [
            {
              name: 'To be announced',
              status: 'planned',
              content: ''
            }
          ]
        }
      },
      select: {
        value: 2021
      }
    }
  },

  methods: {
    changeYear($event) {
      this.select.value = $event.target.value
      console.log($event.target.value)
    }
  }
}
</script>

<style lang="scss">
.tiles-container {
  width: 100%;
}

.tiles {
  flex-direction: column;
  margin: 32px 0;
  width: 100%;

  &__quarter {
    flex-direction: column;
    width: 100%;
    margin: 32px 0;
    padding: 0 0 16px;
    border-bottom: 1px solid rgba(white,.1);

    & > * + * {
      margin: 16px 0 0;
    }

    &::before {
      position: absolute;
      top: -32px;
      left: 0;
      font-size: 22px;
      font-weight: 700;
    }
  }
}

.quarter-1::before {
  content: 'Q1';
  }

.quarter-2::before {
  content: 'Q2';
  }

.quarter-3::before {
  content: 'Q3';
}

.quarter-4::before {
  content: 'Q4';
}

.tile {
  flex-direction: column;
  padding: 16px;
  width: 100%;
  background: $tilegrey;
  border-radius: 8px;

  &__header {
    margin: 0 0 8px;
  }

  &__name {
    margin: 0 8px 0 0;
  }

  &--done {
    background: $tilegrey;

    .tile__name {
      opacity: .8;
    }

    .tile__status {
      color: $green;
    }

    .tile__content {
      opacity: .5;
    }
  }

  &--planned {
    background: $darkgreen;

    .tile__name,
    .tile__status {
      color: $limegreen
    }
  }

  &--in-development {
    background: $purple;
  }
}

@media (min-width: 1258px) {
  .tiles {
    flex-direction: row;
    margin: 32px 32px 32px 16px;
    width: max-content;

    &__quarter {
      padding: 8px;
      width: auto;
      border: 0;
      border-left: 1px solid rgba(white,.1);

      &::before {
        transform: translateX(-50%);
      }
    }

    .tile {
      max-width: 265px;
    }
  }
}

.none {
  display: none;
}
</style>
