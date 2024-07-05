<template>
  <div>
    <label for="chapter">Select Chapter:</label>
    <select id="chapter" @change="emitSelection" :disabled="!book" class="form-control">
      <option v-for="chapter in chapters" :key="chapter" :value="chapter">{{ chapter }}</option>
    </select>
    <div>
      <p>Chapter Text Component</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChapterText',
  props: {
    book: String
  },
  data() {
    return {
      chapters: [] // Will be populated based on the selected book
    };
  },
  watch: {
    book(newBook) {
      if (newBook) {
        // Fetch or generate chapter numbers based on the book
        this.chapters = this.getChaptersForBook(newBook);
      } else {
        this.chapters = [];
      }
    }
  },
  methods: {
    getChaptersForBook(book) {
      // Mock data, replace with actual chapter counts for each book
      const bookChapters = {
        'Genesis': 50,
        'Exodus': 40,
        'Leviticus': 27,
        'Numbers': 36,
        'Deuteronomy': 34
      };
      return Array.from({ length: bookChapters[book] }, (_, i) => i + 1);
    },
    emitSelection(event) {
      this.$emit('chapterSelected', event.target.value);
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
