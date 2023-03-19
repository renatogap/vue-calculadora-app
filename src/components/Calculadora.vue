<template>
  <v-app id="inspire">
    <v-main>
      <v-container>
        
        <v-row class="d-flex align-center justify-center">
          <v-col
            md="4"
            col="5"
            class="calculadora-body rounded-lg">

            <v-row class="mt-10">
              <v-col>
                <v-card class="tela">
                  <v-card-text class="resultado-tela">
                    {{ tela }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber(1)">1</v-card-text>
                </v-card>
              </v-col>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber(2)">2</v-card-text>
                </v-card>
              </v-col>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber(3)">3</v-card-text>
                </v-card>
              </v-col>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber('+')">+</v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber(4)">4</v-card-text>
                </v-card>
              </v-col>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber(5)">5</v-card-text>
                </v-card>
              </v-col>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber(6)">6</v-card-text>
                </v-card>
              </v-col>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber('-')">-</v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber(7)">7</v-card-text>
                </v-card>
              </v-col>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber(8)">8</v-card-text>
                </v-card>
              </v-col>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber(9)">9</v-card-text>
                </v-card>
              </v-col>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber('*')">*</v-card-text>
                </v-card>
              </v-col>
              
            </v-row>
            <v-row class="mb-5">
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text 
                    class="botao" 
                    @click="apagar()" 
                    @mousedown="onMouseDown()" 
                    @mouseup="onMouseUp"
                    >C
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber(0)">0</v-card-text>
                </v-card>
              </v-col>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="calcularResultado()">=</v-card-text>
                </v-card>
              </v-col>
              <v-col md="3" lg="3">
                <v-card class="text-center">
                  <v-card-text class="botao" @click="setNumber('/')">/</v-card-text>
                </v-card>
              </v-col>
            </v-row>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        tela: '0',
        timeout: 0
      }
    },

    methods: {
      setNumber(number) {
        if(this.tela == '0')
          this.tela = `${number}`;
        else
          this.tela = `${this.tela}${number}`;
      },

      calcularResultado() {
        //this.tela = `${eval(this.tela)}`;
      },

      apagar() {
        this.tela = this.tela.substring(0, this.tela.length - 1);
      },

      onMouseDown() {
        this.timeout = setTimeout(() => {
          this.tela = '0';
        }, 1000);
      },

      onMouseUp() {
        console.log('mouseUp...', this.timeout);
        clearTimeout(this.timeout);
      }
    },

    watch: {
      tela(valueCurrent) {
        if(!valueCurrent)
          this.tela = '0';
      }
    }
  }
</script>

<style>
h2 {
  color: white;
  font-weight: normal !important;
}

.calculadora-body {
  background: darkolivegreen;
}

.botao {
  cursor: pointer;
}

.botao:hover {
  background: #ccc;
  font-weight: bold;
}

.tela {
  background: #ccc;
}

.resultado-tela {
  font-weight: bold !important;
  font-size: 2em !important;
}
</style>