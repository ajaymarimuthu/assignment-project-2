const btn=document.getElementById('search-btn');

btn.addEventListener('click', (e) => {

    e.preventDefault();



    const movie=document.getElementById('search').value;

    const url=`https://imdb-data-searching.p.rapidapi.com/om?t=${movie}`


    // console.log(movie);


    const xhr=new XMLHttpRequest();

 
    
    // console.log(xhr);
    
    xhr.open("GET",url);
    
    xhr.setRequestHeader("x-rapidapi-host", "imdb-data-searching.p.rapidapi.com");
     xhr.setRequestHeader("x-rapidapi-key", "51a7120b92msh4f47b42b150e190p1a1f28jsnf49f92bd4a5d");
    
    xhr.onreadystatechange = () =>{
        if(xhr.status==200 && xhr.readyState==4){
            // console.log(JSON.parse(xhr.response));

            const response=JSON.parse(xhr.response);
            // console.log(response);

            const h1=document.createElement('h1');
            

            h1.textContent=response.Title;
            

            const img=document.createElement('img');

            img.setAttribute('src',response.Poster)

            const h3=document.createElement('h3');
            h3.textContent=response.Year;

            const container=document.getElementById('movie-details')
            container.appendChild(h1);
            container.appendChild(img);
            container.appendChild(h3);

        }
    }
    
    xhr.send();



})


 