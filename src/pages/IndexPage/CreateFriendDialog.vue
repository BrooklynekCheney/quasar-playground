<script setup>
const form = defineModel('form', { type: Object })

const emit = defineEmits(['create'])
</script>

<template>
  <q-dialog>
    <q-card>
      <q-card-section>
        <q-form
          class="q-gutter-y-md"
          @submit="emit('create')"
        >
          <!-- name: text input -->
          <q-input
            v-model="form.name"
            label="Name"
            filled
          />
          <!-- email: text input -->
          <q-input
            v-model="form.email"
            label="Email"
            filled
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
