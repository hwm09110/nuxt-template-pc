<template>
  <div class="header-wrap">
    <div class="header-inner flex items-center">
      <div class="header-content flex justify-between items-center">
        <div class="logo-box">
          <!-- <img src="~/assets/images/logo/logo.png" > -->
          <img :src="$t('logo')" >
        </div>
        <div class="tabs-nav flex">
          <div class="tab-item">
            <NuxtLink class="nav-link" :to="localePath('/')">{{ $t('menu.home') }}</NuxtLink>
          </div>
          <div class="tab-item">
            <NuxtLink class="nav-link" :to="localePath('/product')">{{
              $t('menu.product')
            }}</NuxtLink>
          </div>
          <div class="tab-item">
            <NuxtLink class="nav-link" :to="localePath('/news')">{{ $t('menu.news') }}</NuxtLink>
          </div>
          <div class="tab-item">
            <NuxtLink class="nav-link" :to="localePath('/joinUs')">{{
              $t('menu.joinUs')
            }}</NuxtLink>
          </div>
          <div class="tab-item lang-switch flex items-center">
            <span
              v-for="(locale, index) in locales"
              :key="index"
              class="lang-item"
              @click="handleChangeLang(locale.code)"
            >
              {{ locale.name
              }}<span v-if="index < locales.length - 1">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useI18n } from 'vue-i18n';

  const { locales, setLocale } = useI18n();
  const localePath = useLocalePath();

  function handleChangeLang(code) {
    console.log('handleChangeLang-->', code);
    setLocale(code);
  }
</script>
<style lang="scss" scoped>
  .header-wrap {
    width: 100%;
    height: $header-height;
    background: #fff;
  }
  .header-inner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: $header-height;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    z-index: 1000;
    background: #fff;
    .header-content {
      width: 1150px;
      margin: 0 auto;
      .logo-box {
        font-size: 0;
        > img {
          height: 50px;
        }
      }

      .tabs-nav {
        .tab-item {
          position: relative;
          color: #333;
          font-size: 16px;
          & + .tab-item {
            margin-left: 48px;
          }
          .nav-link {
            display: block;
            padding: 6px 2px;
            &.router-link-active {
              font-weight: bold;
            }
            &::after {
              position: absolute;
              content: '';
              width: 0;
              height: 2px;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              border-radius: 1px;
              background-image: linear-gradient(
                to top,
                currentColor,
                currentColor 80%,
                transparent 80%
              );
              transition: 0.6s width;
            }
            &:hover::after {
              width: 100%;
            }
          }
        }
        .lang-switch {
          .lang-item {
            cursor: pointer;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>
