<template>
  <div
    :style="{
      fontSize: settings.font.size + 'px',
      color: settings.font.colors.text,
      backgroundColor: settings.font.colors.bg,
      padding: settings.font.margins + 'px',
      height: 100 + '%',
    }"
    v-html="text"
  ></div>
</template>
<script>
export default {
  data() {
    return {
      settings: {
        font: {
          colors: { txt: "#FFF", bg: "#000"},
          size: 32,
          margins: 20,
        },
      },
      session: {
        id: "",
        password: "",
      },
      socket: null,
      text: "",
    };
  },
  mounted() {
    let settings = localStorage.getItem("settings");
    console.log("localStorage:", settings);
    if (settings == null) {
      console.log("saving default settings");
      localStorage.setItem("settings", JSON.stringify(this.settings));
    } else {
      this.settings = JSON.parse(settings);
    }
    this.session.id = this.$route.params.id;
    this.connectSocket();
  },
  beforeDestroy() {
    this.disconnect();
  },

  methods: {
    connectSocket() {
      console.log("Yello: ", this.$api);
      this.socket = new WebSocket(
        "ws://" + this.$api + "/listen/" + this.session.id
      );
      this.socket.onmessage = (e) => {
        this.text = e.data;
      };
      this.socket.onopen = (e) => {
        console.log(e);
        console.log("Anslöt");
        this.socket.send("David");
      };
    },
    disconnect() {
      this.socket.close();
    },
  },
};
</script>