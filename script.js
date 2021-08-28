  //selectors

  const colorbtn = document.querySelector('.colorbtn');
  const bodybcg = document.querySelector('body');
  
  const colors = ['orange','yellow','green','pink','blue'];
  
  //event listners
  colorbtn.addEventListener('click',changeColor);
  
  //functions
  function changeColor(){
    //   bodyBcg.style.backgroundColor = colors[2];
    //to select only index no. 2 color from array 

    let random = Math.floor(Math.random()*colors.length)
    // math random only works bitween 0 to 0.999 so we add math floor
    bodybcg.style.backgroundColor = colors[random];
  }