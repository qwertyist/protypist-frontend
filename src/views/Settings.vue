<template>
  <v-container>
    <h1 class="display-2 font-weight-bold mb-3">Inställningar</h1>
    <v-form>
      <v-select
        v-model="settings.font.family"
        :items="fonts"
        prepend-icon="mdi-format-font"
        label="Typsnitt"
      ></v-select>
      <v-text-field
        v-model="settings.font.size"
        hide-details
        label="Textstorlek"
        prepend-icon="mdi-format-size"
        type="number"
      >
        <v-icon slot="append" @click="increaseFontSize"> mdi-plus </v-icon>
        <v-icon slot="append" @click="decreaseFontSize"> mdi-minus </v-icon>
      </v-text-field>
      <v-text-field
        v-model="settings.font.margins"
        label="Textmarginal"
        prepend-icon="mdi-arrow-expand-all"
      >
        <v-icon slot="append" @click="increaseMarginSize"> mdi-plus </v-icon>
        <v-icon slot="append" @click="decreaseMarginSize"> mdi-minus </v-icon>
      </v-text-field>
        <v-radio-group v-model="settings.font.colors" prepend-icon="mdi-palette">
          <v-radio
            v-for="color in colors"
            :key="color.id"
            :label="color.label"
            :value="color.colors"
            :class="color.class"
          ></v-radio>
        </v-radio-group>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        font: {
          size: 32,
          family: "Arial",
          margins: 10,
          colors: 0,
        },
      },
      fonts: ["Arial", "Times New Roman", "Roboto"],
      colors: [
        {
          id: 0,
          label: "Vit text på svart bakgrund",
          colors: { text: "#FFF", bg: "#000" },
          class: "white-on-black",
        },
        {
          id: 1,
          label: "Svart text på vit bakgrund",
          colors: { text: "#000", bg: "#FFF" },
          class: "black-on-white",
        },
        {
          id: 2,
          label: "Gul text på svart bakgrund",
          colors: { text: "#FF0", bg: "#000" },
          class: "yellow-on-black",
        },
        {
          id: 3,
          label: "Svart text på gul bakgrund",
          colors: { text: "#FFF", bg: "#FF0" },
          class: "black-on-yellow",
        },
        {
          id: 4,
          label: "Gul text på blå bakgrund",
          colors: { text: "#FF0", bg: "#00F" },
          class: "yellow-on-blue",
        },
        {
          id: 5,
          label: "Blå text på gul bakgrund",
          colors: { text: "#00F", bg: "#FF0" },
          class: "blue-on-yellow",
        },
      ],
    };
  },
  methods: {

    increaseFontSize() {
      this.settings.font.size += 5;
    },
    decreaseFontSize() {
      this.settings.font.size -= 5;
    },
    increaseMarginSize() {
      this.settings.font.margins += 5;
    },
    decreaseMarginSize() {
      this.settings.font.margins -= 5;
    },
  },
};
</script>

<style scoped>
.v-radio /deep/ label {
    padding: 0.5rem;
}
.white-on-black /deep/ label {
  color: #fff;
  background-color: #000;
}
.black-on-white /deep/ label {
  color: #000;
  background-color: #fff;
}
.yellow-on-black /deep/ label {
  color: #ff0;
  background-color: #000;
}
.black-on-yellow /deep/ label {
  color: #000;
  background-color: #ff0;
}
.blue-on-yellow /deep/ label {
  color: #00f;
  background-color: #ff0;
}
.yellow-on-blue /deep/ label {
  color: #ff0;
  background-color: #00f;
}
</style>