<template>
  <header class="main-header">
    <div class="logo">
      <span class="icon fa-gem"></span>
    </div>
    <div class="content">
      <div class="inner">
        <h1>{{ title }}</h1>
        <p>{{ data }}</p>
      </div>
    </div>
    <nav>
      <ul>
        <li><nuxt-link to="#intro">Intro</nuxt-link></li>
        <li><nuxt-link to="#work">Work</nuxt-link></li>
        <li><nuxt-link to="#about">About</nuxt-link></li>
        <li><nuxt-link to="#contact">Contact</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      info: [
        {
          title: "Dimension",
          data:
            "A fully responsive site template designed by HTML5 UP and released for free under the Creative Commons license."
        }
      ]
    };
  }
};
</script>
