// let voteButtons=document.getElementsByClassName('voteButton');

// for (let i = 0; i < voteButtons.length; i++) {
//     voteButtons[i].addEventListener('click', function(event) {
  
//         let value = event.currentTarget.querySelector('span').innerHTML;
//           if (value==5) {
//             event.target.querySelector('span').innerHTML=6;
//           }
//           else if (value==6) {
//             event.target.querySelector('span').innerHTML=5;
//           }
//          else if (value==3) {
//             event.target.querySelector('span').innerHTML=4;
//           }

//           else if (value==4) {
//             event.target.querySelector('span').innerHTML=3;
//           }
//           else if (value==0) {
           
//                 event.target.querySelector('span').innerHTML=1;
//           }
//           else if (value==1) {
//             event.target.querySelector('span').innerHTML=0;
//           }
//     });
// } 



document.addEventListener('click', function(event) {
  if (event.target.classList.contains('voteButton')) {
      let value = event.target.querySelector('span').innerHTML;
      // let value = parseInt(valueElement);
        console.log(value);
      if (value == 5) {
        console.log('yes')
          value.innerHtml = 6;
      } else if (value === 6) {
          valueElement.innerHTML = 5;
      } else if (value === 3) {
          valueElement.innerHTML = 4;
      } else if (value === 4) {
          valueElement.innerHTML = 3;
      } else if (value === 0) {
          valueElement.innerHTML = 1;
      } else if (value === 1) {
          valueElement.textContent = 0;
      }
  }
});




function addtitle(){

   var inputvalue=document.createTextNode(document.getElementById('title').value);
  let maindiv=document.createElement('div');
  let  mainspans=document.createElement('span');

  //main buttons creation
  let btn1=document.createElement('button');
  let btn2=document.createElement('button');
  
  //icon creation
  let icon1=document.createElement('i');
  let icon2=document.createElement('i');
  icon1.classList.add('fa-regular','fa-thumbs-up');
  icon2.classList.add('fa-regular','fa-thumbs-down');


   //button internal span 
  let btnspan1=document.createElement('span');
  let btnspan2=document.createElement('span');
  let value1=document.createTextNode(0);
  let value2=document.createTextNode(0);
  
  btnspan1.classList.add('upvoteCount');
  btnspan2.classList.add('downvoteCount');

  btnspan1.appendChild(value1);
  btnspan2.appendChild(value2);


  btn1.classList.add('voteButton','btn');
  btn1.appendChild(icon1);
  btn1.appendChild(btnspan1);

  
  btn2.classList.add('voteButton','btn');
  btn2.appendChild(icon2);
  btn2.appendChild(btnspan2);


  mainspans.classList.add('buttons');
  mainspans.appendChild(btn1);
  mainspans.appendChild(btn2);


maindiv.classList.add('Topic');
maindiv.appendChild(mainspans);

  

  //last title 
  let title=document.createElement('span');
  title.classList.add('title');
  title.appendChild(inputvalue);

  maindiv.appendChild(title);
  //append int
  document.getElementById('submittitle').appendChild(document.createElement('br'))
  document.getElementById('submittitle').appendChild(maindiv);

    
}




