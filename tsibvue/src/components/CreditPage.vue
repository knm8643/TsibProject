<template>
  <div>
    <div class="intro-section">
      <div class="image-container">
        <img src="../../public/teamPhoto/DevelopTeam(color).jpeg" alt="team photo">
        <div class="intro-text">
          <h2>우리를 소개합니다</h2>
          <p>평균 나이29세 최고의 개발자를 꿈꾸는 우리들의 블로그에 오신 걸 환영합니다</p>
        </div>
      </div>
    </div>
    <div class="content-section">
      중앙바디<br>
      작업할거없다싶을때 만들어주세요★
    </div>
    <div class="image-section">
      <img src="../../public/teamPhoto/DevelopTeam(black).jpeg" alt="team photo">
    </div>
  </div>
</template>

<script>
import creaditPage from "@/js/creaditPage.js";
export default creaditPage;
</script>

<style scoped>
.image-container {
  width: 1440px;
  height: 960px;
  margin: 0 auto;
  position: relative;
  /* filter: blur(2px); */
  opacity: 0.8;
  z-index: 1; /* 이미지를 최상위로 설정 */
}

.image-container::after {
position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    /* 빈 값으로 넣어야 가상의 요소 생성; */
    content: '';
    border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: rgba(0, 0, 0, 0.5); /* 검은색 반투명 배경 레이어 */
}

.image-container .intro-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 2; /* 텍스트를 이미지 위로 띄움 */
  filter: none;
}

.intro-text h2 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.intro-text p {
  font-size: 1.2em;
}

.content-section {
  height: 100vh;
  overflow: hidden;
}

.image-section {
  height: 100vh;
  overflow: hidden;
}

.intro-section {
  position: relative; /* 요소를 상대 위치로 설정 */
  /* background-color: #ffffff;  */
}
</style>