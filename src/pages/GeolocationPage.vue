<script setup>
import { Geolocation } from '@capacitor/geolocation'
import { mdiMap } from '@quasar/extras/mdi-v7'
import { ref } from 'vue'

const coordsQuery = ref('')

async function getCurrentLocation () {
  await Geolocation.checkPermissions()
  const position = await Geolocation.getCurrentPosition()
  position.coords.latitude = -25.3492
  position.coords.longitude = 131.0346

  coordsQuery.value = `${position.coords.latitude},${position.coords.longitude}`
}
</script>

<template>
  <q-page>
    <q-btn
      label="Get Current Location"
      @click="getCurrentLocation()"
    />

    <q-btn
      :icon="mdiMap"
      color="red"
      tag="a"
      :href="`https://google.com/maps/search/?api=1&query=${coordsQuery}`"
    />
  </q-page>
</template>
