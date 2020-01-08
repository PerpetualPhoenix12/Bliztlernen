<template>
    <v-row justify="center">
        <v-card color="white" width="68%" height="170px" class="add-card" flat >
            <v-row justify="center" align="center" style="height:100%;" @click="addCard">
                <span class="add">+ ADD CARD</span>
            </v-row>
        </v-card>
    </v-row>
</template>

<style>
.add {
    line-height: 2em;
    border-bottom: 4px solid #3ccfcf;
    font-weight: 600;
    color: inherit;
}

.add-card {
    margin-top: 80px;
    transition: ease-out color .2s, ease-out border-bottom .2s;
    color: #455358 !important;
}

.add-card:hover {
    cursor: pointer;
}

.add-card:hover > * > span {
    color: #ffcd1f !important;
    border-bottom: 4px solid #ffcd1f !important;
}
</style>

<script>
export default {
    methods: {
        addCard() {
            this.$emit('addCard');
        }
    }
}
</script>