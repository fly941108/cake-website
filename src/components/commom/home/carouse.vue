<template>
    <div class="imgCarouse">
        <Carousel class="limitHeight" autoplay v-model="value" loop>
            <CarouselItem>
                <a href="#"><img class="carouse" src="../../../assets/img/carouse/carouse01.png"/></a>
            </CarouselItem>
            <CarouselItem>
                <a href="#"><img class="carouse" src="../../../assets/img/carouse/carouse02.png"/></a>
            </CarouselItem>
            <CarouselItem>
                <a href="#"><img class="carouse" src="../../../assets/img/carouse/carouse03.png"/></a>
            </CarouselItem>
            <CarouselItem>
                <a href="#"><img class="carouse" src="../../../assets/img/carouse/carouse04.png"/></a>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
export default {
  name: 'carouse',
  data () {
    return {
      value: 1
    }
  }
}
</script>
<style scoped>
.imgCarouse {
    margin-top: 70px;
}
.imgCarouse .carouse {
    width: 100%;
}
.limitHeight{
    height: 400px;
    overflow: hidden;
}
</style>
