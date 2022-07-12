<template>
  <div>
    <div class="text__small">Snapbyte > My Recording</div>
    <div class="menu__content">
      <span class="menu__content--span">
        <p class="content__span--text">My Recordings</p>
        <p class="content__span--text num">{{ recording }}</p>
      </span>
      <button class="btn__transparent">By Date</button>
      <button class="btn__transparent">Add Filter</button>
      <button class="btn__blue btn__text">New Request</button>
      <button class="btn__red btn__text" v-b-modal.modal-1>
        Start Recording
      </button>
    </div>

    <div>
      <b-modal id="modal-1" hide-footer centered no-close-on-backdrop>
        <template #modal-title>
          <span class="modal__header">New Recording</span>
        </template>

        <div class="modal__body">
          <span class="modal__body--text">Save the recording in</span>

          <select class="modal__body--select">
            <option>Select a project</option>
          </select>

          <div class="modal__body--switch" style="margin-top: 40px">
            <span class="modal__body--switch-text">Record screen</span>
            <b-form-checkbox
              v-model="screen_checked"
              name="check-button"
              switch
              variant="success"
              size="lg"
            ></b-form-checkbox>
          </div>
          <div class="modal__body--switch" style="padding-top: 10px">
            <span class="modal__body--switch-text">Record camera</span>
            <b-form-checkbox
              v-model="camera_checked"
              name="check-button"
              switch
              variant="success"
              size="lg"
            ></b-form-checkbox>
          </div>
          <div class="modal__body--switch" style="padding-top: 10px">
            <span class="modal__body--switch-text">Record mic</span>
            <b-form-checkbox
              v-model="mic_checked"
              name="check-button"
              switch
              variant="success"
              size="lg"
            ></b-form-checkbox>
          </div>
        </div>

        <div class="modal__body--switch-success-box">
          <button @click="record" class="modal__body--switch-success" block>
            Start Recording
          </button>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMain",
  props: {
    recording: {
      type: Number,
      default: 0,
    },
  },
  data: () => {
    return {
      mic_checked: false,
      camera_checked: false,
      screen_checked: false,
    };
  },
  methods: {
    record() {
      this.$router.push({
        name: "record",
        params: {
          mic: this.mic_checked,
          camera: this.camera_checked,
          screen: this.screen_checked,
        },
      });
    },
  },
};
</script>

<style scoped>
.text__small {
  width: 100%;
  text-align: left;
  font: normal normal normal 14px/26px Poppins;
  letter-spacing: 0px;
  color: #637c8e;
  opacity: 1;
}

.menu__content {
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between;
}

.menu__content--span {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 200px;
}
.content__span--text {
  color: #000000;
  text-align: left;
  font: normal normal bold 24px/35px Poppins;
  letter-spacing: 0px;
  opacity: 1;
}
.num {
  color: #637c8e;
  margin-left: 20px;
}

.btn__transparent {
  width: 118px;
  height: 40px;
  background: transparent;
  /* UI Properties */
  border: 1px solid #e2e5ed;
  border-radius: 28px;
  opacity: 1;

  text-align: center;
  font: normal normal normal 14px/21px Poppins;
  letter-spacing: 0px;
  color: #637c8e;
  opacity: 1;
}
.btn__blue {
  width: 164px;
  height: 40px;
  /* UI Properties */
  background: #0dabd8 0% 0% no-repeat padding-box;
  border-radius: 28px;
  opacity: 1;
}

.btn__red {
  width: 179px;
  height: 40px;
  /* UI Properties */
  background: #ef5350 0% 0% no-repeat padding-box;
  border-radius: 28px;
  opacity: 1;
}

.btn__text {
  /* UI Properties */
  text-align: center;
  font: normal normal normal 14px/21px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
button {
  cursor: pointer;
}

.modal__header {
  text-align: left;
  font: normal normal 600 22px/33px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-left: 40px;
}

.modal__body {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}
.modal__body--text {
  text-align: left;
  font: normal normal 300 16px/25px Poppins;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}

.modal__body--select {
  width: 377px;
  height: 49px;
  margin-top: 10px;
  /* UI Properties */
  background: #f8fafb 0% 0% no-repeat padding-box;
  border: 1px solid #e2e5ed;
  border-radius: 8px;
  opacity: 1;
}

select {
  text-indent: 25px;
  text-align: left;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #21455e;
  opacity: 1;
}

.modal__body--switch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 90%;
}

.modal__body--switch-text {
  text-align: left;
  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  color: #21455e;
  opacity: 1;
}

.modal__body--switch-btn {
  width: 37px;
  height: 19px;
}

.modal__body--switch-success {
  width: 289px;
  height: 51px;
  /* UI Properties */
  background: #0dabd8 0% 0% no-repeat padding-box;
  border-radius: 28px;
  opacity: 1;
  text-align: center;
  font: normal normal normal 18px/27px Poppins;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

.modal__body--switch-success-box {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px 30px 0px;
}
</style>
