// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import the singleton schemas
import siteSettings from './singletons/siteSettings'

// Import the document schemas
import campYear from './documents/campYear'
import person from './documents/person'

// Import the object schemas
import portableText from "./objects/portableText"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Singletons
    siteSettings,

    // Documents
    campYear,
    person,

    // Objects
    portableText,
  ]),
})
