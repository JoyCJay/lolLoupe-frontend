<template>
    <div>
        this is for query!!!
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    props: {
        msg: String
    }
})
export default class Query extends Vue {
    msg!: string;
}
</script>
