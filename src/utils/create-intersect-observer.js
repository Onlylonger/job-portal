export function createIntersection(config) {
  const cache = new Map()

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target } = entry

      const { inside, once } = cache.get(target)

      // observation target is inside viewport
      if (entry.isIntersecting) {
        if (inside && typeof inside === 'function') {
          inside(target)
          if (once) {
            rm(target)
          }
        }
      }
    })
  }, config)

  function rm(el) {
    io.unobserve(el)
    cache.delete(el)
  }

  function observe(
    el,
    inside,
    config = {
      once: true
    }
  ) {
    io.observe(el)

    cache.set(el, {
      ...config,
      inside
    })

    return () => {
      rm(el)
    }
  }

  return observe
}
