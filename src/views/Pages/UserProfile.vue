<template>
  <div>
    <div class="header pb-8 d-flex align-items-center"
        style="min-height: 230px;">
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-profile opacity-8"></span>
        <!-- Header container -->
      </b-container>
    </div>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="12" class="order-xl-1">
          <edit-profile-form></edit-profile-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue';
  import UserCard from './UserProfile/UserCard.vue';

  export default {
    components: {
      EditProfileForm,
      UserCard
    }
  };
</script>
<style>
.bg-profile {
  background: linear-gradient(90deg, rgba(127,27,125,1) 0%, rgba(58,33,125,1) 35%, rgba(121,190,223,1) 100%) !important;
}
</style>
