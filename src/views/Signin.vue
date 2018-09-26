<template>
    <div class="body">
        <v-container grid-list-xl text-xs-center>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <p class="text-xs-center headline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum.</p>
                    <v-btn large block outline color="white">Get Started</v-btn>
                    <v-btn large block outline color="white">Login</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
export default {
     name: 'Signin'
}
</script>
<style scoped>
.body {
height:100vh; 
width:100vw;
background-color:#FF5F6B;
color: #fff;
}
</style>