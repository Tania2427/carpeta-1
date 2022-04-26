<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ acudit }}
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "AboutView",
  data() {
    return {
      post: null,
      acudit: "",
    };
  },
  mounted() {
    console.log("entra");
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => (this.acudit = response.data.value));
  },
};
</script>
