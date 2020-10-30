const movementDisplay = document.querySelector ('#movement')
const game = document.querySelector('#game')

//syncing up the canva's internal height to its apparent height&width
const computedStyle = getComputedStyle(game)

const height = computedStyle.height
const width = computedStyle.width

game.height = height.replace('px', '')
game.width = width.replace('px' ,'')

// //grab the context from the canvas
// const ctx = game.getContext('2d')
// ctx.fillStyle = 'white';
// ctx.strokeStyle = 'red';
// ctx.lineWidth = 5;
// // where we use the contex tot draw
// //position of each box top left corner (x(10),y(10) both are positions, (100,100) these are the width adnd length)
// ctx.fillRect(10, 10, 100, 100);
// ctx.strokeRect(10, 10, 100, 100);

// function drawBox(x,y, size , color){
//     ctx.fillstyle = color;
//     ctx.fillRect(x, y, size, size)
// }


// drawBox(200, 200, 50, 50)
// drawBox(300, 300, 50, 50)

// var ogre = {
//     x : 10,
//     y : 10,
//     color : "#BADA55",
//     width : 40,
//     height : 80,
//     alive : true,
//     render: function () {
//       ctx.fillStyle = this.color
//       ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
//   }
  
//   var hero = {
//     x : 0,
//     y : 0,
//     color : "hotpink",
//     width : 20,
//     height : 20,
//     alive : true,
//     render: function () {
//       ctx.fillStyle = this.color
//       ctx.fillRect(this.x, this.y, this.width, this.height)
//     }
//   }

//grab the context from the canvas
const ctx = game.getContext('2d')

  class Crawler {
      constructor(x, y, color, width, height){
          this.x = x
          this.y = y
          this.color = color
          this.width = width
          this.height = height
          this.alive = true
      this.alive = true
}
render(){
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

const ogre = new Crawler(10, 10, '#BADA55', 40, 80)
const hero = new Crawler(0, 0, 'hotpink', 20, 20)

  console.log(ogre);
  console.log(hero);

  document.getElementById('status').addEventListener('click', function(){
      hero.render()
      ogre.render()
  })

  document,addEventListener('keyup', function(evt){
      //console.log(evt.key) typing keys on keyboard
      if(evt.key === 'w'){
          hero.y -=10
          //console.log('w was pushed');
      }else if(evt.key ==='a' ){
          hero.x -= 10
          //console.log('a was pushed');
      }else if(evt.key === 's'){
          hero.y +=10
          //console.log('s was pushed');
      }else if(evt.key ==='d') {
          hero.x +=10
          //console.log('d was pushed');
             }
        //console.log(hero);
        movementDisplay.textContent = `X: ${hero.x}, Y${hero.y}`
})
//detecting a collision between both the points
function detectHit(){
    if(hero.x < ogre.x + ogre.width && hero.x + hero.width > ogre.x){
        console.log('thats a hit');
    }
    if(hero.y < ogre.y + ogre.height && hero.y + hero.height > ogre.y){
        console.log('thats a another hit');
    }
}


//clear canvas and render the hero
function rePaint(){
    //clear off the entire canvas
    ctx.clearRect(0, 0, game.width, game.height)

        //render the hero and the ogre
    hero.render()
    ogre.render()
}
setInterval(rePaint, 1000/60 ) //60 frames per second 