<script setup>
import { ref, watch } from 'vue'
import SectionTitle from '@/components/SectionTitle.vue'
import TheButton from '@/components/TheButton.vue'
import TheServiceType from '@/components/TheServiceType.vue'
import TheHeader from '@/components/TheHeader.vue'

import logo from '@/assets/logo.svg'
import title from '@/assets/title.svg'
import menuIcon from '@/assets/menu-icon.svg'
import waveLong from '@/assets/wave-long.svg'
import waveShort from '@/assets/wave-short.svg'
import waveNavy from '@/assets/wave-navy.svg'
import background from '@/assets/background.png'
import salad from '@/assets/salad.png'
import award from '@/assets/award.png'
import uxDesign from '@/assets/service-icons/ux-design.png'
import uiDesign from '@/assets/service-icons/ui-design.png'
import websiteDevelopment from '@/assets/service-icons/website-development.png'
import mobile from '@/assets/service-icons/mobile.png'
import ecommerce from '@/assets/service-icons/ecommerce.png'
import customer from '@/assets/service-icons/customer.png'
import digital from '@/assets/service-icons/digital.png'
import branding from '@/assets/service-icons/branding.png'
import marketing from '@/assets/service-icons/marketing.png'
import quote from '@/assets/quote.svg'
import tony from '@/assets/tony.png'
import digisaladList from '@/assets/digisalad-list.png'
import bottomBackground from '@/assets/bottom-background.png'
import rightArrow from '@/assets/right.svg'
import leftArrow from '@/assets/left.svg'
import about from '@/assets/images/about.png'
import works from '@/assets/images/works.png'
import careers from '@/assets/images/careers.png'
import insights from '@/assets/images/insights.png'
import service from '@/assets/images/service.png'
import carrot from '@/assets/images/carrot.png'
import cucumber from '@/assets/images/cucumber.png'


const servicesData = ref([
  {
    id:'type1',
    title: 'UX Design',
    image: uxDesign,
    content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    buttonText: 'VIEW MORE'
  },
  {
    id:'type2',
    title: 'UI Design',
    image: uiDesign,
    content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    buttonText: 'VIEW MORE'
  },
  {
    id:'type3',
    title: 'WEBSITE\nDEVELOPMENT',
    image: websiteDevelopment,
    content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    buttonText: 'VIEW MORE'
  },
  {    
    id:'type4',
    title:'MOBILE APP\nDEVELOPMENT',
    image: mobile,
    content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    buttonText: 'VIEW MORE'
  },
  {
    id:'type5',
    title:'ECOMMERCE',
    image: ecommerce,
    content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    buttonText: 'VIEW MORE'
  },
  {    
    id:'type6',
    title:'CUSTOMER LOYALTY',
    image: customer,
    content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    buttonText: 'VIEW MORE'
  },
  {    
    id:'type7',
    title:'DIGITAL TRANSFORMATION',
    image: digital,
    content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    buttonText: 'VIEW MORE'
  },
  {
    id:'type8',
    title:'DIGITAL MARKETING',
    image: marketing,
    content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    buttonText: 'VIEW MORE'
  },
  {
    id:'type9',
    title:'BRANDING',
    image: branding,
    content: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.',
    buttonText: 'VIEW MORE'
  },
])

const isMenuOpen = ref(false)

// Lock body scroll when menu is open
let scrollY = 0
watch(isMenuOpen, (open) => {
  const body = document.body
  if (open) {
    scrollY = window.scrollY || window.pageYOffset
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.overflow = 'hidden'
  } else {
    body.style.position = ''
    body.style.top = ''
    body.style.left = ''
    body.style.right = ''
    body.style.width = ''
    body.style.overflow = ''
    window.scrollTo(0, scrollY)
  }
})

</script>

<template>

  <main class="relative pb-[90px]">
      <TheHeader />

    <Transition name="menu">
      <div v-show="isMenuOpen" class="fixed inset-0 pb-20 z-50 w-full h-screen overflow-y-auto bg-linear-to-b from-[#585880] to-[#26C6D0] opacity-95">
        <img class="w-[140px] h-[62px] object-contain mt-5 ml-[60px]" :src="logo" alt="digiSalad" />
        <button type="button" @click="isMenuOpen = false" class="cursor-pointer absolute right-[32px] top-6 z-10">
          <p class="text-white text-2xl">
            Ｘ
          </p>
        </button>

        <div class="relative flex flex-wrap justify-center items-center content-center gap-x-10">
          <div class="flex flex-col gap-y-10">
            <!-- 1 -->
            <div class="relative w-[380px] h-[210px] overflow-hidden rounded-3xl">
              <!-- 背景圖層 -->
              <div
                class="absolute inset-0 w-full h-full bg-cover bg-center"
                :style="{ backgroundImage: `url('${about}')`,  opacity: 0.6 }"
              />
              <div class="absolute inset-0 bg-[#26C6D0]/90 flex justify-center items-center gap-x-[27px]">
                <img :src="uxDesign" class="w-[42px] h-[62px] object-contain" />
                <div class="flex flex-col justify-center items-start">
                  <p class="text-white font-normal tracking-[1.8px] mb-2">EMPOWERING BRANDS</p>
                  <div class="flex items-end">
                    <h3 class="uppercase text-white font-extrabold tracking-[2.5px] text-[28px] leading-none">
                      ABOUT US
                    </h3>
                    <span class="ml-2 w-2 h-2 rounded-full bg-[#EE6C8A]"></span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2 -->
            <div class="relative w-[380px] h-[320px] overflow-hidden rounded-3xl">
              <!-- 背景圖層 -->
              <div
                class="absolute inset-0 w-full h-full bg-cover bg-center"
                :style="{ backgroundImage: `url('${works}')`, opacity: 0.3  }"
              />
              <div class="absolute inset-0 bg-[#EE6C8ACC]/80 flex justify-start items-end px-[26px] pb-12">
                <div class="flex gap-x-5">
                  <img :src="uiDesign" class="w-[61px] h-[61px] object-contain" />
                  <div class="flex flex-col justify-center items-center">
                    <p class="text-white font-normal tracking-[1.8px]">CASE STUDIES</p>
                    <div class="flex items-end">
                      <h3 class="uppercase text-white font-extrabold tracking-[2.5px] text-[28px] leading-none">
                        WORKS
                      </h3>
                      <span class="ml-2 w-2 h-2 rounded-full bg-[#26C6D0]"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-y-10">
            <!-- 3 -->
            <TheCard
              :bg-image="careers"
              :icon-src="websiteDevelopment"
              :width="290"
              :height="430"
              :bg-image-opacity="0.6"
              overlay-color="#E6A94E"
              :overlay-opacity="0.85"
              subtitle="BE COOL WITH US"
              title="CAREERS"
              dot-color="#EE6C8A"
              :icon-width="92"
              :icon-height="47"
            />

            <!-- 4 -->
            <div class="relative w-[290px] h-[282px] overflow-hidden rounded-3xl">
              <!-- 背景圖層 -->
              <div
                class="absolute inset-0 w-full h-full bg-cover bg-center"
                :style="{ backgroundImage: `url('${insights}')`, opacity: 0.5 }"
              />
              <div class="absolute inset-0 bg-[#26D0A8]/80 flex flex-col justify-end items-start px-7 pb-12">
                <div class="flex flex-col items-start gap-y-4">
                  <img :src="cucumber" class="block w-[25px] h-[79px] object-contain" />
                  <div class="flex flex-col justify-center gap-y-2">
                    <p class="text-white font-normal tracking-[1.8px]">OUR STRATEGIES</p>
                    <div class="flex items-end">
                      <h3 class="uppercase text-white font-extrabold tracking-[2.5px] text-[28px] leading-none">
                        INSIGHTS
                      </h3>
                      <span class="ml-2 w-2 h-2 rounded-full bg-[#EE6C8A]"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-y-10">
            <!-- 5 -->
            <div class="relative w-[380px] h-[320px] overflow-hidden rounded-3xl">
              <!-- 背景圖層 -->
              <div
                class="absolute inset-0 w-full h-full bg-cover bg-center"
                :style="{ backgroundImage: `url('${service}')` }"
              />
              <div class="absolute inset-0 bg-[#585880]/85 flex flex-col justify-end items-start gap-x-[27px] px-7 pb-12">
                  <img :src="carrot" class="inline-block w-[36px] h-[67px] mb-[15px] object-contain" />
                  <div class="flex flex-col justify-center items-start">
                    <p class="text-white font-normal tracking-[1.8px]">AREAS OF EXPERTISES</p>
                    <div class="flex items-end ">
                      <h3 class="uppercase text-white font-extrabold tracking-[2.5px] text-[28px] leading-none">
                        SERVICES
                      </h3>
                      <span class="ml-2 w-2 h-2 rounded-full bg-[#EE6C8A]"></span>
                    </div>
                  </div>
                </div>
            </div>

            <!-- 6 -->
            <div class="relative w-[380px] h-[210px] overflow-hidden rounded-3xl bg-white px-10">
                <div class="flex flex-col w-[380px] h-[210px] justify-center items-start gap-y-2">
                  <p class="font-normal tracking-[1.8px]">START YOUR JOURNEY WITH US</p>
                  <div class="flex items-end">
                    <h3 class="text-[#26C6D0] uppercase font-extrabold tracking-[2.5px] text-[28px] leading-none">
                      CONTACT
                    </h3>
                    <span class="ml-2 w-2 h-2 rounded-full bg-[#EE6C8A]"></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </Transition>


    <!-- Banner -->
    <section class="relative min-h-screen overflow-hidden">
      <!-- 背景影片 -->
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                w-screen h-[56.25vw] min-w-[177.78vh] min-h-screen">
        <iframe
          class="absolute w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/8_4JRK4QkqU?autoplay=1&mute=1&controls=0&playsinline=1&rel=0&modestbranding=1&loop=1&playlist=8_4JRK4QkqU"
          frameborder="0"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    
      <!-- 半透明遮罩 -->
      <div class="absolute inset-0 bg-black/50">
        <!-- 固定在左側、垂直置中 -->
        <div class="absolute left-[62px] top-1/2 -translate-y-1/2
            flex items-center gap-3 text-white">
            <!-- 文字 + 橫線，整塊一起旋轉成直立 -->
            <div class="-rotate-90 origin-left flex items-center gap-3">
            <!-- 跟「文字高度中心」對齊的裝飾線 -->
            <span class="block h-px w-[113px] bg-white"></span>
            <span class="uppercase tracking-[0.35em] text-sm">
              DIGITAL AGENCY
            </span>
          </div>
        </div>

        <div v-if="isMenuOpen === false" class="relative left-[220px]">
          <img :src="logo" class="mt-[181px] mb-[34px] w-[198px] h-[88px]" />
          <img :src="title" class="w-[605px] h-[210px]" />
        </div>

        <div class="absolute top-10 right-[60px] flex items-center gap-11">
          <button type="button" class="cursor-pointer rounded-full py-3 px-2 bg-gradient-to-r from-[#4EE5EA] to-[#26D0A8]">
            <p class="text-white text-[14px] font-bold tracking-[1.14px]">START YOUR PROJECT</p>
          </button>
          <button type="button" @click="isMenuOpen = true" class="cursor-pointe w-[30px] h-[22px]">
            <img :src="menuIcon" class="w-full h-full" />
          </button>
        </div>
        <div class="absolute bottom-[75px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <img :src="salad" class="w-[65px] h-[65px] object-cover" />
          <p class="font-bold text-sm text-white tracking-[2px]">TASTE US NOW!</p>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="pt-16 relative bg-[#F2F2F2] max-w-[1440px] mx-auto">
      <div class="px-[216px] mb-[70px]">
        <div class="flex flex-col items-center justify-center mb-[70px]">
          <SectionTitle title="About Digisalad" :wave-img="waveLong" />
        </div>
  
        <div class="flex flex-col items-center justify-center mb-[30px]">
          <div class="mb-[30px]">
            <iframe
              width="960"
              height="544"
              src="https://www.youtube.com/embed/IeIRJ9jZ5Ro?si=hQ5135PA0kF3hVmh" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen />
          </div>
  
          <div class="text-center">
            <p class="leading-[28px] tracking-[1px] text-[#262626] font-normal">
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
            </p>
          </div>
        </div>
        <TheButton title="VIEW MORE" bg-color="#00C5CF" />

      </div>
      <!-- Awards -->
      <section class="relative bg-white ml-[98px] py-[65px] rounded-l-3xl rounded-br-3xl">
        <div class="flex gap-x-[37px] items-start px-[69px]">
          <!-- 左側文字區 -->
          <div class="max-w-[416px]">
            <SectionTitle title="AWARDS" :wave-img="waveShort" />
            <p class="mt-[15px] leading-[28px] tracking-[1px] text-[#262626]">
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum.
              Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
              Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl,
              vitae sagittis orci. Donec id dignissim nunc.
            </p>
          </div>

          <!-- 右側獎項圖 -->
          <div class="flex flex-wrap gap-x-[60px] gap-y-[30px] content-start">
            <img class="block w-[283px] h-[108px]" :src="award" alt="亞洲智能應用程式大獎">
            <img class="block w-[283px] h-[108px]" :src="award" alt="亞洲智能應用程式大獎">
            <img class="block w-[283px] h-[108px]" :src="award" alt="亞洲智能應用程式大獎">
            <img class="block w-[283px] h-[108px]" :src="award" alt="亞洲智能應用程式大獎">
          </div>
        </div>

      </section>

      
      
      <section class="w-full rounded-4xl -mt-[216px] bg-[#2AC6D0]">
        <div class="pt-[320px] pb-[443px] w-[1007px] mx-auto">
          <div class="flex flex-col items-center mb-[30px]">
            <SectionTitle title="OUR INGRADIENTS" :wave-img="waveNavy" />
            <p class="mt-[43px] text-center leading-[28px] tracking-[1px] text-white">
              Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
            </p>
          </div>
          <div class="mb-[85px]">
            <TheButton title="OUR SERVICES" bg-color="#585880" />
          </div>
          <div class="flex flex-wrap justify-center gap-x-10 gap-y-[60px]">
            <div v-for="data in servicesData" :key="data.id" class="basis-[calc((100%-80px)/3)] flex justify-center">
              <TheServiceType :icon="data.image" :title="data.title" :content="data.content" :button-text="data.buttonText" />
            </div>

            <button
              class="relative isolate w-full max-w-[560px]
                    bg-[#2AC6D0] text-white font-bold uppercase tracking-[0.2em]
                    px-6 py-3 leading-none
                    after:content-[''] after:absolute after:inset-x-2 after:bottom-3
                    after:h-2 after:bg-orange-300 after:z-0"
              type="button"
            >
              <span class="relative z-10">VIEW MORE DIGISALAD'S INGRADIENTS</span>
            </button>
          </div>
        </div>

        <!-- Intro Card -->
        <section class="absolute -mt-[299px] left-0 w-[1300px]">
          <div class="w-full h-[598px] rounded-3xl"
          :style="{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }">

            <!-- 內容 -->
            <div class="absolute inset-0 flex items-center justify-center gap-x-[68px] px-2">
              <!-- 頭像 -->
              <div class="flex flex-col items-center gap-y-2">
                <img
                  :src="tony"
                  alt="Profile"
                  class="w-[204px] h-[204px] rounded-full object-cover mb-[40px]"
                />
                <p class="text-[20px] font-bold tracking-[2px] text-white">TONY NG</p>
                <p class="text-sm font-normal tracking-[2px] text-white italic">Founder & Creative Director</p>
              </div>

              <!-- 文字區 -->
              <div class="flex flex-col items-center gap-y-[13px]">
                <img :src="quote" class="w-[90px] h-[90px]" />
                <p class="text-white leading-[48px] tracking-[2px] text-[22px] w-[734px] font-[Proxima Nova]">
                  A great digital work isn’t about designing beautiful pages purely. It is about context - how do we deliver the <span class="text-">right experience to the right person at the right time</span>. The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>


    <!-- Brand Experience -->
    <section class="flex flex-col items-center gap-y-[54px] mt-[430px]">
        <SectionTitle class="text-black" title="OUR BRAND EXPERIENCE" :wave-img="waveLong" :img-width="495" />
        <p class="tracking-[1px] text-center leading-[24px] text-[#262626] max-w-[1007px]">
          Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
        </p>
          <img
            :src="digisaladList"
            :wave-img="waveLong"
            class="w-[1040px] h-[720px] object-contain"
          />
    </section>

    <section class="relative w-full h-[1766px] px-[98px]">
      <div class="w-full h-full rounded-b-4xl bg-black/75 absolute inset-0 backdrop-blur-lg" />
      <div class="w-full h-full rounded-b-4xl" :style="{ backgroundImage: `url(${bottomBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        <div class="w-full relative top-1/2 -translate-y-1/2 z-10">
          <div class="flex justify-center items-center gap-x-[65px] relative">
            <div class="absolute -top-[32px] -right-[32px] w-[60px] h-[70px] text-white">
              <span class="absolute top-0 left-0 tracking-[1px]">01</span>
              <!-- 斜線 -->
              <span
                class="absolute left-1/2 top-1/2 w-[1px] h-[48px] bg-[#64D7E2] -translate-x-1/2 -translate-y-1/2 rotate-[60deg]"
              />
              <span class="absolute bottom-0 right-0 tracking-[1px]">04</span>
            </div>

            <div class="w-full absolute flex justify-between">
              <button type="button" class="cursor-pointer w-[56px] h-[56px]">
                <img class="w-full h-full" :src="leftArrow" />
              </button>
              <button type="button" class="cursor-pointer w-[56px] h-[56px]">
                <img class="w-full h-full" :src="rightArrow" />
              </button>
    
            </div>
            <div class="w-[540px] h-[540px] relative rounded-4xl" :style="{ backgroundImage: `url(${bottomBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
              <div class="absolute -bottom-[88px] -right-20">
                <TheButton class="py-[60px]" title="VIEW PROJECT" bg-color="#00C5CF" />
              </div>
            </div>
            
            <div class="w-[432px] mb-6">
              <h5 class="text-white font-bold tracking-[2.22px] mb-[20px]">HIGHLIGHTED SHOWCASE</h5>
              <h6 class="text-white mb-[40px]">
                <div class="relative inline-flex items-end">
                  <h3
                    class="relative text-white font-bold uppercase tracking-[3.64px] text-[32px]"
                  >
                    LP CLUB MOBILE APP
                    <span
                      class="pointer-events-none absolute left-0 -bottom-[2px] h-[6px]
                            w-[calc(100%+18px)] rounded-full
                            bg-[linear-gradient(90deg,#6FE5EA_0%,#2AC6D0_100%)]"
                    ></span>
                  </h3>

                  <!-- 右側粉紅圓點 -->
                  <span class="ml-2 mb-[10px] w-[10px] h-[10px] rounded-full bg-[#F08AA1]"></span>
                </div>
              </h6>
              <p class="text-white leading-[24px] font-normal tracking-[1px]">
                Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
/* Menu overlay enter/leave transition */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 250ms ease, transform 250ms ease;
}
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
