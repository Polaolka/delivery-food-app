export const selectAllFood = state => state.food.foods;
export const selectFoodById = state => state.food.food;
export const selectError = state => state.food.error;
export const selectIsLoadingGetAllFoods = state => state.food.isLoadingGetAllFoods;