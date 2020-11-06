export const scrollAnimation = (ref, toTop) => {
    if (ref && ref.current) {
        let start = ref.current.scrollTop
        let step = (toTop - start) / 10
        let index = 0
        let interval = setInterval(() => {
            ref.current.scrollTo(0, start)
            start += step
            if (index >= 10)
            clearInterval(interval)
            index ++
        }, 10)
    }
}