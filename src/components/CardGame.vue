<template>
   <div class="game">
    <div class="cards">
      <div v-for="(card, index) in cards" :key="index" class="card" @click="cardClick(index)" :class="{ reverse: card.reverse, matched: card.matched }">
        <div class="card-info">
          <div class="card-front"></div>
          <div class="card-back">
            <img :src="card.image" alt="Card" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="button-container">
    <a href="#" class="button_css" @click="gameStartClick()">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        게임 시작
    </a>
    $nbsp;
    <a href="#" class="button_css" @click="resetCards()">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        다시 시작
    </a>
    <!-- <a @click="gameStartClick()" data-text="게임 시작"></a>
    &nbsp;&nbsp;
    <a @click="resetCards()" data-text="다시 시작"></a> -->
  </div>
</template>

<script>
export default {
  name: 'CardGame',
  props: {
    msg: String
  }
}
</script>

<script setup>
import { ref, reactive, watch, nextTick } from 'vue';

const imageContext = require.context(
  '../assets/img/png',
  false,                       
  /\.png$/                     
);

const imageFilenames = imageContext.keys().map(key => key.slice(2));
const reverseCardList = ref([]);
const gameStart = ref(false);
const gameEnd = ref(false);
const gameLv = ref(0);

const shuffleArray = (array) => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const cardsList = () => {
  const shuffledFilenames = shuffleArray(imageFilenames);
  const duplicatedImages = shuffledFilenames.flatMap((filename) => ([
    {
      image: imageContext(`./${filename}`),
      reverse: false,
      matched: false,
    },
    {
      image: imageContext(`./${filename}`),
      reverse: false,
      matched: false,
    }
  ]));
  
  if(gameLv.value === 0){
    return duplicatedImages.slice(0, 12);
  }

  return duplicatedImages
}

const cards = reactive(
  cardsList()
);

const shuffleCard = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

shuffleCard(cards);

const cardClick = (index) => {
  if(!gameStart.value){
    alert('게임 시작을 눌러주세요.');
    return
  }

  if (reverseCardList.value.length < 2) {
    const card = cards[index];

    if (!card.reverse && !card.matched) {
      card.reverse = true;
      reverseCardList.value.push(card);

      if (reverseCardList.value.length === 2) {
        checkMatchingCards();
      }
    }
  }
};

const checkMatchingCards = () => {
  const [card1, card2] = reverseCardList.value;

  if (card1.image === card2.image) {
    card1.matched = true;
    card2.matched = true;
  }

  setTimeout(() => {
    noSameCard();
  }, 500);
};

const noSameCard = () => {
  reverseCardList.value.forEach((card) => {
    card.reverse = false;
  });
  reverseCardList.value = [];
};

const resetCards = async () => {
  gameEnd.value = false;
  gameStart.value = false;

  cards.forEach((card)=>{
    card.reverse = false;
    card.matched = false;
  })

  const newCards = cardsList();
  cards.splice(0, cards.length, ...newCards);
  shuffleCard(cards);
  
  setTimeout(() => {
    gameStartClick();
  }, 1000);
};

const gameStartClick = async () => {
  if(gameStart.value){
    return
  }

  cards.forEach((card,index)=>{
    setTimeout(function() {
      card.reverse = true;
    }, 1000 + 100 * index);
  })

  setTimeout(() => {
    cards.forEach((card) => {
      if (!card.matched) {
        card.reverse = false;
      }
    });
  }, 3000);

  gameStart.value = true;
}

watch(cards, () => {
  const matchedCards = cards.filter((card) => card.matched);

  if (matchedCards.length === cards.length && !gameEnd.value) {
    gameEnd.value = true;
    setTimeout(() => {
      cards.forEach((card,index)=>{
        setTimeout(function() {
          card.reverse = false;
          card.matched = false;
        }, 1000 + 100 * index);
      });

      alert('카드 게임 -완-');

      nextTick(() => {
        resetCards();
      })
    }, 500);
  }
});
</script>
<style scoped>
.game {
  width: 100vw;
  height: 70vh;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cards {
  width: 50rem;
  height: 50rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-left: 10px;
}

.card {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 90px;
  height: 130px;
}

@media (min-width: 300px)
{
    .card {
      width: 60px;
      height: 100px;
    }
}

@media (min-width: 360px)
{
    .card {
      width: 75px;
      height: 115px;
    }
}

@media (min-width: 420px)
{
    .card {
      width: 90px;
      height: 130px;
    }
}

@media (min-width: 500px)
{
  .game{
    height:50vh;
  }
  .card {
    width: 110px;
    height: 150px;
  }
}

@media (min-width: 550px)
{
  .game{
    height:55vh;
  }
  .card {
    width: 120px;
    height: 160px;
  }
}

@media (min-width: 650px)
{
  .game{
    height:60vh;
  }
  .card {
    width: 130px;
    height: 170px;
  }
}

@media (min-width: 700px)
{
  .game{
    height:60vh;
  }
  .card {
    width: 150px;
    height: 190px;
  }
}

@media(min-width:800px) {
  .game{
    height:70vh;
  }
  .card {
    width: 180px;
    height: 220px;
  }
}

.card-info {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card.reverse .card-info {
  transform: rotateY(180deg);
}

.card-front {
  background-size: cover;
  background-position:center;
  background-image: url('../assets/img/gameFront.png');
  cursor: pointer;
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
  background-color: #ffffff;
}
.card-back img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.matched .card-info {
  transform: rotateY(180deg);
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.button_css{
    position: relative;
    display: inline-block;
    padding: 25px 30px;
    margin: 0px 0px 0px 0px;
    color: #03e9f4;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;   
}
.button_css:hover{
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 200px #03e9f4;
     -webkit-box-reflect:below 1px linear-gradient(transparent, #0005);
}
.button_css:nth-child(1){
    filter: hue-rotate(270deg);
}
.button_css:nth-child(2){
    filter: hue-rotate(110deg);
}
.button_css span{
    position: absolute;
    display: block;
}
.button_css span:nth-child(1){
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,#03e9f4);
    animation: animate1 1s linear infinite;
}
@keyframes animate1{
    0%{
        left: -100%;
    }
    50%,100%{
        left: 100%;
    }
}
.button_css span:nth-child(2){
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg,transparent,#03e9f4);
    animation: animate2 1s linear infinite;
    animation-delay: 0.25s;
}
@keyframes animate2{
    0%{
        top: -100%;
    }
    50%,100%{
        top: 100%;
    }
}
.button_css span:nth-child(3){
    bottom: 0;
    right: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,#03e9f4);
    animation: animate3 1s linear infinite;
    animation-delay: 0.50s;
}
@keyframes animate3{
    0%{
        right: -100%;
    }
    50%,100%{
        right: 100%;
    }
}

.button_css span:nth-child(4){
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg,transparent,#03e9f4);
    animation: animate4 1s linear infinite;
    animation-delay: 0.75s;
}
@keyframes animate4{
    0%{
        bottom: -100%;
    }
    50%,100%{
        bottom: 100%;
    }
}

</style>
