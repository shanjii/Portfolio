export function ScrollHandler() {
    var height = window.innerHeight
    return window.scrollY > height / 4 ? true : false
}
