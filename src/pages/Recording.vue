<template>
  <div>
    <TopMenu :recording="recordings.length" />
    <!-- <h1>Hello Welcome</h1> -->
    <div class="table">
      <div class="table__head">
        <div
          v-for="(head, i) in table_head"
          :key="i"
          class="table__head--child"
        >
          {{ head }}
        </div>
      </div>

      <div v-for="recording in recordings" :key="recording.id">
        <div class="table__body">
          <div class="table__body--child">
            <img :src="recording.image" alt="image" />
          </div>
          <div class="table__body--child">
            <p class="rec__title">{{ recording.title }}</p>
            <p class="rec__desc">
              {{ recording.description }}
            </p>
          </div>
          <span class="view table__body--child">{{ recording.views }}</span>
          <span class="view table__body--child">{{ recording.size }}</span>
          <span class="date table__body--child">{{
            recording.modified_date
          }}</span>
          <span class="btn__action table__body--child">. . .</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopMenu from "./../components/TopMain.vue";
export default {
  name: "Recording",
  components: {
    TopMenu,
  },
  data: () => {
    return {
      table_head: ["Recordings", "Title", "Views", "Size", "Last Modified", ""],
      recordings: [
        {
          id: 1,
          image: "",
          title: "Getting it right the first time",
          description:
            "The Video description is shown here if the user has added it",
          views: 345,
          size: "45 KB",
          modified_date: "3 month ago",
        },
        {
          id: 2,
          image: "",
          title: "Getting it right the first time",
          description:
            "The Video description is shown here if the user has added it",
          views: 345,
          size: "45 KB",
          modified_date: "3 month ago",
        },
        {
          id: 3,
          image: "",
          title: "Getting it right the first time",
          description:
            "The Video description is shown here if the user has added it",
          views: 345,
          size: "45 KB",
          modified_date: "3 month ago",
        },
      ],
    };
  },
};
</script>

<style scoped>
.table {
  display: flex;
  flex-direction: column;
}
.table__head {
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
}
.table__body {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}
.table__head--child {
  /* UI Properties */
  text-align: left;
  font: normal normal bold 18px/27px Poppins;
  letter-spacing: 0px;
  color: #21455e;
  opacity: 1;
  width: 16.6%;
}
.table__body--child {
  /* text-align: left; */
  width: 16.6%;
}
img {
  width: 120px;
  height: 65px;
  background: transparent #d5d5d5 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
}
.rec__title {
  text-align: left;
  font: normal normal normal 14px/21px Poppins;
  letter-spacing: 0px;
  color: #21455e;
  opacity: 1;
}
.rec__desc {
  text-align: left;
  font: normal normal normal 12px/18px Poppins;
  letter-spacing: 0px;
  color: #a3bac6;
  opacity: 1;
}
.view {
  text-align: left;
  font: normal normal normal 16px/26px Poppins;
  letter-spacing: 0px;
  color: #21455e;
  opacity: 1;
}
.date {
  text-align: left;
  font: normal normal normal 14px/26px Poppins;
  letter-spacing: 0px;
  color: #21455e;
  opacity: 1;
}
.btn__action {
  text-align: left;
  font: normal normal bold 16px/26px Poppins;
  letter-spacing: 0px;
  color: #21455e;
  opacity: 1;
}
</style>
