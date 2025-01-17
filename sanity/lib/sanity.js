// app/lib/sanity.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: '3fee2it3', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  apiVersion: '2023-01-01', // Use the latest version
  useCdn: true, // Use CDN for faster performance
});

const builder = imageUrlBuilder(sanityClient);

// Function to get the image URL
export const urlFor = (source) => builder.image(source);
