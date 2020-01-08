<template>
    <v-card color="white" width="100%" height="300px" class="dashboard" flat>
            <v-row>
                <v-col style="height:100%;" cols="2" align-self="center" class="pl-10 pt-10">
                    <v-avatar size="150px">
                        <img :src="userInfo.avatar" aspect-ratio="1" class="avatar" />
                    </v-avatar>
                </v-col>
                <v-col class="mt-12 mr-7">
                    <span class="dash_username">{{ userInfo.username }}</span>
                    <v-row>
                        <v-col v-for="(link, index) in nav_links" :key="index" cols="1">
                            <nuxt-link :to="link.url" class="nav_link">
                                {{ link.title }}
                            </nuxt-link>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            nav_links: [ 
                { title: 'Sets', url: '/user/sets' },
                { title: 'Folders', url: '/user/folders'},
                { title: 'Classes', url: '/user/classes'}       
            ]
        }
    },
    computed: mapGetters({
            userInfo: 'user/userInfo'
        })
}
</script>

<style>
.dashboard {
    z-index: 1;
}

.dash_username {
    font-size: 45px;
    font-weight: 500;
    color: #455358;
}

.avatar {
    box-shadow: 0px 2px 2px 2px #ccc;
}

.nav_link {
    border-radius: 10px;
    color: #3ccfcf !important;
    transition: ease-in color .1s;
}

.nav_link:hover {
    cursor: pointer;
    color: #ffcd1f !important;
}
</style>