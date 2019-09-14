<script>
import axios from "axios";

const URL = "http://localhost:1338";

export default {
  data() {
    return {
      threads: []
    };
  },
  async created() {
    try {
      const { data } = await axios.get(`${URL}/threads`);
      this.threads = data.data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<template>
  <div>
    <div class="text-center">
      <h1>Semana 7</h1>
      <p>Nada melhor que trabalhar com Vue em uma sexta-feira 13!</p>
    </div>
    <div class="row">
      <div
        class="card col-lg-5"
        style="margin: 10px;"
        v-for="(thread, index) in threads"
        :key="index"
        data-test="thread"
      >
        <div class="card-body">
          <h5 class="card-title">{{thread.title}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{thread.user.name}}</h6>
          <p class="card-text">{{thread.body}}</p>
        </div>
        <RouterLink
          class="card-link"
          data-test="link"
          :to="{ name: 'detail', params: { slug: thread.slug } }"
        >Continuar lendo...</RouterLink>
        <div class="card-footer">
          {{thread.total_replies}} respostas
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card-text {
  max-height: 80px;
  overflow: hidden;
}

.card-footer {
  margin: 10px;
}

.card-link {
  margin-left: 10px;
}
.row {
  display: flex;
  justify-content: space-evenly;
}
</style>