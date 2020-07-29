

    const titleRef = document.querySelectorAll('h2');

    const liRef = document.querySelectorAll('.item');



   
    liRef.forEach(el => {console.log(`Категория: ${el.firstElementChild.textContent} 
    Количество элементов ${el.lastElementChild.children.length}`);
    });




    
  
    


  
  