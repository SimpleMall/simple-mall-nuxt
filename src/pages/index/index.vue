<template>
  <div class="flex w-full justify-center">
    <div class="w-3/4">
      <NSpace
        vertical
        size="large"
      >
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
              />
              <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
              />
              <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
              />
              <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
              />
            </NCarousel>
          </NGi>
        </NGrid>

        <NCard
          class="card-border"
          size="large"
        >
          <template #header>
            <NGradientText> 限时秒杀 </NGradientText>
          </template>
          <NGrid>
            <NGi span="4">
              <NCard
                class="card-border"
                :bordered="false"
                hoverable
                @click="openUrl('https://www.baidu.com')"
              >
                <NList
                  :bordered="false"
                  :show-divider="false"
                >
                  <NListItem>
                    <img
                      class="card-border"
                      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                    />
                  </NListItem>
                  <NListItem>
                    <div class="flex justify-center">
                      <NButton text>
                        <NEllipsis style="max-width: 8rem"> iphone 14 pro max 256g </NEllipsis>
                      </NButton>
                    </div>
                  </NListItem>
                  <NListItem>
                    <div class="flex justify-center">
                      <NText type="primary"> $100 </NText>
                    </div>
                  </NListItem>
                </NList>
              </NCard>
            </NGi>

            <NGi span="4">
              <NCard
                class="card-border"
                :bordered="false"
                hoverable
                @click="openUrl('https://www.baidu.com')"
              >
                <NList
                  :bordered="false"
                  :show-divider="false"
                >
                  <NListItem>
                    <img
                      class="card-border"
                      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                    />
                  </NListItem>
                  <NListItem>
                    <div class="flex justify-center">
                      <NButton text>
                        <NEllipsis style="max-width: 8rem"> iphone 14 pro max 256g </NEllipsis>
                      </NButton>
                    </div>
                  </NListItem>
                  <NListItem>
                    <div class="flex justify-center">
                      <NText type="primary"> $100 </NText>
                    </div>
                  </NListItem>
                </NList>
              </NCard>
            </NGi>

            <NGi span="4">
              <NCard
                class="card-border"
                :bordered="false"
                hoverable
                @click="openUrl('https://www.baidu.com')"
              >
                <NList
                  :bordered="false"
                  :show-divider="false"
                >
                  <NListItem>
                    <img
                      class="card-border"
                      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                    />
                  </NListItem>
                  <NListItem>
                    <div class="flex justify-center">
                      <NButton text>
                        <NEllipsis style="max-width: 8rem"> iphone 14 pro max 256g </NEllipsis>
                      </NButton>
                    </div>
                  </NListItem>
                  <NListItem>
                    <div class="flex justify-center">
                      <NText type="primary"> $100 </NText>
                    </div>
                  </NListItem>
                </NList>
              </NCard>
            </NGi>
          </NGrid>
        </NCard>

        <NCard
          class="card-border"
          size="large"
        >
          <template #header>
            <NGradientText> 猜你喜欢 </NGradientText>
          </template>
          <NGrid>
            <NGi span="4">
              <NCard
                class="card-border"
                :bordered="false"
                hoverable
                @click="openUrl('https://www.baidu.com')"
              >
                <NList
                  :bordered="false"
                  :show-divider="false"
                >
                  <NListItem>
                    <img
                      class="card-border"
                      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                    />
                  </NListItem>
                  <NListItem>
                    <div class="flex justify-center">
                      <NButton text>
                        <NEllipsis style="max-width: 8rem"> iphone 14 pro max 256g </NEllipsis>
                      </NButton>
                    </div>
                  </NListItem>
                  <NListItem>
                    <div class="flex justify-center">
                      <NText type="primary"> $100 </NText>
                    </div>
                  </NListItem>
                </NList>
              </NCard>
            </NGi>

            <NGi span="4">
              <NCard
                class="card-border"
                :bordered="false"
                hoverable
                @click="openUrl('https://www.baidu.com')"
              >
                <NList
                  :bordered="false"
                  :show-divider="false"
                >
                  <NListItem>
                    <img
                      class="card-border"
                      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                    />
                  </NListItem>
                  <NListItem>
                    <div class="flex justify-center">
                      <NButton text>
                        <NEllipsis style="max-width: 8rem"> iphone 14 pro max 256g </NEllipsis>
                      </NButton>
                    </div>
                  </NListItem>
                  <NListItem>
                    <div class="flex justify-center">
                      <NText type="primary"> $100 </NText>
                    </div>
                  </NListItem>
                </NList>
              </NCard>
            </NGi>

            <NGi span="4">
              <NCard
                class="card-border"
                :bordered="false"
                hoverable
                @click="openUrl('https://www.baidu.com')"
              >
                <NList
                  :bordered="false"
                  :show-divider="false"
                >
                  <NListItem>
                    <img
                      class="card-border"
                      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
                    />
                  </NListItem>
                  <NListItem>
                    <div class="flex justify-center">
                      <NButton text>
                        <NEllipsis style="max-width: 8rem"> iphone 14 pro max 256g </NEllipsis>
                      </NButton>
                    </div>
                  </NListItem>
                  <NListItem>
                    <div class="flex justify-center">
                      <NText type="primary"> $100 </NText>
                    </div>
                  </NListItem>
                </NList>
              </NCard>
            </NGi>
          </NGrid>
        </NCard>
      </NSpace>
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

  .card-border {
    width: 100%;
    border-radius: 1rem;
  }
</style>
