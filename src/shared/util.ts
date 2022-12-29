import {DynamicKeyStringValueInterface} from '../assets/js/interface';

export function getConvertedValue(currencyRates: DynamicKeyStringValueInterface, fromValue: string = '', toValue: string = '', amount: string =''): number {
    const ratio = Number(Number(currencyRates[toValue??''])/Number(currencyRates[fromValue??'']));
    
    return Number(Number(amount) * ratio) ?? 0;
}