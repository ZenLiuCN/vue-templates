import Vue from 'vue'

import { Api } from '~/api/api';

Vue.filter('overflow', (data: string, len: number) => {
    if (data.length > len) {
        return data.substring(0, len) + '...'
    }
    return data
})

// Vue.prototype.$api=new Api(axios,host)