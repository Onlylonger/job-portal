import { directive as intersectDirective } from './intersect'
import { directive as inDirective } from './in'

export const Intersection = {
  install(app) {
    app.directive('intersect', intersectDirective)
    app.directive('in', inDirective)
  }
}
