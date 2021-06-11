<template>
  <div
    :style="{
      fontSize: settings.font.size + 'px',
      color: settings.font.color,
      backgroundColor: settings.font.background,
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
          color: "#FFF",
          background: "#000",
          size: 32,
          margins: 20,
        },
      },
      session: {
          id: "",
          password: "",
      },
      socket: null,
      text: "Testar en text<br/> Med radbrytningar",
    };
  },
  mounted() {
      this.session.id = this.$route.params.id
      this.connectSocket();
  },
  beforeDestroy() {
      this.disconnect();
  },

  methods: {
      connectSocket() {
          console.log("Yello: ", this.$api)
          this.socket = new WebSocket("ws://" + this.$api + "/listen/" + this.session.id)
          this.socket.onmessage = (e) => {
              this.text = e.data;
          }
          this.socket.onopen = (e) => {
              console.log(e);
              console.log("Anslöt")
              this.socket.send("David")
          }
      }
      ,
      disconnect() {
          this.socket.close();
      }
  }
};
</script>