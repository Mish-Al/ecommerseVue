<template>
    <div>
 <nav id="navb" class="navbar navbar-expand">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
        <img
         src="https://i.postimg.cc/V5QN8Rkb/Screenshot-2023-06-10-224958-removebg-preview.png" 
         id="logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav-links">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../views/AboutView.vue">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../views/ProductView.vue">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../views/ProductView.vue">Admin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../views/ProductView.vue">Checkout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>