<template>
  <div class="home">
    <img width="100%" alt="Vue logo" src="/assets/amazingrace.jpg">
    <h1>Welcome to your Amazing Lockdown Race</h1>
    <pre><h3 class="error">Roadblock</h3>
    A road block is a challenge that one team member (mummy)
    must perform. Team mate can also try if they would like.</pre>
    <pre><h3 class="warning">Detour</h3>
    A detour is a challenge that must be completed as a team.</pre>
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
