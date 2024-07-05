<template>
    <div>
      <label for="verse">Select Verse:</label>
      <select id="verse" @change="emitSelection" :disabled="!chapter" class="form-control">
        <option v-for="verse in verses" :key="verse" :value="verse">{{ verse }}</option>
      </select>
      <div>
        <p>Verse Text Component</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VerseText',
    props: {
      chapter: Number
    },
    data() {
      return {
        verses: [] // Will be populated based on the selected chapter
      };
    },
    watch: {
      chapter(newChapter) {
        if (newChapter) {
          // Fetch or generate verse numbers based on the chapter
          this.verses = this.getVersesForChapter(newChapter);
        } else {
          this.verses = [];
        }
      }
    },
    methods: {
      getVersesForChapter(chapter) {
        // Mock data, replace with actual verse counts for each chapter
        const chapterVerses = {
          1: 31,
          2: 25,
          3: 24,
          4: 26,
          5: 32,
          // ... more chapters
        };
        return Array.from({ length: chapterVerses[chapter] }, (_, i) => i + 1);
      },
      emitSelection(event) {
        this.$emit('verseSelected', event.target.value);
      }
    }
  };
  </script>
  
  <style scoped src="@/assets/styles.css"></style>
  