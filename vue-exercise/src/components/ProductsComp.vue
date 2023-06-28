<template>
 <div>
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in data" :key="item.ID">
                    <div class="card" style="width: 18rem;">
                        <img :src="item.image" class="card-img-top" alt="item.title">
                        <div class="card-body">
                            <h1>{{ item.title }}</h1>
                            <h4>{{ item.price }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 export default {
    data() {
        return {
            data: []
        }
    },
    methods: {
        async fetchData() {
            const res = await fetch("https://mish-al.github.io/vueServer/dataServer.json");
            let parsedData = await res.json()
            this.data = parsedData.products
        }
    },
    mounted() {
        this.fetchData()
    }

}
</script>

<style scoped>
.productsLanding {
  height: 100%;
  width: 100%;
  background-image: url("https://i.postimg.cc/4dcgSjq1/The-Best-Phones-to-buy-in-2023-our-top-10-list.jpg");
  background-size: cover;
}
.product h2 {
  text-align: center;
  text-decoration: underline;
  color: rgb(173, 170, 170);
}
.cardStructure {
  border: 3px solid #484646;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.cardImage img {
  height: 6rem;
  margin: 2rem;
}

.cardBody h2 {
  text-align: center;
  color: rgb(173, 170, 170);
}
.cardBody p {
  text-align: center;
  color: #c6bbbb;
}
</style>