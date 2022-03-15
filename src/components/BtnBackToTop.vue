<template>
  <button id="btn-back-to-top"></button>
</template>

<style scoped lang="scss">
#btn-back-to-top {
  display: inline-block;
  background-color: #ff9800;
  width: 50px;
  height: 50px;
  text-align: center;

  border-radius: 4px;
  border: none;

  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;

  &:after {
    content: "\f077";
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
    font-size: 2em;
    line-height: 50px;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
    background-color: #333;
  }

  &.show {
    opacity: 1;
    visibility: visible;
  }
}
</style>
