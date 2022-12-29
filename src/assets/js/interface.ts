// Interface for configuration file
export declare interface ConfigInterface {
  description?: DescriptionConfigInterface;
  convertor?: ConvertorConfigInterface;
  navbar?: NavbarConfigInterface;
  currencyService?: CurrencyServiceInterface;
  chosenCurrenciesGrid?: ConversionOptionsInterface;
}

// Interface for Description Component Config
export declare interface DescriptionConfigInterface {
  heading?: string;
  subHeading?: string;
}

// Interface for Convertor Component Config
export declare interface ConvertorConfigInterface {
  exchangeImageUrl?: string;
  showCurrencySignInConvertedStatement?: boolean;
  decimalPlacesInConvertedStatement?: string;
}

// Interface for Navbar Component Config
export declare interface NavbarConfigInterface {
  brandImageUrl?: string;
  conversionOptions?: ConversionOptionsInterface[];
}

// Interface for Currency Service Config
export declare interface CurrencyServiceInterface {
  baseUrl?: string;
}

// Symbols list from fixer api interface
export declare interface DynamicKeyStringValueInterface {
  [key: string]: number;
}

// Conversion options Interface for navbar
export declare interface ConversionOptionsInterface {
  label?: string;
  keys?: string;
}

// Interface for Chosen Currecnies Grid
export declare interface ConversionOptionsInterface {
  selectedCurrencies?: string[];
  showCurrencySignInConvertedStatement?: boolean;
  decimalPlacesInConvertedStatement?: string;
}