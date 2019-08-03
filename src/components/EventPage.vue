<template>
    <div class="container">
        <div>
            <event-card></event-card>
        </div>
        <div>
            <event-card></event-card>
        </div>
        <div>
            <event-card></event-card>
        </div>
        <div>
            <event-card></event-card>
        </div>
        <div>
            <event-card></event-card>
        </div>
        <div>
            <event-card></event-card>
        </div>
        <div>
            <event-card></event-card>
        </div>        
    </div>
</template>

<script lang='ts'>
import EventCard from './EventCard.vue'
import {Vue, Component, Prop, Watch  } from 'vue-property-decorator'
@Component({
    components:{
        EventCard
    }
})
export default class EventPage extends Vue{}
</script>

<style scoped>
    .container {        
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap
    }
    
</style>
