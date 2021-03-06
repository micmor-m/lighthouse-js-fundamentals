/*
receive three parameters:
1- array of ingredients in stock at Bakery A
2- array of ingredients in stock at Bakery B
3- array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)
*/

const chooseRecipe = function(bakeryA, bakeryB, recipes) {

  //declare an empty object with key name and key ingredients like the recipes onjects
  let matchRecipe = [ {name: "", ingredients:[]} ];
    
    //for each recipe
    for (let recipe of recipes){
      ingredientB = false;
      ingredientA = false;
      
      //check each ingredient if match one ingredient available in bakery A
      for (let ingredient of recipe.ingredients){
        for (let i = 0; i < bakeryA.length; i++){
          
          if (bakeryA[i] === ingredient){
            ingredientA = true;
          } 
        } 

        //check also if the same ingredient match one ingredient available in bakery B
        for (i = 0; i < bakeryB.length; i++){
          if (bakeryB[i] === ingredient){
            ingredientB = true;
          }  
        }
      }

      //if there is one match in bakery A and one in backery B copy the recipe name to the object matchRecipe
      if (ingredientA && ingredientB === true){
        matchRecipe.name = recipe.name;
      }
    }
    //console.log(matchRecipe);
    return matchRecipe.name;
  }


//For test
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
