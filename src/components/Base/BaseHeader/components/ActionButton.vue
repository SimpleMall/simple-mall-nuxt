<template>
  <div class="flex w-full justify-center">
    <NSpace>
      <NBadge
        value="1"
        :offset="[-3, 3]"
      >
        <NButton
          circle
          type="primary"
          quaternary
          size="large"
        >
          <template #icon>
            <NIcon>
              <CartOutline />
            </NIcon>
          </template>
        </NButton>
      </NBadge>
      <NButton
        circle
        type="primary"
        quaternary
        size="large"
      >
        <template #icon>
          <NIcon>
            <PersonOutline />
          </NIcon>
        </template>
      </NButton>
    </NSpace>
  </div>
</template>

<script setup lang="ts">
  import { PersonOutline, CartOutline } from '@vicons/ionicons5';
</script>
