<script setup>
import { ref } from 'vue'
import { friends } from './friends'

const columns = [
  {
    name: 'name',
    field: 'name',
    label: 'Name',
    align: 'left'
  },
  {
    name: 'email',
    field: 'email',
    label: 'Email',
    align: 'left'
  }
]

const fullscreen = ref(false)
</script>

<template>
  <q-page class="flex flex-center">
    <q-btn
      label="Fullscreen"
      @click="fullscreen = !fullscreen"
    />

    <q-table
      v-model:fullscreen="fullscreen"
      :columns
      :rows="friends"
      separator="cell"
      title="Friends"
      flat
      bordered
      square
      @row-click="(_evt, row) => console.log(row)"
    />
  </q-page>
</template>
