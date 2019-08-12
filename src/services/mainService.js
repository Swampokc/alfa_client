import api from '@/api'

export default {
  top5() {
    return api().get(`top5`)
  },
  full() {
    return api().get(`full`)
  }
}
