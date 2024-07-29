<template>
  <div id="navbar" class="px-3 py-3">
    <img id="logo" style="width: 35px;" src="@/assets/images/logo/Logo.png" alt="Logo" />
    <div id="navbar-right"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  setup() {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        document.getElementById("logo").style.width = "25px";
      } else {
        document.getElementById("logo").style.width = "40px";
      }
    }
  },
};
</script>

<style scoped>
#navbar {
  overflow: hidden;
  background-color: #f1f1f1;
  transition: 0.4s;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
}
#navbar #logo {
  font-size: 40px;
  font-weight: bold;
  transition: 0.4s;
}
</style>
