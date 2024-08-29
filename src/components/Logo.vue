<template>
  <div :class="[$style.logoWrapper]">
    <h1 :class="[$style.logo]">
      Crazy Trivia
      <img
          src="@/assets/images/homerun-guys.webp"
          :class="[$style.logoImage]"
          alt="illustration of 3 faces"
      />
    </h1>
  </div>
</template>
<style module>
.logoWrapper {
  width: 100%;
  display: flex;
  justify-content: center;

}

.logoImage {
  width: 80px;
  position: absolute;
  right: -67px;
  top: -10px;
  transform: rotate(20deg);
}

.logo {
  text-align: center;
  position: relative;
}
</style>
