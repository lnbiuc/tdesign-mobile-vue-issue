<script setup lang="ts">
import {ref} from 'vue'
const val1 = ref('')
const val2 = ref('')
</script>

<template>
  <t-textarea v-model="val1"  :autosize="true" label="标题" />
  <t-textarea v-model="val2"  :autosize="true" label="标题" layout="vertical" />
  <t-textarea name="标签文字" placeholder="请输入文字" autosize />
</template>
