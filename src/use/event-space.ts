import { computed, ref } from "vue";

export default function useEventSpace() {
    const capacity = ref(4);
    const attendings = ref(["Alice", "Jack"]);
    const spacesLeft = computed(() => {
        return capacity.value - attendings.value.length;
    });

    function increaseCapacity() {
        capacity.value++;
    }

    return { capacity, attendings, spacesLeft, increaseCapacity };
}
