<template>
    <nav>
        <v-toolbar flat color="#303C9B" height="100"> 
            <v-toolbar-title class="title-wrapper">
                <nuxt-link class="link-wrapper" to="/"><span class="nav-title">Blitzlernen</span></nuxt-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <div class="meta_links">
                <span v-for="link in metaLinks" :key="link.name">
                    <nuxt-link :to="link.url" class="auth-btn">
                        {{ link.name }} 
                    </nuxt-link>
                </span>
            </div>
        </v-toolbar>
    </nav>
</template>

<script>
export default {
    props: {
        metaLinks: Array,
        metaActions: Array
    }
}
</script>


<style>
.title-wrapper .link-wrapper {
    text-decoration: none;
}

.title-wrapper {
    transition: opacity ease-out .25s;
    margin-left:20px;
}

.title-wrapper:hover {
    cursor: pointer;
    opacity: 0.5;
}

.nav-title {
    font-family: 'Raleway';
    font-size: 40px;
    font-weight: bold;
    color: white;
    margin-left: 30px;
}

.auth-btn {
    font-family: 'Raleway';
    color: white !important;
    font-size: 25px !important;
    text-decoration: none;
    margin-right: 40px;
    padding: 0 !important;
    font-weight: 500;
    transition: ease-out opacity .15s;
}

.auth-btn:hover {
    opacity: 0.5;
}

.meta_links {
    margin-right: 190px;
}
</style>