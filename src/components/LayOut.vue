<template>
  <div>
    <Header />
    <Aside />
    <main class="main__page">
      <!-- <slot /> -->
      <!-- <transition name="fade-in-up"> -->
      <router-view />
      <!-- </transition> -->
    </main>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Aside from "./ASide.vue";

export default {
  name: "LayOut",
  components: {
    Header,
    Aside,
  },
  data: () => ({
    drawer: false,
    layout: "STANDARD",
  }),
  //   mounted() {
  //     if (Object.prototype.hasOwnProperty.call(this.$route, "meta")) {
  //       if (Object.prototype.hasOwnProperty.call(this.$route.meta, "layout")) {
  //         this.layout = this.$route.meta.layout;
  //         if (this.$route.meta.layout === "FULL") {
  //           let className = document.querySelector(".main__page");
  //           className.style.left = "0px";
  //         } else {
  //           let className = document.querySelector(".main__page");
  //           className.style.left = "380px";
  //         }
  //       } else {
  //         this.layout = "STANDARD";
  //         let className = document.querySelector(".main__page");
  //         className.style.left = "380px";
  //       }
  //     }
  //   },
  //   beforeRouteUpdate(to, from, next) {
  //     if (Object.prototype.hasOwnProperty.call(to, "meta")) {
  //       if (Object.prototype.hasOwnProperty.call(to, "layout")) {
  //         this.layout = to.meta.layout;
  //         if (to.meta.layout === "FULL") {
  //           let className = document.querySelector(".main__page");
  //           className.style.left = "0px";
  //         } else {
  //           let className = document.querySelector(".main__page");
  //           className.style.left = "380px";
  //         }
  //       } else {
  //         this.layout = "STANDARD";
  //         let className = document.querySelector(".main__page");
  //         className.style.left = "380px";
  //       }
  //     }
  //     next();
  //   },
};
</script>

<style scoped>
.main__page {
  position: absolute;
  left: 380px;
  top: 100px;
  right: 0;
  bottom: 0;
}
</style>
