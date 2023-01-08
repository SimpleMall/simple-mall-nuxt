<template>
  <div>
    <NInputGroup>
      <NInput round />
      <NButton
        type="primary"
        round
      >
        {{ t('common.search') }}
      </NButton>
    </NInputGroup>
  </div>
</template>

<script setup lang="ts">
  const { t } = useLang();
</script>
