// Import the singleton schemas
import siteSettings from "./singletons/siteSettings"
import homePage from "./singletons/homePage"
import culturePage from "./singletons/about-us/culturePage"
import historyPage from "./singletons/about-us/historyPage"
import leadershipPage from "./singletons/about-us/leadershipPage"
import faqPage, { faqSection, question } from "./singletons/camp/faqPage"
import lyfCampPage from "./singletons/camp/lyfCampPage"
import cookbookPage from "./singletons/get-involved/cookbookPage"
import joinOurTeamPage from "./singletons/get-involved/joinOurTeamPage"
import donatePage from "./singletons/get-involved/donatePage"
import getInvolvedPage from "./singletons/get-involved/getInvolvedPage"

// Import the document schemas
import campYear from "./documents/campYear"
import person from "./documents/person"
import product from "./documents/product"
import event from "./documents/event"

// Import the object schemas
import button from "./objects/button"
import card from "./objects/card"
import dropdown from "./objects/dropdown"
import portableText from "./objects/portableText"
import quote from "./objects/quote"
import statistic from "./objects/statistic"
import titleBody from "./objects/titleBody"

// Then we give our schema to the builder and provide the result to Sanity
export default [
    // Singletons
    siteSettings,
    homePage,
    // about-us
    culturePage,
    historyPage,
    leadershipPage,
    // camp
    faqPage,
    lyfCampPage,
    // get-involved
    cookbookPage,
    joinOurTeamPage,
    donatePage,
    getInvolvedPage,

    // Documents
    campYear,
    person,
    product,
    event,

    // Objects
    button,
    card,
    dropdown,
    portableText,
    quote,
    statistic,
    titleBody,

    // Objects specific to the FAQ section
    faqSection,
    question,
]
