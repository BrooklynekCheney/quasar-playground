<script setup>
import { mdiApple, mdiDog, mdiHuman, mdiLinux, mdiMicrosoft } from '@quasar/extras/mdi-v7'
import { useLocalStorage } from '@vueuse/core'

const friends = useLocalStorage('friends', {})

const osDetailsMap = {
  Windows: {
    label: 'Windows',
    icon: mdiMicrosoft,
    color: 'blue'
  },
  Mac: {
    label: 'Mac',
    icon: mdiApple,
    color: 'grey'
  },
  Linux: {
    label: 'Linux',
    icon: mdiLinux,
    color: 'black'
  }
}
</script>

<template>
  <q-page>
    <q-list
      bordered
      separator
    >
      <q-item
        v-for="friend in Object.values(friends)"
        :key="friend.id"
        :style="{ borderLeft: `6px solid ${friend.color}` }"
      >
        <q-item-section avatar>
          <q-avatar
            class="text-white"
            :style="{ backgroundColor: friend.color }"
          >
            {{ friend.name[0] }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{ friend.name }}
          </q-item-label>

          <q-item-label caption>
            {{ friend.email }}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div>
            <q-chip
              :label="osDetailsMap[friend.operating_system].label"
              :color="osDetailsMap[friend.operating_system].color"
              :icon="osDetailsMap[friend.operating_system].icon"
              text-color="white"
            />
            <q-icon :name="friend.is_human ? mdiHuman : mdiDog" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
