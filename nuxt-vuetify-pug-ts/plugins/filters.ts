import Vue from 'vue'

Vue.filter('overflow', (data: string, len: number) => {
    if (data.length > len) {
        return data.substring(0, len) + '...'
    }
    return data
})
let filter = (data: Object[], childkey: string, lambda: (o: Object) => boolean) => {
    return data.filter(e => {
        if (lambda(e)) {
            return true
        } else if (e.hasOwnProperty(childkey)) {
            e[childkey] = filter(e[childkey], childkey, lambda)
            return true
        }
        return false
    })
}
Vue.filter('searchTree', filter)
