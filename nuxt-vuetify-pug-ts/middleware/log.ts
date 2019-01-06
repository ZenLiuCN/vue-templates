import { NuxtContext } from 'nuxt';

export default function Log(ctx: NuxtContext) {
    console.warn('log middleware called')
}