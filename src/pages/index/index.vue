<template>
  <div class="flex w-full justify-center">
    <div class="w-3/4">
      <NGrid x-gap="10">
        <NGi
          span="6"
          class="carousel-img"
        >
          <NCard
            size="small"
            class="carousel-img"
          >
            <NList> 
              <template #header>
                {{ t('category.category') }}
              </template>
              <NListItem
                v-for="c in categoryData"
                :key="c.icon"
              >
                <template #prefix>
                  <Icon :icon="c.icon" />
                </template>
                <NSpace>
                  <NButton
                    text
                    @click="openUrl(c.categoryInfo[0].url)"
                  >
                    {{ c.categoryInfo[0].title }}
                  </NButton>
                  /
                  <NButton
                    text
                    @click="openUrl(c.categoryInfo[1].url)"
                  >
                    {{ c.categoryInfo[1].title }}
                  </NButton>
                  /
                  <NButton
                    text
                    @click="openUrl(c.categoryInfo[2].url)"
                  >
                    {{ c.categoryInfo[2].title }}
                  </NButton>
                </NSpace>
              </NListItem>
            </NList>
          </NCard>
        </NGi>
        <NGi
          span="18"
          class="carousel-img"
        >
          <NCarousel
            autoplay
            centered-slides
          >
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
            >
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
            >
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
            >
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
            >
          </NCarousel>
        </NGi>
      </NGrid>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue';
  interface CategoryInfo {
    title: string;
    url: string;
  }
  interface Category {
    icon: string;
    categoryInfo: CategoryInfo[];
  }

  const { t } = useLang();

  const categoryData: Category[] = [
    {
      icon: 'fluent-emoji-high-contrast:dress',
      categoryInfo: [
        {
          title: t('category.womenClothing'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.underwear'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.luxury'),
          url: 'http://localhost:3000/',
        },
      ],
    },
    {
      icon: 'icon-park-outline:high-heeled-shoes',
      categoryInfo: [
        {
          title: t('category.womenShoes'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.menShoes'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.bag'),
          url: 'http://localhost:3000/',
        },
      ],
    },
    {
      icon: 'icon-park-outline:cosmetic-brush',
      categoryInfo: [
        {
          title: t('category.cosmetic'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.accessories'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.personalCare'),
          url: 'http://localhost:3000/',
        },
      ],
    },
    {
      icon: 'icon-park-outline:clothes-cardigan',
      categoryInfo: [
        {
          title: t('category.menClothing'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.sports'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.generalMerchandise'),
          url: 'http://localhost:3000/',
        },
      ],
    },
    {
      icon: 'material-symbols:phone-android-outline-rounded',
      categoryInfo: [
        {
          title: t('category.phone'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.3c'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.gift'),
          url: 'http://localhost:3000/',
        },
      ],
    },
    {
      icon: 'tabler:sofa',
      categoryInfo: [
        {
          title: t('category.homeDecoration'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.appliance'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.carSupplies'),
          url: 'http://localhost:3000/',
        },
      ],
    },
    {
      icon: 'mdi:food-fork-drink',
      categoryInfo: [
        {
          title: t('category.food'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.fresh'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.babyCare'),
          url: 'http://localhost:3000/',
        },
      ],
    },
    {
      icon: 'icon-park-outline:medicine-chest',
      categoryInfo: [
        {
          title: t('category.medicine'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.healthCare'),
          url: 'http://localhost:3000/',
        },
        {
          title: t('category.imported'),
          url: 'http://localhost:3000/',
        },
      ],
    },
  ];
</script>

<style scoped>
  .carousel-img {
    width: 100%;
    height: 450px;
    border-radius: 1rem;
    object-fit: cover;
  }
</style>
