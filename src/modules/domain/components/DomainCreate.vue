<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import DefaultCard from '@/components/DefaultCard.vue'
import { useDomainsStore } from '../store'
import useUserStore from '@/store'
import { ROUTES } from '@/router/routes'

const domainStore = useDomainsStore()
const userStore = useUserStore()
const router = useRouter()
const domainName = ref('')
const valid = ref()
const isCreating = ref(false)

const submit = async () => {
  if (valid.value) {
    isCreating.value = true
    const { error } = await domainStore.addDomain(domainName.value)
    await userStore.getUserData()
    if (error) return (isCreating.value = false)
    router.push({
      name: ROUTES.domainModule.domainList.name,
    })
  } else {
    console.log('checkDomains')
  }
}

const validateDomainName = () => {
  if (domainName.value === '') {
    return false
  }
  const re = /[^a-zA-Z0-9-]/
  valid.value = !re.test(domainName.value)
}

watch(
  () => domainName.value,
  value => {
    domainName.value = value.toLowerCase().replace(/\s/g, '')
    validateDomainName()
  },
)
</script>

<template>
  <DefaultCard>
    <div class="font-medium text-3xl text-900 mb-3">
      {{ $t('page.domain.title') }}
    </div>
    <div class="grid formgrid">
      <div class="col-12">
        <InputText
          v-model="domainName"
          type="text"
          :class="!valid && domainName.length ? 'p-invalid' : ''"
        />
        <small
          v-if="!valid && domainName.length"
          id="domain-help"
          class="p-error"
          >{{ $t('page.domain.wrongInputMessage') }}</small
        >
      </div>
      <div class="col-12 mt-3">
        <Button
          :disabled="!valid || isCreating"
          :label="$t('submit')"
          @click="submit"
        />
      </div>
    </div>
  </DefaultCard>
</template>
