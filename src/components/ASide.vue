<template>
  <div class="left">
    <ul class="list">
      <li v-for="(item, index) in menu" :key="index">
        <div :class="`list__items ${item.className}`">
          <img :src="item.icon" alt="icon" />
          <span class="list__item--text">{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import * as player from "./../assets/img/player.svg";
export default {
  name: "AsideMenu",
  props: {
    // value: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
  },
  data: () => ({
    menu: [
      {
        name: "My Recordings",
        link: "#",
        icon: player.default,
        className: "active",
      },
      {
        name: "Requested",
        link: "#",
        icon: player.default,
        className: "",
      },
    ],
  }),
};
</script>

<style scoped>
.left {
  position: absolute;
  /* left: 0;
  top: 92px;
  bottom: 0;
  width: 178px; */
  top: 89px;
  left: 0px;
  width: 306px;
  height: 100vh;
  /* overflow: auto; */
  /* UI Properties */
  background: #ebf2f6 0% 0% no-repeat padding-box;
  opacity: 0.3;
}

.list {
  list-style-type: none; /* Remove bullets */
  padding: 0;
  margin: 0;
}

.list__items {
  display: flex;
  align-items: center;
  /* justify-content: spa; */
  margin: auto;
  top: 208px;
  left: 18px;
  width: 70%;
  height: 45px;
  border-radius: 10px;
  opacity: 1;
  margin-top: 50px;
  padding-left: 50px;
}

.list__item--text {
  /* UI Properties */
  text-align: left;
  font: normal normal 300 16px/25px Poppins;
  letter-spacing: 0px;
  color: #21455e;
  opacity: 1;
  margin-left: 20px;
}

img {
  /* Layout Properties */
  top: 143px;
  left: 59px;
  width: 26px;
  height: 21px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  /* UI Properties */
  /* background: transparent url("img/video-player.png") 0% 0% no-repeat
    padding-box;
  opacity: 1; */
}

.active {
  background: #e2e5ed 0% 0% no-repeat padding-box;
  border: 1px solid #0dabd838;
  border-radius: 10px;
  opacity: 1;
}
</style>
