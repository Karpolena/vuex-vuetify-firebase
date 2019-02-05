<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form 
                ref="form"
                v-model="valid"
                lazy-validation
                class="mb-3">
                    <v-text-field 
                        name="title" 
                        label="Ad title" 
                        type="text"
                        v-model="title"
                        :rules="[v => !!v || 'Title is required']"
                        required
                    ></v-text-field>
                    <v-textarea 
                        name="description" 
                        label="Ad description" 
                        type="text"
                        v-model="description"
                        :rules="[v => !!v || 'Description is required']"
                    ></v-textarea>
                </v-form>
                <v-layout row>
                    <v-flex xs12 mb-3>
                        <v-btn class="warning">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 >
                        <img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" alt="squirel" height="120">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 >
                        <v-switch
                            v-model="promo"
                            label="Add to promo?"
                            color="primary"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 mb-3>
                        <v-spacer></v-spacer>
                        <v-btn 
                            class="success"
                            @click="createAd"
                            :disabled="!valid">
                            Create ad
                        </v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            title: "",
            description: "",
            promo: "",
            valid: false
        }
    },
    methods: {
        createAd() {
            if (this.$refs.form.validate()) {
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo
                }
                console.log(ad)
            }
        }
    }
}
</script>

