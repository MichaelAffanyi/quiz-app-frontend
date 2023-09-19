<script setup>
import ContactCard from "@/components/home/contact/contactCard.vue";
import phoneIcon from '@/assets/landing-page/phone.svg'
import locationIcon from '@/assets/landing-page/location.svg'
import faxIcon from '@/assets/landing-page/fax.svg'
import mailIcon from '@/assets/landing-page/mail.svg'

const contactMethods = [
  {
    name: 'Phone Number',
    icon: phoneIcon,
    value: '(208) 555-0112'
  },
  {
    name: 'E-Mail Address',
    icon: mailIcon,
    value: 'johndoe@gmail.com'
  },
  {
    name: 'Fax Address',
    icon: faxIcon,
    value: '(208) 555-0112'
  },
  {
    name: 'Location',
    icon: locationIcon,
    value: '6391 Elgin St. Celina, Delaware 10299'
  }
]
</script>

<template>
  <div class="flex flex-col px-20 gap-20 mb-24">
    <h1 class="text-center font-semibold text-5xl">Contact Us</h1>
    <div class="flex gap-32">
      <section class="flex flex-col gap-8">
        <contact-card v-for="contactMethod in contactMethods" :method="contactMethod"></contact-card>
      </section>
      <section>
          <h4 class="font-semibold text-3xl">Send message</h4>
          <span  class="text-[#999999]">We value your input and want to make our quiz app the best it can be. If you have any questions, feedback or suggestions, we're all ears! Send us a message and our team will do our best to respond as quickly as possible.</span>
        <form class="grid grid-cols-2 gap-6 mt-8">
          <div class="form-control">
            <label for="name">Name</label>
            <input type="text" name="name" id="name">
          </div>
          <div class="form-control">
            <label for="email">Email</label>
            <input type="text" name="email" id="email">
          </div>
          <div class="form-control">
            <label for="Phone-number">Phone number</label>
            <input type="text" name="Phone-number" id="Phone-number">
          </div>
          <div class="form-control">
            <label for="subject">Subject</label>
            <input type="text" name="subject" id="subject">
          </div>
          <div class="form-control col-span-2">
            <label for="message">Subject</label>
            <textarea id="message" class="resize-none w-full h-[186px] border border-[#A6A6A6] rounded-md focus:outline-0 p-6 text-lg"></textarea>
          </div>
          <base-button class="h-[65px] w-[340px]" type="submit">Submit</base-button>
        </form>
      </section>
    </div>
  </div>
</template>

<style scoped>

.form-control {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-control label {
  font-size: 19.2px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.096px;
}

.form-control input {
  width: 100%;
  height: 65px;
  border: 1px solid #A6A6A6;
  border-radius: 4px;
  padding: 0 24px;
  font-size: 18px;
}

.form-control input:focus {
  outline: none;
}
</style>