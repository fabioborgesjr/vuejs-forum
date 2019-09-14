<template>
  <div>
    <div class="card-body">
      <h3 class="card-title">Ops... </h3>
      <p class="card-text">Parece que você veio parar no lugar errado.</p>
      <RouterLink
        class="card-link"
        data-test="voltar"
        to="/"
      >Voltar</RouterLink>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const URL = "http://localhost:1338";

export default {
  data() {
    return {
      thread: []
    };
  },
  async created() {
    const slug = this.$route.params.slug;
    try {
      const { data } = await axios.get(`${URL}/threads/${slug}`);
      this.thread = data.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
</style>