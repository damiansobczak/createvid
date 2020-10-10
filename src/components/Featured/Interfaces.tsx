export interface IFilmsAPI {
  feed: {
    author: {
      name: {
        label: string;
      };
      uri: {
        label: string;
      };
    };
    entry: IFilmsItemAPI[];
    updated: {
      label: Date;
    };
    rights: {
      label: string;
    };
    title: {
      label: string;
    };
    icon: {
      label: string;
    };
    link: {
      attribiutes: {
        rel: string;
        type: string;
        href: string;
      }[];
    };
    id: {
      label: string;
    };
  };
}

export interface IFilmsItemAPI {
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
}

export interface IFilmsItemsAPI extends Array<IFilmsItemAPI> {}
