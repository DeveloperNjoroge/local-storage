
    
    let favouriteFruits = JSON.parse(localStorage.getItem('favouriteFruits')) || [];

   
    function updateFruitList() {
      let fruitList = document.getElementById('fruitList');
      fruitList.innerHTML = '';

      for (let i = 0; i < favouriteFruits.length; i++) {
        let fruitItem = document.createElement('li');
        fruitItem.textContent = favouriteFruits[i];
        fruitList.appendChild(fruitItem);
      }
    }

    
    function handleSubmit() {
      let fruitInput = document.getElementById('fruitInput');
      let errorElement = document.getElementById('errorMessage');
      
      if (fruitInput.value === '') {
        errorElement.textContent = 'Please enter a fruit.';
        return;
      }      
      errorElement.textContent = '';      
      favouriteFruits.push(fruitInput.value);      
      updateFruitList();      
      localStorage.setItem('favouriteFruits', JSON.stringify(favouriteFruits));
      
      fruitInput.value = '';
    }

    
    function handleClear() {      
      favouriteFruits = [];
      
      updateFruitList();
      
      localStorage.removeItem('favouriteFruits');
    } 

    
    let submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', handleSubmit);

    let clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', handleClear);

    
    updateFruitList();