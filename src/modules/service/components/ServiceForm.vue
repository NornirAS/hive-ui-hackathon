<script setup lang="ts">
import { reactive, computed } from 'vue'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import DefaultCard from '@/components/DefaultCard.vue'
import router from '@/router'
import { serviceCreate, serviceUpdate } from '@/api'
import useUserStore from '@/store'
import type { ServiceObject } from '../types'
import { ROUTES } from '@/router/routes'

const props = defineProps<{
  isEdit?: boolean
}>()

const userStore = useUserStore()

const domainNames = computed(() => userStore.domains.map(d => d.domain))

// Should receive this from domin module

const initialFormState = reactive({
  domain: '',
  service: '',
  dataSchema: '',
  timeout: 30,
  links: [],
}) satisfies ServiceObject

const formState = reactive(
  props.isEdit ? { ...userStore.selectedService } : { ...initialFormState },
) satisfies ServiceObject

const resetFormState = () => {
  Object.assign(formState, initialFormState)
}

const submit = async () => {
  const action = props.isEdit ? serviceUpdate : serviceCreate
  const { error } = await action(formState)

  if (error) {
    // handle error
    return
  }

  await userStore.getUserData()

  resetFormState()
  router.push({
    name: ROUTES.serviceModule.serviceList.name,
  })
}
</script>

<template>
  <DefaultCard>
    <h1>{{ isEdit ? 'Service Update' : 'Service Create' }}</h1>
    <div class="field">
      <Dropdown
        v-model="formState.domain"
        :options="domainNames"
        placeholder="Select a domain"
        :disabled="isEdit"
      />
    </div>
    <div class="field">
      <label for="serviceName">Name</label>
      <InputText
        id="serviceName"
        v-model="formState.service"
        class="w-full"
        type="text"
        :disabled="isEdit"
      />
    </div>
    <div class="field">
      <label for="timeout">Timeout</label>
      <InputNumber id="timeout" v-model="formState.timeout" class="w-full" />
    </div>
    <div class="field">
      <label for="dataSchema">Data schema</label>
      <Textarea
        id="dataSchema"
        v-model="formState.dataSchema"
        class="w-full"
        rows="5"
        :auto-resize="true"
      />
    </div>
    <div class="field">
      <Button label="Submit" @click="submit" />
    </div>
  </DefaultCard>
</template>
