<template>
  <div>
    <!-- Header -->
    <div class="header py-7 py-lg-8 pt-lg-9">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Bem vindo(a)!</h1>
              <p class="text-lead text-white">Informe sua nova senha nos campos a seguir.</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-alert :show="failure" variant="warning" class="m-2">As senhas não coincidem.</b-alert>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <h4>Defina sua nova senha: </h4>
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              name="password"
                              :rules="{required: true, min: 6}"
                              prepend-icon="ni ni-lock-circle-open"
                              placeholder="Senha"
                              type="password"
                              v-model="model.password">
                  </base-input>
                  <base-input alternative
                              class="mb-3"
                              name="password"
                              :rules="{required: true, min: 6}"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="Confirmação de senha"
                              v-model="model.passwordConfirmation">
                  </base-input>
                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">Redefinir senha</base-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <router-link to="/login" class="text-light"><small>Login</small></router-link>
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/register" class="text-light"><small>Criar conta</small></router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        model: {
          email: '',
          password: '',
          passwordConfirmation: '',
        },
        failure: false
      };
    },
    methods: {
      onSubmit() {
        if(this.model.password !== this.model.passwordConfirmation){
          this.failure = true
        } else {
          this.failure = false
        }
      }
    }
  };
</script>
