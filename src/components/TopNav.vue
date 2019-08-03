<template>
    <header>
        <h3>Event Right</h3>
        <ul>
            <li id="organize">
                Organize <mdb-icon  icon="angle-down" />
                <div id="organize-menu">
                    <router-link to='/'>OverView</router-link>                  
                    <router-link to='/'>Pricing</router-link>                  
                    <router-link to='/'>About</router-link>                  
                    <router-link to='/'>Resources</router-link>                  
                </div>
            </li>                
            <li>
                Browse Events
            </li>
            <li id="event">
                Create Event
            </li>
            <li>
                Sign In
            </li>
        </ul>
        <span v-if="hover">Text</span>
    </header>
</template>

<script lang='ts'>
import {Vue, Component, Prop, Watch  } from 'vue-property-decorator'
@Component
    export default class TopNav extends Vue{
        hover:boolean = false
    }
</script>

<style scoped>
    header{
        width: 100%;
        height: 3rem;
        background: rgba(200,200,200);
        display: flex;
        justify-content: space-between;
        align-items: center;        
    }
    h3{
        padding: 0 1rem;
        color: orange;
    }
    ul{
        margin: 0 1rem;
    }
    ul{
        display: flex;        
    }
    li{
        padding: 1rem;
        font-weight: 500;
    }
    li:hover{
        cursor: pointer;
    }
    #organize{
        
    }
    #organize-menu{
        display: none;
        position: absolute;        
        z-index:1;         
        min-width: 5rem;
        margin: .7rem 0;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);        
        width: 7rem;
        height: 10rem;       
        background: rgba(200,200,200,.5)
    }
    #organize:hover #organize-menu{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;         
    }
    a{
        color: inherit;
        text-decoration: none;
        padding: .5rem 1rem
    }
    a:hover{
        text-decoration: none;
        color: orange;
        background: rgba(200,200,200,.3);
        width: 100%
    }
    #event{
        color: orange;
    }
</style>
