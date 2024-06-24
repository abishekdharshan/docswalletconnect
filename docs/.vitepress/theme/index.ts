import DefaultTheme from 'vitepress/theme';
import ClaimZero from './components/ClaimZero.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('ClaimZero', ClaimZero);
  }
};
