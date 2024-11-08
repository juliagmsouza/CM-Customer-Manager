<template>
  <div>
    <!-- Header -->
    <div class="header py-5 py-lg-6 pt-lg-7">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center pb-1">
            <img src="img/theme/logo.png" class="login-image" alt="...">
          </b-row>
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <p><h1 class="text-white">Bem vindo(a)!</h1></p>
              <p class="text-lead text-white">Entre com seus dados para acessar a plataforma.</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
     
    </div>
    <!-- Page content -->
    <b-container class="mt--9 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <h4>Faça seu login: </h4>
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              name="Email"
                              :rules="{required: true, email: true}"
                              prepend-icon="ni ni-email-83"
                              placeholder="Email"
                              v-model="model.email">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="Senha"
                              v-model="model.password">
                  </base-input>
                  <div class="text-center">
                    <base-button type="primary" native-type="submit" class="my-4">Entrar</base-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <router-link to="/password-reset" class="text-light"><small>Esqueci minha senha</small></router-link>
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
        }
      };
    },
    methods: {
      async onSubmit() {
        const authData = await authService.login(this.model.email, this.model.password);
        localStorage.setItem('authData', JSON.stringify(authData));
        this.$router.push({name: 'contacts'})
      }
    }
  };
</script>
<style lang="scss">
  .login-image{
    max-height: 8rem;
  }
</style>