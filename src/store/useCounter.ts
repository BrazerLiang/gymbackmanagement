import { defineStore } from "pinia";
import { ref } from 'vue'
export const useCounterStore = defineStore('Counter',()=>{
    const counter = ref(0)
    function increment() {
        counter.value++
    }
    return { counter, increment }
})