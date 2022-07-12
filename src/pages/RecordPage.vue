<template>
  <div>
    <div v-if="!isRecording">Loading ...</div>
    <div id="video"></div>
    <!-- <video v-else id="video" width="320" height="240" autoplay></video> -->
  </div>
</template>

<script>
export default {
  name: "Record",

  props: {
    mic: {
      type: Boolean,
      required: true,
      default: false,
    },
    screen: {
      type: Boolean,
      required: true,
      default: false,
    },
    camera: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  data() {
    return {
      speechKit: {},
      youtube_ready: false,
      canRecord: true,
      isRecording: false,
      loaded: false,
      options: {
        audioBitsPerSecond: 128000,
        videoBitsPerSecond: 2500000,
      },
      displayOptions: {
        video: {
          cursor: "always",
        },
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100,
        },
      },
      mediaRecorder: {},
      stream: {},
      recordedChunks: [],
      camera_stream: {},
      mediaCameraRecorder: {},
    };
  },

  methods: {
    getDisplayType: async function () {
      this.isRecording = false;
      try {
        console.log(this.mic, this.screen, this.camera);
        if (this.camera) {
          await this.getCameraStream();
        }
        if (this.mic || this.screen) {
          await this.getStream();
        }
        this.isRecording = true;

        if (!this.mic && !this.screen && !this.camera) this.isRecording = false;
      } catch {
        this.isRecording = false;
        this.stopStream();
      }
    },
    getStream: async function () {
      try {
        this.stream = await navigator.mediaDevices.getDisplayMedia(
          this.displayOptions
        );
        this.mediaRecorder = new MediaRecorder(this.stream, this.options);
        this.mediaRecorder.ondataavailable = this.handleDataAvailable;
        this.mediaRecorder.start();
      } catch (e) {
        alert(e);
        this.isRecording = false;
      }
    },
    getCameraStream: async function () {
      //   let video_tag = await document.querySelector("#video");
      try {
        // console.log(video_tag);
        this.camera_stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: this.mic,
        });

        const video = document.createElement("video");

        // 👇️ Local file
        // video.src = 'video.mp4';

        // 👇️ Remote file
        video.srcObject = this.camera_stream;

        video.poster = "";

        video.autoplay = true;
        video.controls = true;
        video.muted = false;
        video.height = 518;
        video.width = 965;
        // video_tag.srcObject = this.camera_stream;

        const box = document.getElementById("video");
        box.appendChild(video);

        this.mediaCameraRecorder = new MediaRecorder(this.camera_stream, {
          mimeType: "video/webm",
        });
        this.mediaCameraRecorder.ondataavailable = this.handleDataAvailable;
        this.mediaCameraRecorder.start();
      } catch (e) {
        alert(e);
        this.isRecording = false;
      }
    },
    handleDataAvailable: function (event) {
      if (event.data.size > 0) {
        this.recordedChunks.push(event.data);
        this.isRecording = false;
        this.download();
      }
    },
    download: function () {
      this.recordedChunks = [];
    },
    stopStream: function () {
      this.mediaCameraRecorder.stop();
      this.mediaRecorder.stop();
    },
  },

  mounted() {
    this.getDisplayType();
  },
};
</script>

<style scoped>
#video {
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
}
</style>
