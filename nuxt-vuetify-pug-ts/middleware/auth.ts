import { NuxtContext } from 'nuxt';

export default function Auth({ store, redirect }: NuxtContext) {
    console.warn('auth called')
    if (store.state.user.token === '') {
        redirect("/login")
    }
}