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
                        <v-btn class="warning" @click="triggerUpload">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                        <input type="file" style="display: none;" accept="image/*" ref="fileInput" @change="onFileChange">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 >
                        <img 
                            :src="imageSrc" 
                            alt="squirel" 
                            height="120"
                            v-if="imageSrc">
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
                            :disabled="!valid || loading || !image"
                            :loading="loading">
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
            valid: false,
            image: null,
            imageSrc: ""
        }
    },
    methods: {
        createAd() {
            if (this.$refs.form.validate() && this.image) {
                const ad = {
                    title: this.title,
                    description: this.description,
                    image: this.image,
                    promo: this.promo
                }
                this.$store.dispatch("createAd", ad)
                .then(() => {
                    this.$router.push("/list")
                })
                // .cath(() => {})
            }
        },
        triggerUpload() {
            this.$refs.fileInput.click()
        },
        onFileChange(event) {
            const file = event.target.files[0]
            const reader = new FileReader()
            reader.onload = () => {
                this.imageSrc = reader.result
            }
            reader.readAsDataURL(file)
            this.image = file
        }
    },
    computed: {
        loading() {
            return this.$store.getters.loading
        }
    }
}
</script>

