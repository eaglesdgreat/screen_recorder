<template>
  <main>
    <header class="top">
      <div class="app__icon">
        <div class="app__icon--img"></div>
      </div>
      <span class="app__icon--text"> Adilo </span>

      <div class="pad__left">
        <span class="header__text">Projects</span>
        <span class="header__text">Tools & App</span>
        <span class="header__text">Channels</span>
        <span class="header__text">Contact</span>
        <span class="header__text">Analytics</span>
        <span class="header__text">Settings</span>
      </div>

      <div class="profile">
        <span class="active">Help</span>
        <span class="boda"></span>
        <img src="./../assets/img/profile.svg" class="image" alt="avatar" />
        <div class="avatar">
          <span class="avatar__main--text">Code Fisher</span>
          <span class="sub--text">codefisher@gmail.com</span>
        </div>
      </div>
    </header>
  </main>
</template>

<script>
export default {
  name: "TopBar",
};
</script>

<style scoped>
.top {
  position: absolute;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  padding: 15px;
  top: 0px;
  left: 0.5px;
  right: 0;
  /* width: 100%; */
  /* height: 80px; */
  /* UI Properties */
  opacity: 1;
  border: 1px solid #ecebed;
  box-shadow: 0px 0px #ecebed;
}
.app__icon {
  top: 22px;
  left: 51px;
  width: 40px;
  height: 40px;
  background: #fbbd71 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
  margin-left: 35px;
}

.app__icon--img {
  /* Layout Properties */
  top: 28px;
  left: 58px;
  margin: auto;
  width: 66%;
  margin-top: 7px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* UI Properties */
  background: transparent url("./../assets/img/swarm.svg") 0% 0% no-repeat
    padding-box;
  opacity: 1;
}

.app__icon--text {
  /* top: 27px;
left: 109px;
width: 70px;
height: 31px; */
  text-align: left;
  font: normal normal bold 28px/32px Helvetica;
  letter-spacing: 0px;
  color: #21455e;
  opacity: 1;
  margin-left: 25px;
}

.header__text {
  /* Layout Properties */
  top: 28px;
  left: 323px;
  width: 72px;
  height: 25px;
  /* UI Properties */
  text-align: left;
  font: normal normal medium 18px/30px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  margin-left: 40px;
  cursor: pointer;
}
.pad__left {
  padding-left: 150px;
}
.active {
  /* UI Properties */
  text-align: left;
  font: normal normal medium 18px/27px Poppins;
  letter-spacing: 0px;
  color: #21455e;
  opacity: 1;
}

.boda {
  border-left: 1px solid #d5d5d5;
  height: 28px;
  margin: 0px 15px 0px 15px;
}

.image {
  width: 30px;
  height: 30px;
  border-radius: 10px;
}

.avatar__main--text {
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #100c08;
  opacity: 1;
}

.sub--text {
  font: normal normal normal 13px/21px Poppins;
  letter-spacing: 0px;
  color: #21455e;
  margin-top: -4px;
  opacity: 1;
}

.avatar {
  display: grid;
  margin-left: 10px;
}

.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0px 0px 100px;
  width: 30%;
}
</style>
