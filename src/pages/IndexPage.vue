<script setup>
import { ref } from 'vue'
import { friends } from './friends'
import { mdiBookAlphabet } from '@quasar/extras/mdi-v7'

const columns = [
  {
    name: 'name',
    field: 'name',
    label: 'Name',
    align: 'left',
    sortable: true
  },
  {
    name: 'email',
    field: 'email',
    label: 'Email',
    align: 'left'
  }
]

const fullscreen = ref(false)
const tableComponent = ref()
</script>

<template>
  <q-page class="flex flex-center">
    <q-icon
      :name="mdiBookAlphabet"
      size="5em"
      color="blue-9"
    />

    <q-table
      ref="tableComponent"
      v-model:fullscreen="fullscreen"
      :columns
      :rows="friends"
      separator="cell"
      title="Friends"
      flat
      bordered
      square
      :rows-per-page-options="[2]"
      @row-click="(_evt, row) => console.log(row)"
    >
      <template #top-right>
        <q-btn
          label="Fullscreen"
          @click="tableComponent.toggleFullscreen()"
        />
      </template>
    </q-table>
  </q-page>
</template>
