<template>
    <div class="bible-screen">
      <div class="header">
      </div>
      <div class="last-read">
        <div class="text-wrapper">Last Read</div>
        <div class="book-details">
          <div>Genesis</div>
          <div>Chapter 1</div>
        </div>
      </div>
      <div class="tabs-container">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeTab === 'book' }" @click="activeTab = 'book'">Book</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeTab === 'chapter' }" @click="activeTab = 'chapter'">Chapter</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeTab === 'verse' }" @click="activeTab = 'verse'">Verse</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeTab === 'translation' }" @click="activeTab = 'translation'">Translation</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeTab === 'saved' }" @click="activeTab = 'saved'">Saved</a>
          </li>
        </ul>
        <div v-if="activeTab === 'book'">
          <ul>
            <li v-for="book in books" :key="book.name">
              {{ book.name }} - {{ book.chapters }} CHAPTERS - {{ book.version }}
            </li>
          </ul>
        </div>
        <div v-if="activeTab === 'chapter'">
          <ul>
            <li v-for="chapter in selectedBookChapters" :key="chapter.number">
              Chapter {{ chapter.number }} - {{ chapter.verses }} Verses
            </li>
          </ul>
        </div>
        <div v-if="activeTab === 'verse'">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li class="page-item" v-for="n in selectedChapterVerses" :key="n">
                <a class="page-link" href="#">{{ n }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div v-if="activeTab === 'translation'">
          <ul>
            <li v-for="version in versions" :key="version">{{ version }}</li>
          </ul>
        </div>
        <div v-if="activeTab === 'saved'">
          <div>Saved Verses will appear here.</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Scriptures',
    data() {
      return {
        activeTab: 'book',
        books: [
          { name: 'Genesis', chapters: 50, version: 'KJV' },
          { name: 'Exodus', chapters: 40, version: 'KJV' },
          { name: 'Leviticus', chapters: 27, version: 'KJV' },
          { name: 'Numbers', chapters: 36, version: 'KJV' }
        ],
        selectedBookChapters: [
          { number: 1, verses: 31 },
          { number: 2, verses: 25 },
          { number: 3, verses: 24 }
        ],
        selectedChapterVerses: 31,
        versions: ['KJV', 'NIV', 'ESV']
      };
    }
  };
  </script>
  
  <style scoped>
  .bible-screen {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f8f9fa;
  }
  
  .group {
    display: flex;
    align-items: center;
  }
  
  .text-wrapper {
    color: #672cbc;
    font-family: "Poppins-Bold", Helvetica;
    font-size: 20px;
    font-weight: 700;
  }
  
  .search-icon {
    height: 24px;
    width: 24px;
    cursor: pointer;
  }
  
  .welcome {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .text-wrapper-2 {
    color: #8789a3;
    font-family: "Poppins-Medium", Helvetica;
    font-size: 18px;
    font-weight: 500;
    opacity: 0.8;
  }
  
  .text-wrapper-3 {
    color: #230e4e;
    font-family: "Poppins-SemiBold", Helvetica;
    font-size: 24px;
    font-weight: 600;
  }
  
  .last-read {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f0f0f0;
    margin: 20px;
    border-radius: 10px;
  }
  
  .book-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #230e4e;
    font-family: "Poppins-Regular", Helvetica;
    font-size: 18px;
  }
  
  .tabs-container {
    padding: 20px;
  }
  
  .nav-pills .nav-link {
    border-radius: 50px;
    font-size: 16px;
    font-family: "Poppins-Medium", Helvetica;
    color: #5F31E2;
}
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 10px;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .page-item .page-link {
    border-radius: 50px;
    margin: 0 5px;
  }


  </style>
  