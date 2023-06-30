<template>
    <div class="back">
        <ProductsComp/>
    </div>
</template>

<script>
import ProductsComp from '@/components/ProductsComp.vue'
    export default {
        components:{
            ProductsComp
        }
    }
</script>

<style scoped>
    .back {
        background-color: #484646;
    }
</style>