<template>
  <div class="Todos">

    <label>Enter Something: </label>
    <input type="text" v-model="inputData" />
    <button @click="pushArray()">Submit</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      inputData: "",
    };
  },
  
  methods: {
    pushArray() {
      this.arr.push(this.inputData);
      console.log(this.arr);
    },
  },
};
</script>

<style scoped></style>
