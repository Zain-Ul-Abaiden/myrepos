<template>
  <div class="home">
    <h1>I am a homepage.</h1>
  </div>
  <HelloWorld/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
