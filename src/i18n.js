import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
export const loadedLanguages = ['zh_CN'];

function loadDefaultLocaleMessages () {
  let lang = process.env.VUE_APP_I18N_LOCALE || loadedLanguages[0];
  import(`@/locales/${lang}`).then( msgs => {
    const messages = {};
    messages[lang] = msgs.default;
    console.log('messages', messages);
    i18n.setLocaleMessage(lang, msgs.default)
   
  }).catch( e => {
    console.log('e', e);
  })
  // const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  // const messages = {}
  // locales.keys().forEach(key => {
  //   const matched = key.match(/([A-Za-z0-9-_]+)\./i)
  //   if (matched && matched.length > 1) {
  //     const locale = matched[1]
  //     messages[locale] = locales(key)
  //   }
  // })
  // return messages
}

function setI18nLanguage (lang) {
  i18n.locale = lang
  // axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector('html').setAttribute('lang', lang)
  return lang
}


export function loadLanugageAsync (lang) {
  debugger;
  if (i18n.locale !== lang) {
    if (loadedLanguages.includes(lang)) return Promise.resolve(setI18nLanguage(lang))
    return import(`@/locales/${lang}`).then( msgs => {
       i18n.setLocaleMessage(lang, msgs.default)
        loadedLanguages.push(lang) 
        return setI18nLanguage(lang)
    })
  }
  return Promise.resolve(lang);

}

export const i18n = new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadDefaultLocaleMessages()
})
