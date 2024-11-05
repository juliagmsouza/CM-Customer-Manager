<template>
  <card>
    <b-row align-v="center" slot="header">
      <b-col cols="8">
        <h3 class="mb-0">Adicionar Contato</h3>
      </b-col>
    </b-row>

    <b-form @submit.prevent="updateProfile">
      <h6 class="heading-small text-muted mb-4">Dados do contato</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col lg="6">
            <base-input type="text" label="Nome" placeholder="Nome" v-model="contato.nome">
            </base-input>
          </b-col>
          <b-col lg="6">
            <base-input type="email" label="E-mail" placeholder="contato@email.com" v-model="contato.email">
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="6">
            <base-input type="text" label="Telefone" placeholder="(31) 99999-9999" v-model="contato.telefone">
            </base-input>
          </b-col>
          <b-col lg="6" class="d-flex align-items-center">
            <b-form-checkbox v-model="contact.favorited" name="check-button" switch>
              Favorito
            </b-form-checkbox>
          </b-col>
        </b-row>
      </div>
      <hr class="my-4">

      <!-- Address -->
      <h6 class="heading-small text-muted mb-4">Dados de Endereço</h6>

      <div class="pl-lg-4">
        <b-row>
          <b-col md="12">
            <base-input type="text" label="Endereço" placeholder="Rua Um Nº 33, Bairro lagoa" v-model="contato.rua">
            </base-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="4">
            <base-input type="text" label="Cidade" placeholder="Cidade" v-model="contato.cidade">
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input type="text" label="Estado" placeholder="MG" v-model="contato.estado">
            </base-input>
          </b-col>
          <b-col lg="4">
            <base-input label="CEP" placeholder="35400-000" v-model="contato.cep">
            </base-input>
          </b-col>
        </b-row>
      </div>
    </b-form>
    <b-button variant="primary" class="float-right">Adicionar</b-button>
  </card>
</template>
<script>
  export default {
    data() {
      return {
        contato: {
          "favorited": false,
          "nome": "",
          "email": "",
          "telefone": "",
          "favorito": false,
          "rua": "",
          "cidade": "",
          "estado": "",
          "cep": ""
        }
      };
    },
    methods: {
      updateProfile() {
        alert('Your data: ' + JSON.stringify(this.user));
      }
    }
  };
</script>
<style></style>