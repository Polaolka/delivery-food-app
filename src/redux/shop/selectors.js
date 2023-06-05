export const selectAllShops = state => state.shop.shops;

export const selectShopById = state => state.shop.shop;
export const selectError = state => state.shop.error;
export const selectIsLoadingGetAllShops = state => state.shop.isLoadingGetAllShops;