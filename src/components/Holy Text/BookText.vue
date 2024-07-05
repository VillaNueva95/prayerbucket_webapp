<template>
  <div v-if="text" class="bible-text">
    <h2>{{ book }} {{ chapter }} ({{ translation }})</h2>
    <p v-html="text"></p>
  </div>
  <div v-else class="placeholder-text">
    <p>Please select a book, translation, and chapter.</p>
  </div>
</template>

<script>
export default {
  name: 'BibleText',
  props: {
    book: String,
    chapter: Number,
    translation: String
  },
  data() {
    return {
      text: null
    };
  },
  watch: {
    book: 'fetchText',
    chapter: 'fetchText',
    translation: 'fetchText'
  },
  methods: {
    async fetchText() {
      if (this.book && this.chapter && this.translation) {
        // Replace with actual API call
        const response = await fetch(`https://api.biblica.com/v1/bibles/${this.translation}/passages/${this.book}.${this.chapter}`);
        const data = await response.json();
        this.text = data.content;
      } else {
        this.text = null;
      }
    }
  }
};
</script>

<style scoped>
.bible-text {
  font-family: 'Georgia', serif;
  line-height: 1.6;
}

.placeholder-text {
  text-align: center;
  color: #888;
}
</style>
