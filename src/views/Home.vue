<template>
  <div class="center">    
    <app-banner></app-banner>
    <search-bar></search-bar>
    <div class="event-page">
      <event-page></event-page> 
    </div>
  </div>
</template>

<script lang="ts">
import AppBanner from '@/components/AppBanner.vue'
import SearchBar from '@/components/SearchBar.vue'             
import EventPage from '@/components/EventPage.vue'             
    
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components:{
    AppBanner,
    SearchBar,
    EventPage
  }
})
  export default class Home extends Vue {
  
}
</script>
<style>
  .center{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }
  .event-page{
    position: absolute;
    top: 35rem;
    width: 100%;
    height: 100vh;
  }
</style>

