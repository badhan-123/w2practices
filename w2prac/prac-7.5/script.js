document.addEventListener('DOMContentLoaded', () => {
    loadPopularMeals(); });
  
  const foodInput = document.getElementById('foodInput');
  let typingTimer; 
  
  foodInput.addEventListener('input', () => {
    clearTimeout(typingTimer); 
    const foodName = foodInput.value.trim();
  
    if (foodName === '') {
      document.getElementById('exactResult').innerHTML = ''; 
      document.getElementById('relatedFoods').innerHTML = ''; 
      return;
    }
  
    typingTimer = setTimeout(() => {
      searchFood(foodName);
    }, 300); 
  });
  
  function searchFood(foodName) {
    const apiURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    const firstLetter = foodName.charAt(0).toLowerCase();
    const relatedURL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`;
  
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
          displayExactResult(data.meals[0], 'exactResult');
        } else {
          document.getElementById('exactResult').innerHTML = '<p>Food not found.</p>';
        }
      })
      .catch(error => {
        console.error('Error fetching the exact meal:', error);
        document.getElementById('exactResult').innerHTML = '<p>Error occurred. Please try again later.</p>';
      });
  
    fetch(relatedURL)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
          displayRelatedFoods(data.meals, 'relatedFoods', foodName);
        } else {
          document.getElementById('relatedFoods').innerHTML = '<p>No related foods found.</p>';
        }
      })
      .catch(error => {
        console.error('Error fetching related foods:', error);
        document.getElementById('relatedFoods').innerHTML = '<p>Error occurred. Please try again later.</p>';
      });
  }
  
  function displayExactResult(meal, targetElementId) {
    const resultDiv = document.getElementById(targetElementId);
    resultDiv.innerHTML = ''; 
    const mealDiv = createMealDiv(meal);
    resultDiv.appendChild(mealDiv);
  }
  
  function displayRelatedFoods(meals, targetElementId, exactSearch) {
    const resultsDiv = document.getElementById(targetElementId);
    resultsDiv.innerHTML = ''; 
  
    meals.forEach(meal => {
      if (meal.strMeal.toLowerCase() !== exactSearch.toLowerCase()) { 
        const mealDiv = createMealDiv(meal);
        resultsDiv.appendChild(mealDiv);
      }
    });
  }
  
  function createMealDiv(meal) {
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('meal');
    mealDiv.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <div class="meal-info">
        <h3>${meal.strMeal}</h3>
        <p>Category: ${meal.strCategory}</p>
      </div>
    `;
  
    mealDiv.addEventListener('click', () => displayMealDetails(meal));
    
    return mealDiv;
  }
  
  function displayMealDetails(meal) {
    const selectedFoodDiv = document.getElementById('selectedFood');
    const selectedFoodTitle = document.getElementById('selectedFoodTitle');
  
    selectedFoodTitle.innerHTML = `Selected Food: ${meal.strMeal}`; 
    selectedFoodDiv.innerHTML = `
      <div class="meal-details">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <div class="meal-info">
          <h3>${meal.strMeal}</h3>
          <p><strong>Category:</strong> ${meal.strCategory}</p>
          <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
        </div>
      </div>
    `;
  }
  
  function loadPopularMeals() {
    const popularMealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';
  
    const popularMealsDiv = document.getElementById('popularMeals');
    popularMealsDiv.innerHTML = '<p>Loading popular meals...</p>';
  
    fetch(popularMealsURL)
      .then(response => response.json())
      .then(data => {
        if (data.meals) {
          displayResults(data.meals, 'popularMeals');
        } else {
          popularMealsDiv.innerHTML = '<p>No popular meals found at the moment.</p>';
        }
      })
      .catch(error => {
        console.error('Error loading popular meals:', error);
        popularMealsDiv.innerHTML = '<p>Failed to load popular meals. Please try again later.</p>';
      });
  }
  
  function displayResults(meals, targetElementId) {
    const resultsDiv = document.getElementById(targetElementId);
    resultsDiv.innerHTML = ''; 
  
    meals.forEach(meal => {
      const mealDiv = createMealDiv(meal);
      resultsDiv.appendChild(mealDiv);
    });
  }
  