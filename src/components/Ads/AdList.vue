<template>
    <v-container>
        <v-layout row v-if="!loading && myAds.length !== 0">
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My ad</h1>
                <v-card 
                    class="elevation-10 mb-4"
                    v-for="ad in myAds"
                    :key="ad.id"
                >
                <v-layout row>
                    <v-flex xs4>
                        <v-img
                            :src="ad.imageSrc"
                            height="160"
                        ></v-img>
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
        <v-layout v-else-if="!loading && myAds.length === 0">
            <v-flex xs12 class="text-xs-center">
                <h1 class="text--primary">You have no ads</h1>
            </v-flex>
        </v-layout>
        <v-layout v-else>
            <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                        :size="30"
                        :width="7"
                        color="purple"
                        indeterminate
                    ></v-progress-circular>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed: {
        myAds () {
            return this.$store.getters.myAds
        },
        loading () {
            return this.$store.getters.loading
        }
    }
}
</script>

