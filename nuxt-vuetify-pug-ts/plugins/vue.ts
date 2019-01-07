declare global {
    interface Array<T> {
        fold(init: any, lambda: (init: any, element: T) => any)
    }
}

Array.prototype.fold = function (init: any, lambda: (init: any, element) => any) {
    this.forEach(item => lambda(init, item))
}
export { }
