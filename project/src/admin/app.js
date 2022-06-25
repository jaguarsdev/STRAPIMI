import Logo from './extensions/assets/myimages/logo.jpg';
import fa_lang from './extensions/translations/fa.json';
// import languageNativeNames from '@strapi/admin/admin/src/translations/languageNativeNames';

export default {
  config: {
    auth: {
      logo: Logo,
    },
    // languageNativeNames: {
    //   en: 'English',
    //   fa: 'فارسی',
    // },
    locales: ['fa'],
    translations: {
      fa: fa_lang,
    },
    head: {
      favicon: Logo,
    },
    menu: {
      logo: Logo,
    },
    tutorials: false,
    theme: {
      colors: {
        primary100: '#eaf5ff',
        primary200: '#b8e1ff',
        primary500: '#66b7f1',
        primary600: '#0c75af',
        primary700: '#006096',
        danger700: '#b72b1a',
        // danger100: '#011627', // TOGGLE OFF BG
        // danger700: '#bf4c69', // TOGGLE OFF COLOR
        // neutral0: '#081d30', // BACKGROUND SIDEBAR
        // neutral100: '#011627', // BACKGROUND CONTENT
        // neutral150: '#081d30', // DISABLED BUTTON BG
        // neutral200: '#001223', // LINE THROUGH MIDDLE
        // neutral500: '#c4c5c5', // MENU IDLE COLOR
        // neutral600: '#98adbe', // MENU HOVER COLOR
        // neutral700: '#98adbe', // MENU ACTIVE ICON COLOR
        // neutral800: '#c4c5c5', // TITLE COLORS
        // neutral900: '#011627', // TOOLTIP BG
        // primary100: '#011627', // MENU ACTIVE BG
        // primary200: '#081d30', // PLUS SIGN BG
        // primary500: '#7b9960', // PRIMARY BUTTON HOVER
        // primary600: '#a5c67c', // PRIMARY BUTTON COLOR
        // primary700: '#8db3ed', // HIGHLIGHT COLOR
        // secondary100: '#081d30', // INFO BOX COLOR
        // success100: '#081d30', // SUCCESS BOX BG
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
