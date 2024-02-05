import { tags } from '../../data/site.data'

export default {
  paths() {
    return tags.map(pkg => {
      return { params: { pkg } }
    })
  }
}
