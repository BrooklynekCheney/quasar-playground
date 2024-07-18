<script setup>
import { isEmail } from 'validator'
import { ref } from 'vue'

const form = defineModel('form', { type: Object })

const emit = defineEmits(['create'])

const formComponent = ref()
async function submitForm () {
  const isValid = await formComponent.value.validate()
  if (isValid) emit('create')
}
</script>

<template>
  <q-dialog>
    <q-card>
      <q-card-section>
        <q-form
          ref="formComponent"
          class="q-gutter-y-md"
          @submit="submitForm()"
        >
          <!-- name: text input -->
          <q-input
            v-model="form.name"
            label="Name"
            filled
            lazy-rules
            :rules="[val => val?.length > 2 || 'Name must be at least 3 characters long']"
          />
          <!-- email: text input -->
          <q-input
            v-model="form.email"
            label="Email"
            filled
            lazy-rules
            :rules="[val => isEmail(val ?? '') || 'Please enter a valid email']"
          />
          <!-- age: number input -->
          <q-input
            v-model.number="form.age"
            label="Age"
            type="number"
            filled
          />
          <!-- isHuman: checkbox -->
          <q-checkbox
            v-model="form.is_human"
            label="Is Human"
          />
          <!-- operating_system: select -->
          <q-select
            v-model="form.operating_system"
            outlined
            lazy-rules
            :rules="[val => ['Windows', 'Mac', 'Linux'].includes(val) || 'Please select a valid OS']"
            :options="['Windows', 'Mac', 'Linux']"
          />
          <!-- color: color picker -->
          <q-color v-model="form.color" />
          <!-- Create button -->
          <q-btn
            label="Create"
            color="primary"
            class="full-width"
            type="submit"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
