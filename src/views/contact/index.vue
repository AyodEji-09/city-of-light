<template>
  <div class="container-fluid p-0 mb-5">
    <SubHeader page="Contact"/>
    <div class="container-fluid">
      <div class="row d-flex container px-md-5 gap-5 ">
        <div class="col-md-6 gap-4 d-flex flex-column ">
          <h3 class="text-info">Reach out to Us.</h3>
          <form action="" class="">
            <div class="row d-flex gap-3 flex-column flex-md-row">
              <div  class="col  d-flex flex-column  ">
                <label for="" class="">FIRST NAME</label>
                <input type="text" class="col mt-2 py-2 rounded  border-primary border-1 ">
                </div>

                <div class="col d-flex flex-column">
                  <label for="">LAST NAME</label>
                  <input type="text" class="col mt-2 border-primary border-1  py-2 rounded ">
                </div>
              </div>
              <div class="row d-flex gap-3 flex-column mt-2 flex-md-row">                
                <div  class="col  d-flex flex-column">
                  <label for="" class="">EMAIL</label>
                  <input type="text" class="col py-2 rounded mt-2  border-primary border-1">
                </div>
                <div class="col d-flex flex-column">
                  <label for="">PHONE NUMBER</label>
                  <input type="text" class="col py-2 rounded mt-2 border-primary border-1 ">
                </div>
              </div>
              <div  class="col  d-flex flex-column mt-2">
                <label for="" class="">MESSAGE</label>
                <textarea  type="text" class="col mt-2 py-3 rounded border-primary border-1"/>
              </div>
              <button type="submit" class="w-100 mt-4 py-3 bg-primary text-white border-0 rounded text ">Submit</button>
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
import SubHeader from "../../components/includes/SubHeader.vue";
</script>
