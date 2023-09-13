<template lang="">
  <div class="container mt-3">
    <form @submit.prevent="sendForm">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="example@example.com" v-model.trim="form.email" />
      </div>
      <div class="mb-3">
        <label for="subject" class="form-label">subject address</label>
        <input type="text" class="form-control" id="subject" v-model.trim="form.subject" />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Example textarea</label>
        <textarea class="form-control" id="message" rows="3" v-model.trim="form.message"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const endpoint = "http://localhost:8000/api/contact-message";
const emptyForm = { email: "", subject: "", message: "" }; //form di aprtenza
export default {
  data() {
    return {
      form: emptyForm, // form vuoto
    };
  },
  methods: {
    sendForm() {
      axios
        .post(endpoint, this.form)
        .then((res) => {
          this.form = emptyForm;
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => {});
    },
  },
};
</script>

<style lang=""></style>
