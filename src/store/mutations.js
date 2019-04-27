import {
    CHANGE_LANGUAGE
} from './mutation-types'
export default {
    [CHANGE_LANGUAGE](state, lang) {
        console.log('change luanguage', lang);
        state.luanguage = lang
    }
}