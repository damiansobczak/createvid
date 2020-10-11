export interface IThumbnailItem {
  "im:name": {
    label: string;
  };
  rights: {
    label: string;
  };
  "im:image": {
    label: string;
    attributes: {
      height: string;
    };
  }[];
  summary: {
    label: string;
  };
  "im:rentalPrice": {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  "im:price": {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    };
  };
  "im:contentType": {
    attributes: {
      term: string;
      label: string;
    };
  };
  title: {
    label: string;
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
      title: string;
      "im:assetType": string;
    };
    "im:duration": {
      label: string;
    };
  }[];
  id: {
    label: string;
    attributes: {
      "im:id": string;
    };
  };
  "im:artist": {
    label: string;
    attributes: {
      href: string;
    };
  };
  category: {
    attributes: {
      "im:id": string;
      term: string;
      scheme: string;
      label: string;
    };
  };
  "im:releaseDate": {
    label: Date;
    attributes: {
      label: string;
    };
  };
  isHover: boolean;
}
