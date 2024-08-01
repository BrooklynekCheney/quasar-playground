<script setup>
import { mdiWindowClose, mdiWindowMaximize, mdiWindowMinimize } from '@quasar/extras/mdi-v7'

</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header
      elevated
      class="bg-primary text-white"
    >
      <q-bar>
        My App

        <q-space />

        <div class="q-gutter-x-sm">
          <q-btn
            size="sm"
            dense
            :icon="mdiWindowMinimize"
            flat
          />
          <q-btn
            size="sm"
            dense
            :icon="mdiWindowMaximize"
            flat
          />
          <q-btn
            size="sm"
            dense
            :icon="mdiWindowClose"
            flat
          />
        </div>
      </q-bar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
