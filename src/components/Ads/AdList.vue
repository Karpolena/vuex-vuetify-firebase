<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ad</h1>
                <v-card 
                    class="elevation-10 mb-4"
                    v-for="ad in ads"
                    :key="ad.id"
                >
                <v-layout row>
                    <v-flex xs4>
                        <v-card-media
                            :src="ad.imageSrc"
                            height="160"
                        ></v-card-media>
                    </v-flex>
                    <v-flex xs8>
                        <v-card-text>
                            <h2 class="text--primary">{{ad.title}}</h2>
                            <p>{{ad.discription}}</p>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn 
                                class="info"
                                :to="'/ad/' + ad.id"
                            >Open</v-btn>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            ads: [
               {
                    title: "image",
                    description: "it is title",
                    promo: false,
                    imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
                    id: "123"
                },
                {
                    title: "second image",
                    description: "it is title",
                    promo: true,
                    imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
                    id: "1234"
                },
                {
                    title: "third image",
                    description: "it is title",
                    promo: true,
                    imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
                    id: "12345"
                } 
            ]
        }
    }
}
</script>

