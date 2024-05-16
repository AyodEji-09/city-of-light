<template>
  <div class="container-fluid p-0 mb-5">
    <SubHeader page="Contact"/>
    <div class="container-fluid">
      <div class="row d-flex px-md-5 gap-5 ">
        <div class="col-md-6 gap-4 d-flex flex-column ">
          <h3 class="text-info">Reach out to Us.</h3>
          <form action="" class="" @submit.prevent="submitForm">
            <div class="row d-flex gap-3 flex-column flex-md-row">
              <div  class="col  d-flex flex-column  ">
                <label for="firstName" class="">FIRST NAME</label>
                <input type="text" id="firstName" required v-model="firstName" class="col mt-2 py-2 rounded  border-primary border-1 ">
                </div>

                <div class="col d-flex flex-column">
                  <label for="lastNae">LAST NAME</label>
                  <input type="text" id="lastName" v-model="lastName" class="col mt-2 border-primary border-1  py-2 rounded ">
                </div>
              </div>
              <div class="row d-flex gap-3 flex-column mt-2 flex-md-row">                
                <div  class="col  d-flex flex-column">
                  <label for="Email" class="">EMAIL</label>
                  <input type="text" id="Email" v-model="Email" class="col py-2 rounded mt-2  border-primary border-1">
                  <small v-if="Email && !isValidEmail" class="error">Enter a valid email address</small>
                </div>
                <div class="col d-flex flex-column">
                  <label for="phoneNuber" required pattern="^\d{10}$">PHONE NUMBER</label>
                  <input type="text" id="phoneNumber" v-model="phoneNumber" class="col py-2 rounded mt-2 border-primary border-1 ">
                  <small v-if="phoneNumber && !isValidPhone" class="error">Enter a valid 10-digit phone number</small>
                </div>
              </div>
              <div  class="col  d-flex flex-column mt-2">
                <label for="message" class="">MESSAGE</label>
                <textarea  type="text" id="message" v-model="message" class="col mt-2 py-3 rounded border-primary border-1"/>
              </div>
              <button type="submit" :disabled="!isValidForm" class="w-100 mt-4 py-3 bg-primary text-white border-0 rounded text ">Submit</button>
            </form>
          </div>
        <div class="col-md-5">
          <div >
            <iframe width="1500" height="460" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=13%2C+Oluwole+Akintola+way+adacent+Raian+pharmacy%2C+Iyana+Bodija%2Cexpress%2C+Ibadan&t=k&z=13&ie=UTF8&iwloc=&output=embed">
            </iframe>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import SubHeader from "../../components/includes/SubHeader.vue";

const firstName = ref(' ');
const lastName = ref ('');
const Email = ref('');
const phoneNumber = ref('');
const message = ref('')

const isValidEmail = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email.value));
const isValidPhone = computed(() => /^\d{10}$/.test(phoneNumber.value));
const isValidForm = computed(() => firstName.value && isValidPhone.value && isValidEmail.value);

const submitForm = () => {
  const emailAddress =" taiwoakinfenwa2019@gmail.com";
  const subject = "Reach"
  const body = `First Name: ${firstName.value}\nLast Name:${lastName.value}\nPhoneNumber:${phoneNumber.value}\nMessage:${message.value}`

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href=mailtoLink
}
</script>
<style scoped>
.error {
  color: #e74c3c;
  font-size: 0.875em;
}
</style>
