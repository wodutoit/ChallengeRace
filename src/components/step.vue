<template>
  <div>
    <v-stepper-step :complete="done" :step="stepnumber">
        {{ title }}
      <small>{{ subtitle }}</small>
    </v-stepper-step>

    <v-stepper-content :step="stepnumber">
      <v-card class="mx-auto" outlined :color="getColour()" width="100%">
        <v-list-item three-line>
          <v-list-item-content>
            <v-card-text class="headline mb-1">{{ riddle }}</v-card-text>
            <v-card-text class="text--primary" @click="showhint=true">
              Do you need some Help?
              <v-icon small color="darken-2">
              mdi-information-outline
            </v-icon>
            </v-card-text>
            <v-card-text class="text--primary">
              <p v-if="showhint">{{ hint }}</p>
              <br>
              <div class="player-container" v-if="video && video.length > 0">
                <iframe width="704" height="396"
                :src="video"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
                </iframe>
                  <br>
              </div>
              <div v-if="imageUrl && imageUrl.length > 0">
                <v-img contain max-height="600" alt="Clue Image"
                :src="imageUrl"></v-img>
              </div>
              <v-text-field
                  v-model="answerInput"
                  solo
                  label="Answer:"
                  clearable
                ></v-text-field>
              <br>
              <h3 v-if="judge && judge.length > 0">Judge: {{ judge }} </h3>
            </v-card-text>
          </v-list-item-content>
          <v-list-item-avatar
              tile
              size="80"
            >
            <v-icon v-if="answerInput === answer" large color="green darken-2">
              mdi-thumb-up
            </v-icon>
            <v-icon v-else-if="type === 'roadblock'" x-large color="black darken-2">
              mdi-do-not-disturb
            </v-icon>
            <v-icon v-else-if="type === 'info'" x-large color="black darken-2">
              mdi-about-variant
            </v-icon>
            <v-icon v-else x-large color="black darken-2">
              mdi-alert-outline
            </v-icon>
            </v-list-item-avatar>
        </v-list-item>
        <v-card-actions>
          <v-btn color="primary" @click="next()" :disabled="answerInput !== answer">
              Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-stepper-content>
  </div>
</template>

<script>
export default {
  props: {
    stepnumber: Number,
    title: String,
    subtitle: String,
    riddle: String,
    answer: String,
    hint: String,
    imageUrl: String,
    videoUrl: String,
    done: Boolean,
    type: String,
    judge: String,
  },
  components: {
  },
  data() {
    return {
      answerInput: '',
      showhint: false,
      playing: '',
    };
  },
  computed: {
    video() {
      return this.videoUrl;
    },
  },
  methods: {
    next() {
      this.$emit('dones', true);
    },
    getColour() {
      let c = 'info';
      if (this.type === 'detour') {
        c = 'warning';
      } else if (this.type === 'roadblock') {
        c = 'error';
      }
      return c;
    },
  },
  watch: {
  },
};
</script>
