<template>
    <div id='search'>
        <div class="input">
            <label>Looking For</label>
            <input type="text" placeholder="Event">
        </div>
        <div class="input">
            <label>In</label>
            <input type="text" placeholder="Utah">
        </div>
        <div class="input">
            <label>On</label>
            <input type="text" placeholder="Any date">
        </div>
        <div class="control">
            <button>Search</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #search{
        display: flex;
        justify-content: space-evenly;
        align-items: center;       
        background: orange;
        padding: 1.5rem;
        border-radius: .2rem;         
        position: absolute;
        bottom: 24rem;
        width: 90rem;
        height: 10rem;
    }
    .input{
        display: flex;
        justify-content: space-evenly;
        align-items: center;   
        flex-direction: column;     
        margin: 0 .4rem;
        width: 15rem;
    }
    .control{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin:  1rem;    
    }
    input[type=text]{
        background: transparent;
        border: none;
        border-bottom: 1px solid;
        width: 15rem;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
    }
</style>
