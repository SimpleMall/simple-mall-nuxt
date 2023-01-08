<template>
  <div class="flex h-7 w-full justify-center bg-slate-800">
    <div class="w-3/4 pt-1">
      <NGrid
        item-responsive
        responsive="screen"
      >
        <NGi
          v-for="u in urlData"
          :key="u.title"
          span="4 m:2 l:1"
        >
          <NButton
            text-color="#9ca3af"
            text
            @click="openUrl(u.url)"
          >
            {{ u.title }}
          </NButton> 
        </NGi>
      </NGrid>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { openUrl } from '~/utils/redirect';
  interface NavigationUrl {
    title: string;
    url: string;
  }

  const urlData: NavigationUrl[] = [
    {
      title: 'Index',
      url: 'https://www.baidu.com',
    },
    {
      title: 'Doc',
      url: 'https://www.baidu.com',
    },
  ];
</script>
