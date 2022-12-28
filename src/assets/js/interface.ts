// Interface for configuration file
export interface ConfigInterface {
  description?: DescriptionConfigInterface;
  convertor?: ConvertorConfigInterface;
  navbar?: NavbarConfigInterface;
}

// Interface for Description Component Config
export interface DescriptionConfigInterface {
  heading?: string;
  subHeading?: string;
}

export interface ConvertorConfigInterface {
  exchangeImageUrl?: string;
}

export interface NavbarConfigInterface {
  brandImageUrl?: string;
}