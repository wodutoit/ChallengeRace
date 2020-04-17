<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
        {{ clues[0].title }}
      <small>Let's get this party started!</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">{{ clues[0].riddle }}</v-list-item-title>
            <v-list-item-subtitle  @click="hint0=true">
              Do you need some Help?
              <v-icon small color="darken-2">
              mdi-information-outline
            </v-icon>
            </v-list-item-subtitle>
            <v-card-text class="text--primary">
              <p v-if="hint0">{{ clues[0].hint }}</p>
              <br>
              <v-text-field
                  v-model="answerInput[0]"
                  solo
                  label="Answer:"
                  clearable
                ></v-text-field>
            </v-card-text>
          </v-list-item-content>
          <v-list-item-avatar
              tile
              size="80"
            >
            <v-icon v-if="answerInput[0] === clues[0].answer" large color="green darken-2">
              mdi-thumb-up
            </v-icon>
            </v-list-item-avatar>
        </v-list-item>
        <v-card-actions>
          <v-btn color="primary" @click="e6 = 2" :disabled="answerInput[0] !== clues[0].answer">
              Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">
        Select an ad format and name ad unit
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">View setup instructions</v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
      <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e6: 1,
      answerInput: [],
      hint0: false,
    };
  },
  computed: {
    clues() {
      return this.$store.state.dataStore.clues;
    },
  },
  methods: {
  },
  watch: {
  },
};
</script>
