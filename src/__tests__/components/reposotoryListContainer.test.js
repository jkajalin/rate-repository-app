/* eslint-disable no-unused-vars */
/* eslint-disable jest/expect-expect */

import { render, screen, within, getByText } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';




describe('RepositoryList', () => {

  describe('RepositoryListContainer', () => {

    it('renders repository information correctly', () => {
      
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      
      const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);
      const repositoryItems = getAllByTestId('repositoryItem');
      // eslint-disable-next-line no-unused-vars
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;    
      

      expect( firstRepositoryItem ).toHaveTextContent('jaredpalmer/formik');
      //expect( firstRepositoryItem ).toHaveTextContent('Forks');

      const forks01 = within(firstRepositoryItem).getByText( 'Forks', {exact: false} )
      const ratingA1 = within(firstRepositoryItem).getByText( 'Rating', {exact: false} )
      const startgazers1 = within(firstRepositoryItem).getByText( 'Starts', {exact: false} )
      const reviews1 = within(firstRepositoryItem).getByText( 'Reviews', {exact: false} )
      
      expect( forks01 ).toHaveTextContent('1.6K')      
      expect( ratingA1 ).toHaveTextContent('88')      
      expect( startgazers1 ).toHaveTextContent('21.8K')
      expect( reviews1 ).toHaveTextContent('3')

      const forks02 = within(secondRepositoryItem).getByText( 'Forks', {exact: false} )
      const ratingA2 = within(secondRepositoryItem).getByText( 'Rating', {exact: false} )
      const startgazers2 = within(secondRepositoryItem).getByText( 'Starts', {exact: false} )
      const reviews2 = within(secondRepositoryItem).getByText( 'Reviews', {exact: false} )
      
      expect( forks02 ).toHaveTextContent('69')      
      expect( ratingA2 ).toHaveTextContent('72')      
      expect( startgazers2 ).toHaveTextContent('1.7K')
      expect( reviews2 ).toHaveTextContent('3')
      
    });
  });
});