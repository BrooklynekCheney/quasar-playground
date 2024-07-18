<script setup>
import { mdiAccount, mdiMenu } from '@quasar/extras/mdi-v7'
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<template>
  <q-layout view="hHh LpR fFf">
    <q-header
      elevated
      class="bg-primary text-white"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          :icon="mdiMenu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar Playground
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      side="left"
      bordered
    >
      <q-list>
        <q-item
          exact
          :to="{ name: 'home' }"
        >
          <q-item-section>
            Home
          </q-item-section>
        </q-item>

        <q-item
          exact
          :to="{ name: 'friends' }"
        >
          <q-item-section>
            Friends
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      elevated
      class="bg-grey-8 text-white"
    >
      <q-toolbar class="flex-center">
        <q-btn
          flat
          :icon="mdiAccount"
          size="lg"
        />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
