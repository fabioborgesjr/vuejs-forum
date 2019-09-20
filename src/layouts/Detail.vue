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
            src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mDzZAK1fQ0eucbCKEx1s6eRgN7kWAsapaeZew%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1"
            class="card-img"
            alt="Profile"
            style="margin: 30px;"
          />
        </div>
        <div
          class="col-md-7"
        >
          <div class="card-header">
            <h5 class="card-title">{{thread.title}}</h5>
          </div>
          <div class="card-body">
            <p class="card-text">{{thread.body}}</p>
          </div>
          <div class="card-footer">
            {{thread.total_replies}} respostas
            <p class="card-text">
              <small class="text-muted">
                <b>Criado em {{getDate()}}</b>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>

    <answer-vue
      v-for="(reply, index) in thread.replies"
      :key="index"
      :reply="reply"
    />
  </div>
</template>

<script>
import axios from "axios";
import AnswerVue from "@/layouts/Answer";

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
      const { data } = await axios.get(`${URL}/api/threads/${slug}`);
      this.thread = data.data;
    } catch (error) {
      this.$router.push("/404");
    }
  },
  methods: {
    getDate() {
      return new Date(this.thread.created_at).toLocaleDateString("pt-BR");
    }
  },
  components: {
    AnswerVue
  }
};
</script>

<style lang="css" scoped>
.col-md-7 {
  margin: 30px 0 0 0;
}

.card-body {
  height: 200px;
}
</style>