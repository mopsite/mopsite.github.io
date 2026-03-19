import DefaultTheme from 'vitepress/theme'

import Timeline from './components/Timeline.vue'
import Labels from './components/Labels.vue'

import './styles/vars.css'
import 'vitepress-markdown-timeline/dist/theme/index.css'
import 'virtual:group-icons.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Timeline', Timeline)
    app.component('Labels', Labels)
  }
}
