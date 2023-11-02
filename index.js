// // Remove a specific item from session storage
// sessionStorage.clear();
// sessionStorage.clear();

document.addEventListener('DOMContentLoaded', function() {

   let retrievedData = JSON.parse(sessionStorage.getItem('data'));
   console.log("onload",retrievedData);
  if (!retrievedData) {
    
    let mainArray = [
      {
        id: 1,
        like: 0,
        dislike: 0,
        title: "This is an existing topic returned from the server (mocked)"
      }
    ];
    loadtopic(mainArray[0]);
    sessionStorage.setItem('data', JSON.stringify(mainArray));
   
   

  }
    
    if (Array.isArray(retrievedData)) {
        retrievedData.forEach(item => {
           
            console.log(item.id, item.title);
            loadtopic(item); 

        });
    } else {
        console.error("No valid data found in sessionStorage or 'data' is not an array.");
    }
});


function loadtopic(item){
      console.log(item.title);
      var inputvalue=item.title;
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
      let value1=document.createTextNode(item.like);
      let value2=document.createTextNode(item.dislike);
      
      btnspan1.classList.add('upvoteCount');
      btnspan2.classList.add('downvoteCount');
    
      btnspan1.appendChild(value1);
      btnspan2.appendChild(value2);
    
    
      btn1.classList.add('voteButton','btnn');
      btn1.appendChild(icon1);
      btn1.appendChild(btnspan1);
      
     
      
      
      btn2.classList.add('voteButton','btnn');
      btn2.appendChild(icon2);
      btn2.appendChild(btnspan2);

      btn1.onclick = function(event) {
        changelike(item.id,event.currentTarget);
      };
      btn2.onclick = function(event) {
        changedislike(item.id,event.currentTarget);
      };
      
    
      mainspans.classList.add('buttons');
      mainspans.appendChild(btn1);
      mainspans.appendChild(btn2);
    
    
    maindiv.classList.add('Topic');
    maindiv.appendChild(mainspans);
    
      
    
      //last title 
      let title=document.createElement('span');
      title.classList.add('title');
      title.appendChild(document.createTextNode(item.title));
    
      maindiv.appendChild(title);
      //append int
      
      document.getElementById('submittitle').appendChild(maindiv);
    
}


function changelike(id,button){
  id=id-1;
  let retrievedData = JSON.parse(sessionStorage.getItem('data'));
    console.log( retrievedData[id].like)
    if ( retrievedData[id].like===0) {
 
     button.querySelector('.upvoteCount').textContent =1;
       retrievedData[id].like = 1;
       sessionStorage.setItem('data',JSON.stringify(retrievedData));
    }
   else{
    console.log(event.target)
    button.querySelector('.upvoteCount').textContent =0;
    retrievedData[id].like=0;
    sessionStorage.setItem('data',JSON.stringify(retrievedData));
   }
}
function changedislike(id,button){
  id=id-1;
  let retrievedData = JSON.parse(sessionStorage.getItem('data'));
    console.log( retrievedData[id].dislike)
    if ( retrievedData[id].dislike===0) {
      console.log(event.target)
      button.querySelector('.downvoteCount').textContent = 1;
       retrievedData[id].dislike = 1;
       sessionStorage.setItem('data',JSON.stringify(retrievedData));
    }
   else{
    console.log(event.target)
    button.querySelector('.downvoteCount').textContent = 0;
    retrievedData[id].dislike=0;
    sessionStorage.setItem('data',JSON.stringify(retrievedData));
   }
}



// document.addEventListener('click', function(event) {
//   if (event.target.classList.contains('voteButton','fa-regular','upvoteCount')) {
//       let valueElement = event.target.querySelector('span');
//       let value = parseInt(valueElement.innerHTML);

//       if (value === 5) {

//           valueElement.innerHTML = '6';
//       } 
//       else if (value === 6) {
//           valueElement.innerHTML = '5';
//       }
//        else if (value === 3) {
//           valueElement.innerHTML = '4';
//       } 
//       else if (value === 4) {
//           valueElement.innerHTML = '3';
//       } 
//       else if (value === 0) {
//           valueElement.innerHTML = '1';
//       }
//        else if (value === 1) {
//           valueElement.innerHTML = '0';
//       }
//   }
// });




function addtitle(){
  
  var inputvalue=document.getElementById('title').value;
  let retrivedata=JSON.parse(sessionStorage.getItem('data'));

  let len = retrivedata.length;
  let newdata={id:len+1,
                like:0,
               dislike:0,
              title:inputvalue};

  retrivedata.push(newdata);

  sessionStorage.setItem('data',JSON.stringify(retrivedata));
  console.log(retrivedata);
  loadtopic(newdata);
    
}




 