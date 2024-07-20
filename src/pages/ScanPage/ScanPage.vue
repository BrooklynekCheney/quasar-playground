<script setup>
import { mdiRefresh } from '@quasar/extras/mdi-v7'
import { useLocalStorage } from '@vueuse/core'
import { useBluetoothScanner } from 'src/composables/useBluetoothScanner'

const {
  scan,
  scanResults,
  scanning
} = useBluetoothScanner()

const friends = useLocalStorage('friends', {})
</script>

<template>
  <q-page padding>
    <q-card>
      <q-toolbar class="bg-secondary text-white">
        <q-toolbar-title>
          Scan For Friends
        </q-toolbar-title>

        <q-btn
          :loading="scanning"
          round
          color="white"
          text-color="grey-10"
          size="sm"
          :icon="mdiRefresh"
          @click="scan()"
        />
      </q-toolbar>

      <q-list>
        <q-item
          v-for="result in scanResults"
          :key="result.device.deviceId"
        >
          <q-menu auto-close>
            <q-list>
              <q-item
                v-for="friend in Object.values(friends)"
                :key="friend.id"
                clickable
                @click="friends[friend.id].deviceId = result.device.deviceId"
              >
                <q-item-section>
                  {{ friend.name }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>

          <q-item-section>
            <q-item-label>
              {{ result.device.deviceId }}
            </q-item-label>

            <q-item-label
              v-if="result.device.name ?? result.localName"
              caption
            >
              {{ result.device.name ?? result.localName }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>
