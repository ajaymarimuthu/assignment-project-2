// const xhr=new XMLHttpRequest();

// console.log(xhr);

// const url="https://api.github.com/users"

// xhr.open('GET',url);

// xhr.onreadystatechange = () => {

//     if(xhr.readyState==4 && xhr.status==200){
//         // console.log(xhr.response);
//         const response=JSON.parse(xhr.response);
//         console.log(response);


//         for (let i = 0; i < response.length; i++) {
//             const image = document.createElement('img');

//             image.setAttribute('src',response[i].avatar_url);

//             // console.log(image);

//             const userName=document.createElement('h3')

//             userName.textContent=response[i].login

//             const container=document.getElementById('userData');
//             container.appendChild(image);
//             container.appendChild(userName);
            
//         }
//     }

// }

// xhr.send();