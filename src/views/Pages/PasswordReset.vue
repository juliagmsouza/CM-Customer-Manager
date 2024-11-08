<template>
  <div class="pb-6">
    <!-- Header -->
    <div class="header py-5 py-lg-6 pt-lg-7">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center pb-1">
            <img src="img/theme/logo.png" class="login-image" alt="...">
          </b-row>
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Bem vindo(a)!</h1>
              <p class="text-lead text-white">Insira seu email para recuperar o acesso.</p>
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
            <b-alert :show="success" variant="info" class="m-2">O link de recuperação foi enviado para este
              e-mail.</b-alert>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <h4>Informe seu e-mail: </h4>
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative class="mb-3" name="Email" :rules="{required: true, email: true}"
                    prepend-icon="ni ni-email-83" placeholder="Email" v-model="model.email">
                  </base-input>
                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">Enviar link</base-button>
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
  import authService from '../../services/auth-service';
  export default {
    data() {
      return {
        model: {
          email: '',
          password: '',
          rememberMe: false
        },
        success: false
      };
    },
    methods: {
      async onSubmit() {
        await authService.passwordReset(this.model.email)
        this.success = true
      }
    }
  };
</script>