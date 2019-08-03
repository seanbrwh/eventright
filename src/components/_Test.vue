<template>
  <div>
    <h1>Please fill out this form</h1>    
    <div style="display:flex;justify-content:space-evenly;align-items:center">
      <button>Form 1</button>
      <button>Form 2</button>
    </div>
    <form>
      <div id="header">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div id="form-links">
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>
        </ul>
      </div>
    </form>
  </div>
  
</template>
<script lang='ts'>
import {Vue, Component, Prop, Watch  } from 'vue-property-decorator'

import { State, Action, Getter } from 'vuex-class';

import { ProfileState, User } from '../store/profile/types';

const namespace: string = 'profile';

@Component
  export default class Test extends Vue{
    //props
    @Prop() greet!:string

    //data
    firstName:string = 'Sean'
    LastName:string = 'White'

    //watch
    @Watch('firstName')
    firstNameChanged(){
      //When the name changes on this 
    }

    //computed
    get fullName(){
      return ``
    }

    //methods are simple
    hereIsAMethod(){

    }

    @State('profile') profile!:ProfileState 

    @Action('getUser', {namespace}) getUser: any    

    mounted() {
      this.getUser()
      console.log(this.profile.user)
    }   

  }


</script>

<style scoped>
  #header{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    background: grey;
  }
  #form-fields{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;    
    margin: 1rem 1rem;
    padding: 1rem
  }
  #form-controls{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
  }
</style>
