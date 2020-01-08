<template>
  <div style="height:100%;">
    <Navbar />
    <v-form ref="form">
        <v-card height="380" flat>
                <v-row style="height:190px;">
                    <v-col cols="2"></v-col>
                    <v-col>
                        <v-row align="center" style="height:100%;">
                        <span class="card_title">Create a new set</span>
                        </v-row>
                    </v-col>
                    <v-col>
                        <v-row align="center" justify="center" style="height:100%;">
                            <v-btn color="#3ccfcf" class="create_btn text-capitalize" depressed large @click="submit">
                                Create
                            </v-btn>
                        </v-row>
                    </v-col>
                </v-row>
            <v-row style="height:190px;">
                <v-col cols="2"></v-col>
                <v-col cols="3">
                    <v-row align="center">
                        <v-text-field
                        label="Subject, chapter, unit..." 
                        hint="Title" 
                        color="black"  
                        v-model="set.title"
                        single-line
                        clearable
                        persistent-hint
                        ></v-text-field>
                    </v-row>
                </v-col>
                <v-col cols="2"></v-col>
                <v-col cols="1" align-self="end">
                    <span>Visible to:</span><br />
                    <span class="setting" @click="dialog=!dialog">{{ set.visible }}</span>
                </v-col>
                <v-col cols="1" align-self="end">
                    <span>Editable by:</span><br />
                    <span class="setting" @click="dialog=!dialog">{{ set.editable }}</span>
                </v-col>
                <v-col cols="1" align-self="end">
                    <v-row justify="center">
                        <v-btn color="#3ccfcf" class="desc_btn text-lowercase" @click="dialog2=true;" depressed small fab>
                            i
                        </v-btn>
                    </v-row>
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
        </v-card>
            <CreateSetCard 
            v-for="(card, index) in cards" 
            :key="card.id" 
            :card="card" 
            :number="index + 1" 
            @deleteCard="deleteCard"
            @updateCardTerm="updateCardTerm"
            @updateCardDefinition="updateCardDefinition"
            />
            <AddCard @addCard="addCard" />


            <v-row justify="end" class="mt-12" style="width:85%;">
                <v-btn color="#3ccfcf" class="create_btn large btn_btm text-capitalize" @click="submit" width="170" height="70" depressed >
                    Create
                </v-btn>
            </v-row>


    </v-form>

        <v-dialog max-width="800px" v-model="dialog" color="white" persistent no-click-animation>
            <v-card>
                <v-toolbar color="#303C9B" class="mb-12 white--text " flat>
                    <v-toolbar-title>Settings</v-toolbar-title>

                    <v-spacer></v-spacer>
                    
                    <v-toolbar-items>
                        <v-icon @click="dialog=false;">mdi-close</v-icon>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <v-row class="mb-12">
                        <v-col>
                            <span>Visible to:</span>
                            <v-select
                                label="Filled style"
                                :items="['Everyone', 'Password', 'Me']"
                                v-model="set.visible"
                                single-line
                            ></v-select>
                        </v-col>
                        <v-col>
                            <span>Editable by:</span>
                            <v-select
                                label="Filled style"
                                :items="['Me', 'Password']"
                                v-model="set.editable"
                                single-line
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-btn color="#3ccfcf" @click="dialog=false" width="100%" class="white--text" depressed>
                            Save
                        </v-btn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>

        <v-dialog max-width="800px" v-model="dialog2" color="white" persistent no-click-animation>
            <v-card>
                <v-toolbar color="#303C9B" class="mb-12 white--text" flat>
                    <v-toolbar-title>Description</v-toolbar-title>

                    <v-spacer></v-spacer>
                    
                    <v-toolbar-items>
                        <v-icon @click="dialog2=false;">mdi-close</v-icon>
                    </v-toolbar-items>
                </v-toolbar>
                <v-card-text>
                    <v-row class="mb-12">
                        <v-col>
                        <v-text-field
                        color="black"  
                        v-model="set.description"
                        label="Enter description"
                        hint="Description"
                        single-line
                        clearable
                        persistent-hint=""
                        ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-btn color="#3ccfcf" @click="dialog2=false" width="100%" class="white--text" depressed>
                            Save
                        </v-btn>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>

  </div>
</template>

<script>
import Navbar from '~/components/NavbarIn'
import CreateSetCard from '~/components/CreateSetCard'
import AddCard from '~/components/AddCard'
import { mapGetters } from 'vuex'
import { db } from '~/plugins/firebase'

export default {
    data() {
        return {
            set: {
                title: '',
                description: '',
                author: '',
                visible: 'Everyone',
                editable: 'Me',
                password: ''
            },
            cards: [],
            dialog: false,
            dialog2: false,
        }
    },
    components: {
        Navbar,
        CreateSetCard,
        AddCard
    },
    computed: {
        ...mapGetters({
            userInfo: 'user/userInfo'
        }),
    }
    ,
    methods: {
        addCard() {
            this.cards.push({
                id: Math.ceil(Math.random() * 100000),
                term: '',
                definition: ''
            })
        },
        getCardIndex(card_id) {
            return this.cards.findIndex(x => x.id == card_id); // Returns card's index from array (cards) with specified index
        },
        getCard(card_id) {
            return this.cards[this.getCardIndex(card_id)];     // Returns card's object from array (cards) with specified index 
        },
        deleteCard(card_id) {
            const index = this.getCardIndex(card_id);              // Get card's index from array (cards)  
            this.cards.splice(index, 1);                       // Remove index from array (cards)
        },
        updateCardTerm(meta) {
            const oldCard = this.getCard(meta.id);                 // Get card's object from array (cards)
            oldCard.term = meta.term;                              // Update 'term' attribute
        },
        updateCardDefinition(meta) {
            const oldCard = this.getCard(meta.id);                 // Get card's object from array (cards)
            oldCard.definition = meta.definition;                  // Update 'definition' attribute
        },
        submit() {
            if (this.$refs.form.validate()) {
                db.collection('users')
                .doc(this.set.author)
                .collection('folders')
                .doc('none')
                .collection('sets')
                .add(this.set)
                .then(ref => {
                    for(let i=0; i<this.cards.length; i++) {
                        ref.collection('cards')
                        .add(this.cards[i])
                    }
                })
            }
        }
    },
    created() {
        this.set.author = this.userInfo.uid;
    }
}
</script>

<style>
.card_title {
    color: #455358;
    font-weight: 600;
    font-size: 27px;
}

.desc_btn, .create_btn {
    color: white !important;
    font-weight: 600 !important;
}

.desc_btn:hover:before, .create_btn:hover:before {
    color: transparent;
}

.desc_btn {
    font-size: 25px !important;
}

.create_btn {
    border-radius: 15px;
    font-size: 17px !important;
}

.large {
    font-size: 20px !important;
}

.create_btn, .desc_btn {
    transition: color .3s ease-out, background-color .3s ease-out; 
}

.create_btn:hover, .desc_btn:hover {
    color: #455358 !important;
    background-color: #ffcd1f !important;
}

.setting {
    color: #3ccfcf;
    transition: color ease-in .2s;
    font-size: 15px;
}

.setting:hover {
    cursor: pointer;
    color: #ffcd1f;
}

</style>
