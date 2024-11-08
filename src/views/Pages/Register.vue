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
              <p class="text-lead text-white">Entre com seus dados para criar uma conta.</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
     
    </div>
    <!-- Page content -->
    <b-container class="mt--8">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8" >
          <b-card no-body class="bg-secondary border-0">
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <h4>Registre suas credenciais</h4>
              </div>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="Nome"
                              name="Name"
                              :rules="{required: true}"
                              v-model="model.name">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-email-83"
                              placeholder="Email"
                              name="Email"
                              :rules="{required: true, email: true}"
                              v-model="model.email">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-lock-circle-open"
                              placeholder="Senha"
                              type="password"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              v-model="model.password">
                  </base-input>
                  <b-row class=" my-4">
                    <b-col cols="12">
                    </b-col>
                  </b-row>
                  <div class="text-center">
                    <b-button type="submit" variant="primary" class="mt-4">Criar Conta</b-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <router-link to="/login" class="text-light"><small>Login</small></router-link>
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
    name: 'register',
    data() {
      return {
        model: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async onSubmit() {
       await authService.createUser(this.model)
       alert('Cadastro realizado com sucesso')
       this.$router.push({name: 'login'})
      }
    }

  };
</script>
<style></style>
