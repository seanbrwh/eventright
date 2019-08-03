<template>
    <div class="card"> 
        <div>
            <img src="../assets/Testevent.jpg" alt="">
        </div>
        <div class="info">
            <div>
                <p style="color:red">Aug</p>
                <p>16</p>
            </div>
            <div>
                <h4>Das Energi 2019</h4>
                <p>Fri,Aug 16, 5:00pm</p>
                <p>The Great Saltair, Magna, Ut</p>
                <p>Starts at $25.31</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .card{
        width: 26rem;
        height: 24rem;      
        border-radius: .2rem;
        margin: 1rem 0;
    }
    .card:hover{
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);        
    }
    img{
        max-width: 26rem;
        max-height:24rem;
    }
    .info{
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
        margin: 1rem 0;
    }
</style>
