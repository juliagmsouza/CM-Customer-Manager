<template>
  <footer class="footer px-4">
    <b-container >
        <b-row align-v="center" align-h="center" class="justify-content-xl-between">
          <b-col class="d-flex justify-content-center">
            <div class="copyright text-center text-xl-left text-muted">
              © {{year}} <a href="" class="font-weight-bold ml-1" target="_blank">CM | Contact Manager</a>
            </div>
          </b-col>
        </b-row>
      </b-container>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
