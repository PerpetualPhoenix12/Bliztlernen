<template>
    <nav>
        <v-toolbar flat color="#303C9B" height="100"> 
            <v-toolbar-title class="title-wrapper">
                <nuxt-link class="link-wrapper" to="/home"><span class="nav-title">Blitzlernen</span></nuxt-link>
            </v-toolbar-title>
            <nuxt-link to="/create-set" class="create-parent">
                    <v-icon>mdi-plus</v-icon>
                    <span class="create">Create</span>
            </nuxt-link>
            <nuxt-link to="/home" class="search-parent">
                    <v-icon>mdi-magnify</v-icon>
                    <span class="search">Search</span>
            </nuxt-link>
            <v-spacer></v-spacer>

            <v-menu bottom offset-y transition="slide-y-transition" class="menu">
                <template v-slot:activator="{ on }">
                    <span v-on="on" class="white--text user_dropdown text-capitalize" @click="open = !open">
                        <span class="username">
                        {{ userInfo.username }} 
                        <v-icon small>mdi-menu-down</v-icon></span>
                    </span>
                </template>

                <v-list class="menu_items">
                    <nuxt-link to="/user/sets">
                        <v-list-item class="menu_btn">
                            <span>Your Sets</span>
                        </v-list-item>
                    </nuxt-link>
                    <nuxt-link to="/settings">
                        <v-list-item class="menu_btn">
                            <span>Settings</span>
                        </v-list-item>
                    </nuxt-link>
                    <v-list-item class="menu_btn" @click="logout">
                        <span>Log Out</span>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-toolbar>
    </nav>
</template>

<script>
import { auth } from '~/plugins/firebase';
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            open: false
        }
    },
    methods: {
        logout() {
            auth.signOut()
            .then(() => this.$router.push('/'))
        }
    },
    computed: mapGetters({
            userInfo: 'user/userInfo'
        })
}
</script>


<style>
.user_dropdown {
    transition: ease-out opacity .1s;
    cursor: pointer;
    font-weight: light;
    margin-right: 80px;
}

.user_dropdown * {
    color: white !important;
}

.user_dropdown:hover {
    opacity: 0.5;
}

.username {
    font-size: 20px;
}

.menu_items {
    padding: 0 !important;
    margin: 0 !important;
}

.menu_btn {
    width: 100%;
    transition: background-color ease .35s;
    cursor: pointer;
}

.menu_btn * {
    color: black !important;
}

.menu_btn:hover {
    background-color: #ffcd1f;
}

.title-wrapper {
    transition: ease-in opacity .2s;
    margin-left:20px;
}

.title-wrapper:hover {
    cursor: pointer;
    opacity: 0.5;
}

.nav-title {
    font-family: 'Raleway';
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin-left: 190px;
}

.create-parent {
    margin-left: 100px;
}

.search-parent {
    margin-left: 60px;
}

.create-parent, .search-parent {
    transition: ease-in opacity .2s;
    margin-top: 6px;
}

.create, .search {
    color: white;
    font-size: 16px;
    font-weight: 500px;
}

.v-icon {
    color: white !important;
}

.create-parent:hover, .search-parent:hover {
    cursor: pointer;
    opacity: 0.5;
}
</style>