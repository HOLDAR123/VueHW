<template>
  <div>
    <img v-imgSwiper="{ images: imgLinks, interval: 2000 }" alt="Image" style="width: 500px; height: 500px;"/>
  </div>
</template>


<script>
export default {
  name: "App",
  data() {
    return {
      imgLinks: [
        "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1345014/0eeae6d05faf0d0e7c8850d21c91ddc6/960x540",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNbm9TFYaTniWQ1zCvfUHuL44OpQAAsNDVAw&usqp=CAU",
        "https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"
      ],
      currentImage: ""
    };
  },
  directives: {
    imgSwiper: {
      mounted(el, binding) {
        const images = binding.value.images;
        const interval = binding.value.interval;

        function changeImage() {
          const randomImg = Math.floor(Math.random() * images.length);
          console.log(randomImg); //For checking
          el.src = images[randomImg];
        }
        changeImage();
        setInterval(changeImage, interval);
      }
    }
   
  },
};

</script>