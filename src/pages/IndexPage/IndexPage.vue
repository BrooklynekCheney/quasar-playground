<script setup>
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { uid } from 'quasar'
import { mdiCheck, mdiClose, mdiPlus, mdiRefresh } from '@quasar/extras/mdi-v7'
import CreateFriendDialog from './CreateFriendDialog.vue'
import { useI18n } from 'vue-i18n'
import { useBluetoothScanner } from 'src/composables/useBluetoothScanner'

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
  },
  {
    name: 'close-by',
    label: 'Close By',
    align: 'center'
  }
]
const friends = useLocalStorage('friends', {})
const form = ref({})

function createFriend () {
  const id = uid()
  form.value.id = id
  friends.value[id] = form.value
  showCreateDialog.value = false
  form.value = {}
}

const showCreateDialog = ref(false)

const { t } = useI18n()

const { scan, scanResults, scanning } = useBluetoothScanner()

function friendIsClose (friend) {
  return scanResults.value
    .find(result => {
      return result.device.deviceId === friend.deviceId
    })
}
</script>

<template>
  <q-page class="row q-col-gutter-xl">
    <div class="col-xs-12 col-sm-6 col-lg-4">
      <q-table
        :columns
        :rows="Object.values(friends)"
        :title="t('friends.tableTitle')"
      >
        <template #top-right>
          <q-btn
            :loading="scanning"
            round
            color="white"
            text-color="grey-10"
            :icon="mdiRefresh"
            class="q-mr-sm"
            @click="scan()"
          />

          <q-btn
            :icon="mdiPlus"
            round
            color="primary"
            @click="showCreateDialog = true"
          />
        </template>

        <template #body-cell-close-by="scope">
          <q-td :props="scope">
            <q-icon
              v-if="friendIsClose(scope.row)"
              :name="mdiCheck"
              color="green"
              size="md"
            />

            <q-icon
              v-else
              :name="mdiClose"
              color="grey"
              size="md"
            />
          </q-td>
        </template>
      </q-table>
    </div>

    <CreateFriendDialog
      v-model="showCreateDialog"
      v-model:form="form"
      @create="createFriend()"
    />
  </q-page>
</template>
