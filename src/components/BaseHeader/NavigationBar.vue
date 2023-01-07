<template>
  <div class="flex h-7 w-full justify-center bg-slate-800">
    <div class="w-3/4 p-1">
      <NGrid :cols="12">
        <NGi :span="1" v-for="u in urlData" :key="u.title">
          <NButton text-color="#9ca3af" text>{{ u.title }}</NButton>
        </NGi>
      </NGrid>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
