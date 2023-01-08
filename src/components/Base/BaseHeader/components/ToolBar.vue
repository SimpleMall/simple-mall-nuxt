<template>
  <div class="flex h-24 w-full justify-center">
    <div class="w-3/4 pt-1">
      <NGrid
        item-responsive
        responsive="screen"
        class="h-full"
      >
        <NGi span="6"> 
          <div class="flex h-full flex-col justify-center">
            <NImage
              src="logo-text.png"
              width="160"
            />
          </div>
        </NGi>
        <NGi span="12">
          <div class="flex h-full flex-col justify-center">
            <SearchBar />
          </div>
        </NGi>
        <NGi span="6">
          <div class="flex h-full flex-col justify-center">
            <ActionButton />
          </div>
        </NGi>
      </NGrid>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import SearchBar from '~/components/Base/BaseHeader/components/SearchBar.vue';
  import ActionButton from '~/components/Base/BaseHeader/components/ActionButton.vue';

  export default defineComponent({
    components: { ActionButton, SearchBar },
  });
</script>

<style scoped></style>
