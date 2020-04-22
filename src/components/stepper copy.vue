<template>
  <v-stepper v-model="e6" vertical>
    <step
      :stepnumber="clues[0].id"
      :type="clues[0].type"
      :title="clues[0].title"
      subtitle="Let's get this party started"
      :done="e6 > clues[0].id"
      @dones="isDone($event)"
      :riddle="clues[0].riddle"
      :answer="clues[0].answer"
      :hint="clues[0].hint"
      :imageUrl="clues[0].image"
      :videoUrl="clues[0].video"
      :judge="clues[0].judge"
      ></step>

    <step
      :stepnumber="clues[1].id"
      :type="clues[1].type"
      :title="clues[1].title"
      subtitle=""
      :done="e6 > clues[1].id"
      @dones="isDone($event)"
      :riddle="clues[1].riddle"
      :answer="clues[1].answer"
      :hint="clues[1].hint"
      :imageUrl="clues[1].image"
      :videoUrl="clues[1].video"
      :judge="clues[1].judge"></step>

      <step
      :stepnumber="clues[2].id"
      :type="clues[2].type"
      :title="clues[2].title"
      subtitle=""
      :done="e6 > clues[2].id"
      @dones="isDone($event)"
      :riddle="clues[2].riddle"
      :answer="clues[2].answer"
      :hint="clues[2].hint"
      :imageUrl="clues[2].image"
      :videoUrl="clues[2].video"
      :judge="clues[2].judge"></step>

      <step
      :stepnumber="clues[3].id"
      :type="clues[3].type"
      :title="clues[3].title"
      subtitle=""
      :done="e6 > clues[3].id"
      @dones="isDone($event)"
      :riddle="clues[3].riddle"
      :answer="clues[3].answer"
      :hint="clues[3].hint"
      :imageUrl="clues[3].image"
      :videoUrl="clues[3].video"
      :judge="clues[3].judge"></step>

      <step
      :stepnumber="clues[4].id"
      :type="clues[4].type"
      :title="clues[4].title"
      subtitle=""
      :done="e6 > clues[4].id"
      @dones="isDone($event)"
      :riddle="clues[4].riddle"
      :answer="clues[4].answer"
      :hint="clues[4].hint"
      :imageUrl="clues[4].image"
      :videoUrl="clues[4].video"
      :judge="clues[4].judge"></step>

      <step
      :stepnumber="clues[5].id"
      :type="clues[5].type"
      :title="clues[5].title"
      subtitle=""
      :done="e6 > clues[5].id"
      @dones="isDone($event)"
      :riddle="clues[5].riddle"
      :answer="clues[5].answer"
      :hint="clues[5].hint"
      :imageUrl="clues[5].image"
      :videoUrl="clues[5].video"
      :judge="clues[5].judge"></step>

      <step
      :stepnumber="clues[6].id"
      :type="clues[6].type"
      :title="clues[6].title"
      subtitle=""
      :done="e6 > clues[6].id"
      @dones="isDone($event)"
      :riddle="clues[6].riddle"
      :answer="clues[6].answer"
      :hint="clues[6].hint"
      :imageUrl="clues[6].image"
      :videoUrl="clues[6].video"
      :judge="clues[6].judge"></step>
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
