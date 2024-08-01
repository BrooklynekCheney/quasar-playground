<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)
</script>

<template>
  <q-page
    padding
  >
    <q-card
      v-if="loading"
      style="width: 300px"
    >
      <q-card-section class="row">
        <q-skeleton type="QAvatar" />

        <q-skeleton
          class="col q-ml-md"
          type="text"
        />
      </q-card-section>

      <q-skeleton
        type="rect"
        width="300px"
        height="150px"
      />

      <q-card-actions>
        <q-space />

        <q-skeleton
          class="q-mr-md"
          type="QBtn"
        />
        <q-skeleton type="QBtn" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>
