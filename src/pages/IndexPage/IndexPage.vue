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
  <q-page class="row q-col-gutter-xl">
    <div class="col-xs-12 col-sm-6 col-lg-4">
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, mollitia! Impedit cumque doloremque quo eius. Cumque impedit dignissimos sed dolorem adipisci quisquam earum vitae amet, hic distinctio dolores, quae ipsa?
        </q-card-section>
      </q-card>
    </div>

    <div class="col-xs-12 col-sm-6 col-lg-4">
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
    </div>

    <div class="col-xs-12 col-lg-4">
      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, mollitia! Impedit cumque doloremque quo eius. Cumque impedit dignissimos sed dolorem adipisci quisquam earum vitae amet, hic distinctio dolores, quae ipsa?
        </q-card-section>
      </q-card>
    </div>

    <CreateFriendDialog
      v-model="showCreateDialog"
      v-model:form="form"
      @create="createFriend()"
    />
  </q-page>
</template>
