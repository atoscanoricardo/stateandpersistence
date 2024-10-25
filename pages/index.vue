<template>
    <h1>Productos</h1>
    <Products />
  </template>
  
  <script setup lang="ts">
  // Instanciar el store
  const productStore = useProductStore()
  

  await useAsyncData('products', async () => {
    await productStore.fetchProducts()
    return productStore.getProducts 
  })
  </script>
  