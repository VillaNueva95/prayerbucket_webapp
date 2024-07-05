<template>
  <div>
    <label for="book">Select Book:</label>
    <select id="book" @change="emitSelection" class="form-control">
      <option v-for="book in books" :key="book" :value="book">{{ book }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'BookSelector',
  data() {
    return {
      books: ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy'] // Add more books as needed
    };
  },
  methods: {
    emitSelection(event) {
      this.$emit('bookSelected', event.target.value);
    }
  }
};
</script>

<style scoped>
.form-control {
  width: 100%;
  margin-bottom: 10px;
}
</style>
