import { gql } from 'apollo-boost';

export const GET_BOOKS = gql`query ($term: String!){
    bookCollection(where: {
        OR: [
            { title_contains: $term },
            { author_contains: $term }
        ]
    }){
        items {
            title
            author
            image { 
                title
                url
            }
            description
        }
    }
}`;

export const GET_BOOKS_ALL = gql`query{
    bookCollection{
        items {
            title
            author
            image { 
                title
                url
            }
            description
        }
    }
}`;