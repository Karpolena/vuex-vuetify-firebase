<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <v-card v-if="!loading">
                    <v-img
                        :src="ad.imageSrc"
                        height="300"
                    ></v-img>
                    <v-card-text>
                        <h1 class="text--primary">{{ad.title}}</h1>
                        <p>{{ad.description}}</p>
                    </v-card-text>
                    <v-card-actions>
                        <addEditAdModal :ad="ad"></addEditAdModal>
                    </v-card-actions>
                </v-card>
                <div v-else>
                    <v-progress-circular
                        :size="30"
                        :width="7"
                        color="purple"
                        indeterminate
                    ></v-progress-circular>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import EditAdModal from "./EditAdModal"
export default {
    props: ["id"],
    computed: {
        ad () {
            const id = this.id
            return this.$store.getters.adById(id)
        },
        loading () {
            return this.$store.getters.loading
        }
    },
    components: {
        addEditAdModal: EditAdModal
    }
}
</script>

