// Import the singleton schemas
import siteSettings from "./singletons/siteSettings"
import homePage from "./singletons/homePage"
import culturePage from "./singletons/about-us/culturePage"
import historyPage from "./singletons/about-us/historyPage"
import leadershipPage from "./singletons/about-us/leadershipPage"
import faqPage, { faqSection, question } from "./singletons/camp/faqPage"
import lyfCampPage from "./singletons/camp/lyfCampPage"
import registrationPolicyPage from "./singletons/camp/registrationPolicy"
import financialAidPolicyPage from "./singletons/camp/financialAidPolicy"
import cookbookPage from "./singletons/get-involved/cookbookPage"
import joinOurTeamPage from "./singletons/get-involved/joinOurTeamPage"
import donatePage from "./singletons/get-involved/donatePage"
import getInvolvedPage from "./singletons/get-involved/getInvolvedPage"

// Import the document schemas
import campYear from "./documents/campYear"
import leadership from "./documents/leadership"
import product from "./documents/product"
import event from "./documents/event"

// Import the object schemas
import button from "./objects/button"
import card from "./objects/card"
import committee from "./objects/committee"
import dropdown from "./objects/dropdown"
import person from "./objects/person"
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
    registrationPolicyPage,
    financialAidPolicyPage,
    // get-involved
    cookbookPage,
    joinOurTeamPage,
    donatePage,
    getInvolvedPage,

    // Documents
    campYear,
    event,
    leadership,
    product,

    // Objects
    button,
    card,
    committee,
    dropdown,
    person,
    portableText,
    quote,
    statistic,
    titleBody,

    // Objects specific to the FAQ section
    faqSection,
    question,
]
