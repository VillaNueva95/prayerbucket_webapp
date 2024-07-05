<template>
  <div>
    <label for="translation">Select Translation:</label>
    <select id="translation" @change="emitSelection" class="form-control">
      <option v-for="translation in translations" :key="translation" :value="translation">{{ translation }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'TranslationSelector',
  data() {
    return {
      translations: ['NIV', 'KJV', 'ESV', 'NASB'] // Add more translations as needed
    };
  },
  methods: {
    emitSelection(event) {
      this.$emit('translationSelected', event.target.value);
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
