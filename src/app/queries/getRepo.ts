import { gql } from 'apollo-angular';

export const GET_REPOS = gql`
  query repos($name: String!) {
    search(query: $name, type:REPOSITORY, first:12
    ) {
      edges {
        node {
          ... on Repository {
            nameWithOwner
            createdAt
            description
            forkCount
            homepageUrl
            isArchived
            isDisabled
            openGraphImageUrl
          }
        }
      }
    }
  }
`;
