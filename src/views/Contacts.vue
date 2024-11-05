<template>
  <div>
    <!-- BootstrapVue Done -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-icons">
    </base-header>

    <b-container fluid class="mt--7">
      <b-row class="justify-content-center">
        <b-col lg="12">
          <card header-classes="bg-transparent">
            <b-row align-h="between">
              <b-col cols="2">
                <h3 class="mb-0">Contatos</h3>
              </b-col>
              <b-col cols="2" class="d-flex justify-content-end">
                <b-form-checkbox v-model="favorited">Favoritos</b-form-checkbox>
              </b-col>
            </b-row>
            <hr class="my-3">
            <b-row class="icon-examples">
              <b-col v-for="contact in contacts" :key="contact.id" lg="6" md="12">
                <button type="button" class="btn-icon-clipboard" v-clipboard:copy="'ni ni-album-2'"
                  @click="openDetailModal(contact)">
                  <div>
                    <div class="circle">{{getInitials(contact.nome)}}</div>
                    <span>{{ contact.nome }}</span>
                  </div>
                </button>
              </b-col>
            </b-row>
          </card>
        </b-col>
      </b-row>
    </b-container>
    <b-modal id="detail-contact-modal" size="xl" :title="SelectedContactTitle" title-tag="h2">
      <template #modal-footer>
        <b-row>
          <b-col>
            <b-button variant="primary" @click="edit ? saveEdit() : startEdit()">
              <i class="ni" :class="edit ?  'ni-check-bold' : 'ni-settings'"></i>
              {{ edit ? 'Salvar' : 'Editar'}}
            </b-button>
            <b-button v-if="edit" variant="danger" @click="edit = !edit">Cancelar</b-button>
          </b-col>
        </b-row>
      </template>
      <div v-if="edit">
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
              <b-form-checkbox v-model="contato.favorited" name="check-button" switch>
                Favorito
              </b-form-checkbox>
            </b-col>
          </b-row>
        </div>

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
      </div>
      <div v-else>
        <div class="pl-lg-4">
          <b-row>
            <b-col lg="6">
              <h4>Nome</h4>
              {{ contato.nome }}
            </b-col>
            <b-col lg="6">
              <h4>E-mail</h4>
              {{ contato.email }}
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col lg="6">
              <h4>Telefone</h4>
              {{ contato.telefone }}
            </b-col>
            <b-col lg="6" class="d-flex align-items-center">
             <h4>{{ contato.favorito ? 'Contato Favoritado!' : '' }}</h4>
              
            </b-col>
          </b-row>
        </div>
        <hr>
        <div class="pl-lg-4 mt-2">
          <b-row>
            <b-col md="12">
              <h4>Endereço</h4>
              {{ contato.rua }}
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col lg="4">
              <h4>Cidade</h4>
              {{ contato.cidade }}
            </b-col>
            <b-col lg="4">
              <h4>Estado</h4>
              {{ contato.estado }}
            </b-col>
            <b-col lg="4">
              <h4>CEP</h4>
              {{ contato.cep }}
            </b-col>
          </b-row>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
  import Vue from 'vue'
  import VueClipboard from 'vue-clipboard2'
  import BaseHeader from '@/components/BaseHeader';

  Vue.use(VueClipboard)
  export default {
    name: 'icons',
    components: {
      BaseHeader
    },
    data() {
      return {
        edit: false,
        favorited: false,
        SelectedContactTitle: '',
        contacts: [
          {
            "id": 4,
            "nome": "Serviço de manutenção TESTE"
          },
          {
            "id": 5,
            "nome": "Luia Jouza"
          },
          {
            "id": 6,
            "nome": "Samuca abc"
          },
          {
            "id": 7,
            "nome": "Lanches Larica"
          },
          {
            "id": 8,
            "nome": "Cachorro quente pracinha"
          },
          {
            "id": 9,
            "nome": "Dom Pedro"
          },
        ],
        contato: {
          "favorited": false,
          "nome": "sdfsdfs",
          "email": "asdasdas",
          "telefone": "asdasdas",
          "favorito": true,
          "rua": "asdasdasda",
          "cidade": "asdasdsad",
          "estado": "asdasdsa",
          "cep": "asdasdas"
        }
      }
    },
    methods: {
      onCopy() {
        this.$notify({
          type: 'info',
          message: 'Copied to clipboard'
        })
      },
      getInitials(name) {
        if (!name.trim()) return ""; // Retorna vazio se a string for vazia ou só tiver espaços

        const words = name.trim().split(" ");

        if (words.length === 1) {
          // Caso de palavra única: retorna a primeira e segunda letras
          const word = words[0];
          return word.length > 1 ? word[0].toUpperCase() + word[1].toUpperCase() : word[0].toUpperCase();
        }

        // Caso de múltiplas palavras
        const firstInitial = words[0][0].toUpperCase();
        const lastInitial = words[words.length - 1][0].toUpperCase();

        return firstInitial + lastInitial;
      },
      openDetailModal(selectedItem) {
        this.SelectedContactTitle = `Detalhes de ${selectedItem.nome}`
        // Fazer query aqui
        this.$bvModal.show('detail-contact-modal')
      },
      startEdit() {
        console.log('asdasdsad')
        this.edit = !this.edit
      },
      saveEdit() {
        this.edit = !this.edit
      }

    }
  };
</script>
<style>
  .circle {
    width: 50px;
    /* Defina a largura do círculo */
    height: 50px;
    /* Defina a altura do círculo */
    background-color: #3A217D;
    /* Fundo cinza claro */
    color: #FFF;
    /* Cor do texto cinza escuro */
    border-radius: 50%;
    /* Torna a div circular */
    display: flex;
    align-items: center;
    /* Centraliza verticalmente */
    justify-content: center;
    /* Centraliza horizontalmente */
    font-size: 1.5em;
    /* Tamanho da fonte */
    font-weight: bold;
    /* Deixa o texto em negrito */
  }

  .bg-icons {
    /* background: rgb(127,27,125); */
    background: linear-gradient(90deg, rgba(127, 27, 125, 1) 0%, rgba(58, 33, 125, 1) 35%, rgba(121, 190, 223, 1) 100%);
  }
</style>