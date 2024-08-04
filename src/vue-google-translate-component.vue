// GoogleTranslate.vue
<template>
  <div>
    <div id="google_translate_element" style="display:none;"></div>
    <select v-model="selectedLanguage" @change="changeLanguage">
      <option value="">Select Language</option>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
      <option value="it">Italiano</option>
      <option value="ja">日本語</option>
      <option value="zh-CN">中文 (简体)</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'GoogleTranslate',
  data() {
    return {
      selectedLanguage: ''
    }
  },
  mounted() {
    this.loadGoogleTranslate();
  },
  methods: {
    loadGoogleTranslate() {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,es,fr,de,it,ja,zh-CN',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false
        }, 'google_translate_element');
      }
    },
    changeLanguage() {
      if (this.selectedLanguage) {
        const selectElement = document.querySelector('.goog-te-combo');
        if (selectElement) {
          selectElement.value = this.selectedLanguage;
          selectElement.dispatchEvent(new Event('change'));
        }
      }
    }
  }
}
</script>

<style scoped>
select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
}
</style>
