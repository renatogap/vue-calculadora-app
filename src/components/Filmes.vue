<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="n in 24"
            :key="n"
            cols="12"
            md="4"
            lg="4"
            
          >
            <v-card
              elevation="5"
              >
              <v-card-title>Título do Filme</v-card-title>
              <v-card-subtitle>Animação e Aventura</v-card-subtitle>
              <v-card-text>
                Descrição do filme...
              </v-card-text>
              <v-card-actions>
                fdjskaf
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    //
  }
</script>