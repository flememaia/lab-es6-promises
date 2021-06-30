// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () =>{
              addFood(steak[7], '#steak', () =>{
              })
            })
          })
        })
      })
    })
  })
});


// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  // ... your code here
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
        })
      })
    })
  })
});

// NÃO PRECISA CAPTURAR O ERRO DE CADA LINHA?
// .catch((err) => {
//   console.log(err)
// })

// FAZER COM MAP + PROMISSE.ALL

// // Iteration 3 using async/await

// async function makeFood(step) {
//   // ... your code here
//     await addFood(step[0], '#brusselSprouts');
//     await addFood(step[1], '#brusselSprouts');
//     await addFood(step[2], '#brusselSprouts');
//     await addFood(step[3], '#brusselSprouts');
//     await addFood(step[4], '#brusselSprouts');
//     await addFood(step[5], '#brusselSprouts');
//     await addFood(step[6], '#brusselSprouts');
//     await addFood(step[7], '#brusselSprouts');
//     await addFood(step[8], '#brusselSprouts')
    
//     return
// }
// makeFood(brusselSprouts);

// //FOR
  async function makeFood(step) {
    // ... your code here
    for(let i = 0; i < step.length; i++){
        await addFood(step[i], '#brusselSprouts');
      }
      return
  }
  makeFood(brusselSprouts);

// //MAP + PROMISE.ALL => NÃO DEU CERTO
//   const promises  = brusselSprouts.map(async function makeFood(step) {
//     await addFood(step, '#brusselSprouts');
//   })

//   Promise.all(promises).then((data) => {
//     return data
//   })

//   makeFood(brusselSprouts);

// //MAP + PROMISE.ALL DENTRO DA PROMISE.ALL 
//   Promise.all(brusselSprouts.map(async (step) => {
//     await addFood(step, '#brusselSprouts');
//   }).then((data) => {
//     return data
//   })

// tag table => onde serão inseridas as imagens 
const table = document.getElementById("table");
{/* <section id="table"></section> */}

//images 
const steakImg = new Image();
steakImg.src = "./steak.jpg"; 


window.onload = () => {
  const img = document.createElement("img");
  img.src = steakImg.src;
  alert("Dinner is served!")
  };