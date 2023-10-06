<script>
  import icon from "@/assets/dashboard/settingsIcon.svg"
  import generalIcon from "@/assets/dashboard/settings/generalIcon.vue";
  import passwordIcon from "@/assets/dashboard/settings/passwordComponent.vue"
  import quizzesIcon from "@/assets/dashboard/settings/quizzesIcon.vue"
  import deleteIcon from "@/assets/dashboard/settings/deleteIcon.vue";
  import generalComponent from "@/components/dashboard/settings/generalComponent.vue";
  import passwordComponent from "@/components/dashboard/settings/changePasswordComponent.vue";
  import quizzesComponent from "@/components/dashboard/settings/quizzesComponent.vue";
  import {mapGetters} from "vuex";

  export default {
    data() {
      return {
        navs: [
          {
            name: 'general',
            title: 'General',
            icon: 'generalIcon'
          },
          {
            name: 'password',
            title: 'Password',
            icon: 'passwordIcon'
          },
          {
            name: 'quizzes',
            title: 'My Quizzes',
            icon: 'quizzesIcon'
          }
        ],
        activeTab: 'general'
      }
    },
    components: {
      general: generalComponent,
      password: passwordComponent,
      quizzes: quizzesComponent,
      generalIcon,
      passwordIcon,
      quizzesIcon,
      deleteIcon
    },
    computed: {
      ...mapGetters(['getUser'])
    },
    methods: {
      setActive(tab) {
        this.activeTab = tab
      },
      openModal() {
        this.$store.commit('toggleDeleteModal')
      }
    }
  }
</script>

<template>
  <div class="w-full pt-28 pb-48 flex justify-center">
    <div class="w-max h-max">
      <div class="flex gap-6 items-center">
        <div class="w-[88px] h-[88px] img-container">
          <img :src="getUser.profilePhoto" alt="">
        </div>
        <div>
          <p class="font-semibold text-lg">{{getUser.name}}</p>
          <p>{{getUser.email}}</p>
        </div>
      </div>
      <div class="flex gap-24 mt-10">
        <div class="flex flex-col gap-12 border-r border-[#CCCCCC] w-[238px] h-[441px]">
          <span v-for="nav in navs" class="nav" :class="{active: activeTab === nav.name}" @click="setActive(nav.name)">
            <component :is="nav.icon"></component>
            {{ nav.title }}
          </span>
            <span @click="openModal" class="flex gap-2 items-center text-[#E60000] font-semibold w-max hover:bg-[#F2F2F2] p-2 cursor-pointer rounded-lg">
            <delete-icon></delete-icon>
            Delete Account
          </span>
        </div>
<!--        <general-component :user="user"></general-component>-->
        <component :is="activeTab"></component>
      </div>
    </div>
  </div>
</template>

<style scoped>

.nav {
  width: max-content;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}

.active,  .nav:hover {
  background: #F2F2F2;
  color: #0267FF;
  font-weight: 600;
}

.active :deep(svg path), .nav:hover :deep(svg path) {
  fill: #0267FF;
}

:deep(.img-container) {
  background: green;
  border: 4px solid white;
  border-radius: 50%;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

:deep(.img-container img){
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.btn) {
  padding: 8px;
  border-radius: 4px;
  background: #0267FF;
  color: white;
  width: max-content;
}

:deep(.input-container) {
  display: flex;
  flex-direction: column;
  gap: 8px;
}


:deep(.input-container input) {
  background: transparent;
  border: 1px solid #999999;
  padding: 8px 16px;
  border-radius: 4px;
}

:deep(.input-container input:focus) {
  outline: none;
}

:deep(.error) {
  color: #FF4D4D;
  font-size: 14px;
}
:deep(.errorInput) {
  border: 1px solid #FF4D4D;
}
</style>