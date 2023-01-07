<template>
  <NLayout>
    <NLayoutHeader>
      <BaseHeader />
    </NLayoutHeader>
    <NLayoutContent>
      <slot></slot>
    </NLayoutContent>
    <NLayoutFooter>Footer</NLayoutFooter>
  </NLayout>
</template>

<script setup>
  import BaseHeader from '~/components/BaseHeader/BaseHeader.vue';
</script>
