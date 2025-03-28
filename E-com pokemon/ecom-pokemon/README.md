# Baseball Products

This is a simple React application that displays a list of pokemon plushies, based on my Recreate your favorite webpage task. The app allows users to filter products based on their category and view details such as the product's name, price, description, and image.

## Features

- Display a list of pokemon plushies with their names, prices, descriptions, and images.
- Filter products based on their category.
- Custom styling using CSS.

## Components

The App component is the central hub that manages the product state and passes the product data as props to child components.

ProductList Component
This component receives the product list from the App component and maps through the array to render each product using the ProductItem component.

ProductItem Component
Represents an individual product. It displays the following details:

Product name

Price

Description

Category

Image

