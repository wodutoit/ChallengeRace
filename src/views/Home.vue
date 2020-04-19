<template>
  <div class="home">
    <img width="100%" alt="Vue logo" src="/assets/amazingrace.jpg">
    <h1>Welcome to your Amazing Lockdown Race</h1>
    <stepper></stepper>
  </div>
</template>

<script>
// @ is an alias to /src
import stepper from '@/components/stepper.vue';

export default {
  name: 'Home',
  components: {
    stepper,
  },
};
</script>
