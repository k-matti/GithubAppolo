export type Repo = {
  node: {
    nameWithOwner: string,
    createdAt: string,
    description: string,
    forkCount: number,
    homepageUrl: string,
    isArchived: boolean,
    isDisabled: boolean,
    openGraphImageUrl: string,
  };
};

export type Query = {
  search: {
    edges: Repo[];
  };
};
