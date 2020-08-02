import { createSelector } from "@reduxjs/toolkit";

const authSelector = state => state.products;

const selectProductValue = createSelector(
  authSelector,
  auth => auth.productValue
);

export {
  selectProductValue
};