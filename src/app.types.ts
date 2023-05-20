interface IGallery {
  photos: string[]
}

export abstract class IConfig {
  abstract companyName?: string;
  abstract companyPhoneNumber?: string;
  abstract companyEmail?: string;
  abstract aboutCompany?: string;
  abstract formSubmitMessage?: string;
  abstract gallery: IGallery;
}
