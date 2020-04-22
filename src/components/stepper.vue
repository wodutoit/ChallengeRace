<template>
  <v-stepper v-model="e6" vertical>
    <div v-for="clue in clues" :key="clue.id">

    <step
      :stepnumber="clue.id"
      :type="clue.type"
      :title="clue.title"
      subtitle=""
      :done="e6 > clue.id"
      @dones="isDone($event)"
      :riddle="clue.riddle"
      :answer="clue.answer"
      :hint="clue.hint"
      :imageUrl="clue.image"
      :videoUrl="clue.video"
      :judge="clue.judge"
      ></step>
    </div>
  </v-stepper>
</template>

<script>
import step from './step.vue';

export default {
  name: 'stepper',
  components: {
    step,
  },
  data() {
    return {
      e6: 1,
    };
  },
  computed: {
    clues() {
      return this.$store.state.dataStore.clues;
    },
  },
  methods: {
    isDone(stepnum) {
      if (stepnum) {
        this.e6 = stepnum + 1;
      }
    },
  },
  watch: {
  },
};
</script>
