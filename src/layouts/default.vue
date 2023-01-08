<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <NLayout>
      <NLayoutHeader>
        <BaseHeader />
      </NLayoutHeader>
      <NLayoutContent>
        <slot />
      </NLayoutContent>
      <NLayoutFooter>Footer</NLayoutFooter>
    </NLayout>
  </NConfigProvider>
</template>

<script setup lang="ts">
  import { GlobalThemeOverrides } from 'naive-ui';
  import BaseHeader from '~/components/Base/BaseHeader/BaseHeader.vue';

  const themeOverrides: GlobalThemeOverrides = {
    common: {
      primaryColor: '#FF5403',
      primaryColorHover: '#ff2003',
      primaryColorPressed: '#dc0000',
      primaryColorSuppl: '#F90716',
    },
  };
</script>
