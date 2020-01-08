<template>
<v-row justify="center">
    <v-card color="white" width="68%" height="200px" class="set-card" flat>
           <v-row class="card_toolbar">
               <v-col>
                <span class="card_number">{{ number }}</span>
               </v-col>
               <v-col class="text-right">
                   <v-icon class="card_icon" @click="deleteCard">mdi-delete</v-icon>
               </v-col>
           </v-row>
           <v-row class="card_content">
               <v-row align="center">
                <v-col>
                    <v-text-field
                        v-model="tempCard.term" 
                        hint="Term" 
                        label="Enter term"
                        color="black"  
                        class="term_field"
                        single-line
                        clearable
                        persistent-hint
                        ></v-text-field>
                </v-col>
               </v-row>
               <v-row align="center">
                <v-col>
                        <v-text-field 
                        v-model="tempCard.definition"
                        hint="Definition" 
                        label="Enter definition"
                        color="black"  
                        class="definition_field"
                        single-line
                        clearable
                        persistent-hint
                        ></v-text-field>
                </v-col>
               </v-row>
           </v-row> 
    </v-card>
</v-row>
</template>

<script>
export default {
    data() {
        return {
            tempCard: this.card
        }
    },
    props: ['card', 'number'],
    methods: {
        deleteCard() {
            this.$emit('deleteCard', this.card.id);
        }
    },
    watch: {
        'card.term': function(newVal) {
            const newData = { id: this.card.id, term: newVal };
            this.$emit('updateCardTerm', newData);
        },
        'card.definition': function(newVal) {
            const newData = { id: this.card.id, definition: newVal };
            this.$emit('updateCardDefinition', newData);
        }
    }
}
</script>

<style>

.set-card {
    margin-top: 80px;
}

.card_number {
    padding-left: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #455358;
    opacity: 0.5;
}

.card_icon {
    padding-right: 10px;
    color: #455358 !important;
    transition: color ease-in .2s;
    height: 100%;
}

.card_icon:hover {
    cursor: pointer;
    color: red !important;
}

.card_toolbar {
    border-bottom: 1px solid #455358;
    border-radius: 3px;
    width: 100%;
    margin-left: 0px !important;
}

.term_field, .definition_field {
    width: 85%;
}

.card_content {
    margin-left: 0px !important;
}

.card_content > .col, .card_content {
    height: 80%;
    width: 100%;
}

.card_content > .row > .col {
    padding-left: 5%;
}

</style>