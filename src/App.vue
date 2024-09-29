<script setup lang="ts">
import {ref} from 'vue'
const visible = ref(false)

const alignCenter = 'center' as const

const images = ref([{ url: '/image.jpg', align: alignCenter }])
</script>

<template>
  <t-button @click="visible = true">
    show
  </t-button>
  <t-image-viewer v-model:images="images" v-model:visible="visible" :delete-btn="true" show-index />
</template>
