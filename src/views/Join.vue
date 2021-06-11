<template>
  <v-container>
          <h1 class="display-2 font-weight-bold mb-3">
            Anslut till distanstolkning
          </h1>
          <p>
            För att ansluta använder du bokningsnumret du har fått vid din
            beställning.
          </p>
          <v-form v-model="valid">
            <v-col class="text-center" cols="4">
              <v-row>
                <v-text-field
                  v-model="session.id"
                  :rules="idRules"
                  label="Boknings-ID"
                  required
                >
                </v-text-field>
              </v-row>
              <v-row>
                <v-text-field v-model="session.password" label="Lösenord">
                </v-text-field>
              </v-row>

              <v-row> <v-btn elevation="2"> Anslut</v-btn> </v-row>
            </v-col>
          </v-form>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      session: {
        id: "123456",
        password: "",
      },
      valid: null,
      idRules: [
        (v) => v.length == 12 || "Boknings-ID:t består av 12 tecken",
        (v) =>
          !!v ||
          "Boknings-ID:t är obligatoriskt, meddela skrivtolken/tolkcentralen om du saknar det",
      ],
    };
  },
};
</script>