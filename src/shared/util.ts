import {DynamicKeyStringValueInterface} from '../assets/js/interface';

/**
 * 
 * @param currencyRates - gets the cuurrent currency rates of every currency
 * @param fromValue - gets the currency symbol from which the amount needs to be converted
 * @param toValue - gets the currency symbol to which the amount needs to be converted
 * @param amount - gets the amount
 * @returns - converted amount from the from to to currency based on currency rates
 */
export function getConvertedValue(currencyRates: DynamicKeyStringValueInterface, fromValue = '', toValue = '', amount =''): number {
    const ratio = Number(Number(currencyRates[toValue??''])/Number(currencyRates[fromValue??'']));
    
    return Number(Number(amount) * ratio) ?? 0;
}