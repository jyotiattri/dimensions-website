<template>
  <div id="wrapper">
    <div>
      <AppHeader />
    </div>

    <div id="main">
      <!-- Intro -->
      <article id="intro">
        <h2 class="major">
          Intro
        </h2>
        <span class="image main">
          <img src="~/assets/images/pic01.jpg" alt>
        </span>
        <p>
          Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my
          <a
            href="#work"
          >awesome work</a>.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
      </article>

      <!-- Work -->
      <article id="work">
        <h2 class="major">
          Work
        </h2>
        <span class="image main">
          <img src="~/assets/images/pic02.jpg" alt>
        </span>
        <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
      </article>

      <!-- About -->
      <article id="about">
        <h2 class="major">
          About
        </h2>
        <span class="image main">
          <img src="~/assets/images/pic03.jpg" alt>
        </span>
        <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
      </article>
    </div>
  </div>
  <!-- <button @click="open('intro')"> -->
  <!-- <my-component v-if="visible" :pageInfo="currentPage" ></my-component> -->
</template>

<script>
import AppHeader from '../components/AppHeader'

export default {
  name: 'Homepage',
  components: {
    AppHeader
  },
  data () {
    return {
      currentPage: Object,
      info: [
        {
          title: 'intro',
          text: `Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my awesome work.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.`,
          image: ''
        },
        {
          title: 'about',
          text: '',
          image: ''
        }
      ]
    }
  },
  methods: {
    open (title) {
      const infoObj = this.info.find(item => item.title === title)
      this.currentPage = infoObj
      this.visible = true
    },
    close () {
      this.visible = false
    }
  },
  head () {
    return {
      script: [{ hid: 'main', src: '/static/js/main.js' }]
    }
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
