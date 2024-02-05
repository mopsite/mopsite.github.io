import { categories } from '../../data/site.data'

export default {
  paths() {
    return categories.map(pkg => {
      return { params: { pkg } }
    })
  }
}
