<template>
  <div>
    <RouterLink
      class="card-link"
      data-test="voltar"
      to="/"
    >Voltar</RouterLink>
    <div class="card mb-3">
      <div class="row">
        <div class="col-md-4">
          <img
            src="https://pbs.twimg.com/media/Ct9RTGCWAAADqFR.jpg"
            class="card-img"
            alt="Profile"
            style="margin: 30px;"
          >
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{thread.title}}</h5>
            <p class="card-text">{{thread.body}}</p>
            <p class="card-text"><small class="text-muted"><b>Criado em {{getDate()}}</b></small></p>
          </div>
        </div>
      </div>
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
  },
  methods: {
    getDate() {
      return new Date(this.thread.created_at).toLocaleDateString("pt-BR");
    }
  }
};
</script>