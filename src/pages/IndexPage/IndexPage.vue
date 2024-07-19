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

    <div class="col-12">
      <!-- q-m -->
      <!-- t|r|b|l|x|y|a q-ma -->
      <!-- xs|sm|md|lg|xl q-ma-lg -->
      <div
        class="q-pa-lg q-ma-xl shadow-3 rounded-borders relative-position some-card scroll"
        style="height: 400px"
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente aperiam animi quasi facilis voluptates quos, ratione eius dolor dolorem culpa sit fugit voluptate a aspernatur voluptatibus unde, amet magni!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente aperiam animi quasi facilis voluptates quos, ratione eius dolor dolorem culpa sit fugit voluptate a aspernatur voluptatibus unde, amet magni!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente aperiam animi quasi facilis voluptates quos, ratione eius dolor dolorem culpa sit fugit voluptate a aspernatur voluptatibus unde, amet magni!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente aperiam animi quasi facilis voluptates quos, ratione eius dolor dolorem culpa sit fugit voluptate a aspernatur voluptatibus unde, amet magni!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente aperiam animi quasi facilis voluptates quos, ratione eius dolor dolorem culpa sit fugit voluptate a aspernatur voluptatibus unde, amet magni!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente aperiam animi quasi facilis voluptates quos, ratione eius dolor dolorem culpa sit fugit voluptate a aspernatur voluptatibus unde, amet magni!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente aperiam animi quasi facilis voluptates quos, ratione eius dolor dolorem culpa sit fugit voluptate a aspernatur voluptatibus unde, amet magni!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente aperiam animi quasi facilis voluptates quos, ratione eius dolor dolorem culpa sit fugit voluptate a aspernatur voluptatibus unde, amet magni!
        </div>
        <q-btn
          :icon="mdiPlus"
          color="blue"
          class="full-width"
        />
      </div>
    </div>

    <CreateFriendDialog
      v-model="showCreateDialog"
      v-model:form="form"
      @create="createFriend()"
    />
  </q-page>
</template>
