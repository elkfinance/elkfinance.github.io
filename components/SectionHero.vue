<template>
  <section class="sectionHero pos-rel">
    <video class="sectionHero__video" src="~/static/elklogo.mp4" autoplay muted playsinline></video>
    <div class="sectionHero__container flex flex--y-center flex--x-between flex--r-nowrap pos--abs z--1">
      <TheNavbar />
      <h1 class="sectionHero__title fs--48 fw--900 flex flex--x-center flex--y-center">
        Where
        <div class="sectionHero__chains-scroll-wrapper flex flex--r-nowrap">
          <TheChains type="vertical" class="sectionHero__chains-scroll" />
        </div>
        Meet
      </h1>
      <div class="sectionHero__chains-wrapper flex flex--y-center flex--r-nowrap pos--abs" ref="logosTicker">
        <TheChains type="horizontal" />
        <TheChains type="horizontal" />
      </div>
      <div class="sectionHero__buttons flex flex--x-center pos--rel">
        <a class="sectionHero__button button button--limegreen" href="https://app.elk.finance/#/swap/">Buy $ELK</a>
        <a class="sectionHero__button button button--white" href="https://app.elk.finance/#/elknet/">ElkNet Bridge</a>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

export default {
  name: 'SectionHero',
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    const scroller = this.$el.querySelector('.sectionHero__chains-scroll-wrapper')
    const logoHolder = this.$el.querySelector('.sectionHero__chains-scroll')

    // We only want the ScrollTrigger to work on desktop, so let's use matchMedia to make sure that happens
    ScrollTrigger.matchMedia({
      // If the screen is at least 800px wide
      "(min-width: 800px)": () => {
        const scrollerElement = ScrollTrigger.create({
          trigger: '.sectionHero',
          pin: true,
          end: `+=${logoHolder.clientHeight * 2}`,
          onUpdate: (self) => {
            const progress = self.progress

            // We want to get the remaining scroll area, then scroll the scroller down by that multiplied by the progress
            scroller.scrollTop = (scroller.scrollHeight - scroller.clientHeight) * progress

            // We want to also set the opacity of each item as we scroll
            // We know the center of the scroll box is it's scrollTop + (clientHeight / 2)
            const scrollCenter = scroller.scrollTop + (scroller.clientHeight / 2)

            if (!logoHolder) {
              return
            }

            for (let logo of logoHolder.children)
            {
              const logoImage = logo.querySelector('img')

              if (!logoImage) {
                // I don't want to change the opacity of the text at the end, so let's keep that as is
                return
              }

              // Since we now know where the center is, we can figure out the element's absolute distance from it
              // Absolute, in this case, just means a positive number
              const distanceFromCenterPx = Math.abs(scrollCenter - logo.offsetTop)
              // Dividing this by the height of the scroller (which should always be double the height of each logo div)
              // Will give us a value beteween 0 and 1
              const normalizedDistance = Math.min(distanceFromCenterPx / (scroller.clientHeight / 2), 1)

              // This is a graph to try and make the opacity change how I want it to
              // This is probably too complicated, ah well
              let opacity = -Math.pow((((1-normalizedDistance) * 1.5) - 1.5), 2) + 1
              opacity = Math.max(opacity, 0)

              logo.style.opacity = opacity
            }

            // Once we've scrolled to the bottom, disable the scrollTrigger instance and scroll to the top of the page
            if (progress === 1) {
              if (scrollerElement) {
                scrollerElement.disable()
              }

              window.scrollTo(0, 0)
              requestAnimationFrame(() => {
                window.scrollTo(0, 0)
              })

              // We also want to set everything to it's final state here
              scroller.scrollTop = logoHolder.clientHeight
              this.$refs.logosTicker.classList.add('visible')
            }
          }
        })
      }
    })
  }
}
</script>

<style lang="scss">
.sectionHero {
  width: 100%;
  height: 100vh;
  background-color: white;
  background-image: url(~/static/elklogo.png);
  background-position: 50% 30%;
  background-size: 100vmin;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    height: 100vh;
    background: $green;
    mix-blend-mode: multiply;
  }

  &__video {
    display: none;
    width: 100%;
    height: 88vh;
  }

  &__container {
    flex-direction: column;
    inset: 0;
    padding: 0 16px;
    height: 100vh;
    overflow-x: hidden;
  }

  &__title {
    flex-direction: column;
    margin: -20vh 0 0;
    text-align: center;
  }

  &__alt-title {
    font-size: 54px;
  }

  &__chains-wrapper {
    bottom: 35vh;
    left: 0;
    animation: scroll 20s linear infinite;
    opacity: 1;
    transition: opacity 0.5s;
  }

  &__buttons {
    bottom: 64px;
    width: 100%;
  }

  &__button {
    margin: 10px 0;
    width: 100%;
    height: 50px;
  }
}

@keyframes scroll {
  to {
    transform: translateX(-50%)
  }
}

@media (min-width: 492px) {
  .sectionHero {

    &__title {
      flex-direction: row;
    }

    &__buttons {
      margin: 0 0 8vh;
    }

    &__button {
      margin: 0 10px;
      width: 210px;
    }
  }
}

@media (min-width: 800px) {
  .sectionHero {
    background: white;

    &__video {
      display: initial;
    }

    &__title,
    &__alt-title {
      font-size: 72px;
    }

    &__chains-scroll-wrapper {
      flex-direction: column;
      height: 200px;
      overflow: hidden;
    }

    &__chains-wrapper {
      top: 70vh;
      opacity: 0;

      &.visible {
        opacity: 1;
      }
    }
  }
}
</style>