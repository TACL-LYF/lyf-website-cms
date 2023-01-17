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

// Import the document schemas
import campYear from "./documents/campYear"
import person from "./documents/person"
import event from "./documents/event"

// Import the object schemas
import portableText from "./objects/portableText"
import statistic from "./objects/statistic"
import button from "./objects/button"
import card from "./objects/card"

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

    // Documents
    campYear,
    person,
    event,

    // Objects
    portableText,
    statistic,
    button,
    card,
    // Objects specific to the FAQ section
    faqSection,
    question,
]
