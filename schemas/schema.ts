// Import the singleton schemas
import siteSettings from './singletons/siteSettings'
import homePage from "./singletons/homePage"

// Import the document schemas
import campYear from './documents/campYear'
import person from './documents/person'

// Import the object schemas
import portableText from "./objects/portableText"

// Then we give our schema to the builder and provide the result to Sanity
export default [
  // Singletons
  siteSettings,
  homePage,

  // Documents
  campYear,
  person,

  // Objects
  portableText
]
