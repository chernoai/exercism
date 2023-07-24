import { notify } from './notifier';
import { order } from './grocer';

/**
 * Notifies the user that the order was successful
 * @return void
 */
export function onSuccess() {
  notify({ message: 'SUCCESS' }); 
}

/**
 * Notifies the user that there was an error with the order
 * @return void
 */
export function onError() {
  notify({ message: 'ERROR' }); 
}

/**
 * Orders fruit from the grocer
 * @param {GrocerQuery} query - The query object containing the variety and quantity of fruit to order
 * @param {FruitPickerSuccessCallback} onSuccessCallback - The callback function to call on success
 * @param {FruitPickerErrorCallback} onErrorCallback - The callback function to call on error
 * @return void
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  try {
    order(query, onSuccessCallback, onErrorCallback);
  } catch (err) {
    if (err) {
      throw new Error(err.message); 
    }
  }
}

/**
 * Places an order for fruit
 * @param {string} variety - The variety of fruit to order
 * @param {number} quantity - The quantity of fruit to order
 * @return void
 */
export function postOrder(variety, quantity) {
  const query = { variety, quantity };
  orderFromGrocer(query, onSuccess, onError);
}
