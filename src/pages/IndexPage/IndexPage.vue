<script setup>
import { ref } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { uid } from 'quasar'
import { mdiPlus } from '@quasar/extras/mdi-v7'
import CreateFriendDialog from './CreateFriendDialog.vue'

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
const friends = useLocalStorage('friends', {})
const form = ref({})

function createFriend () {
  const id = uid()
  form.value.id = id
  friends.value[id] = form.value
  showCreateDialog.value = false
}

const showCreateDialog = ref(false)
</script>

<template>
  <q-page class="row flex-center">
    <h2 class="text-weight-bolder full-width text-center">
      Lorem ipsum
    </h2>

    <q-table
      :columns
      :rows="Object.values(friends)"
      title="Friends"
    >
      <template #top-right>
        <q-btn
          :icon="mdiPlus"
          round
          color="primary"
          @click="showCreateDialog = true"
        />
      </template>
    </q-table>

    <CreateFriendDialog
      v-model="showCreateDialog"
      v-model:form="form"
      @create="createFriend()"
    />
  </q-page>
</template>
