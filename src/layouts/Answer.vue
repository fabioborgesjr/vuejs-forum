<template>
  <div class="card" data-test="resposta">
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <div class="blockquote-footer">
          <cite title="Source Title">{{reply.user.name}}</cite>
        </div>
        <p>{{reply.body}}</p>
        <a class="btn btn-primary">Goxxxxtei</a>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reply: Object
  },
  methods: {
    getDate() {
      return new Date(this.thread.created_at).toLocaleDateString("pt-BR");
    }
  }
};
</script>

<style>
.card {
  margin: 10px;
}
</style>