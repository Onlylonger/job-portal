export function createIntersection(insideTime = 1, outsideTime = 1) {
  const INSIDE_COUNTE = Symbol('inside_count')
  const OUTSIDE_COUNTE = Symbol('ouside_count')
  const cache = new Map()

  // Register IntersectionObserver
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target } = entry
      target[INSIDE_COUNTE] ?? (target[INSIDE_COUNTE] = insideTime)
      target[OUTSIDE_COUNTE] ?? (target[OUTSIDE_COUNTE] = outsideTime)

      const inClassNames = cache.get(target)

      // observation target is inside viewport
      if (entry.intersectionRatio > 0) {
        target.className += ` ${inClassNames}`
        io.unobserve(target)
      }
    })
  })

  const directive = {
    mounted(el, binding) {
      io.observe(el)
      cache.set(el, binding.value)
    },
    unMounted(el) {
      io.unobserve(el)
      cache.delete(el)
    }
  }

  return directive
}

export const directive = createIntersection()
