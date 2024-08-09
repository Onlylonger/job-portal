import { createIntersection } from '@/utils/create-intersect-observer'

const ob = createIntersection()

export const Intersection = {
  install(app) {
    app.directive('in', {
      mounted(el, binding) {
        ob(el, () => {
          el.className += ` ${binding.value}`
        })
      }
    })
  }
}
