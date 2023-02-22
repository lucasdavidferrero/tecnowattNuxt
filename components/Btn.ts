import { h, defineComponent, ref } from 'vue'
export default defineComponent({
    props: {
        brand: {
            type: String //just use String
        }
    },
    setup(props) {
        /* you can get access to `props.brand` here with right type */
        const count = ref(0)
        return () => h('div', props.brand + count.value)
    }
})
