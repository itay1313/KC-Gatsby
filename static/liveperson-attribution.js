/* eslint-disable */
// cookie functions
function setCookie(name, value, days) {
  var date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  var expires = "; expires=" + date.toGMTString()
  document.cookie =
    name + "=" + value + expires + "; path=/; domain=liveperson.com;"
}

function getParam(p) {
  var match = RegExp("[?&]" + p + "=([^&]*)").exec(window.location.search)
  var gclid = match && decodeURIComponent(match[1].replace(/\+/g, " "))
  return gclid
}

var leadSourceCookie = (name = new RegExp(
  "(?:^|;\\s*)lp-leadSource=([^;]*)"
).exec(document.cookie))
  ? name.split(",")[1]
  : ""
var lsRef = (name = new RegExp("(?:^|;\\s*)lp-lsRef=([^;]*)").exec(
  document.cookie
))
  ? name.split(",")[1]
  : ""
var lsTerms = (name = new RegExp("(?:^|;\\s*)lp-lsTerms=([^;]*)").exec(
  document.cookie
))
  ? name.split(",")[1]
  : ""
var lsCampaign = (name = new RegExp("(?:^|;\\s*)lp-lsCampaign=([^;]*)").exec(
  document.cookie
))
  ? name.split(",")[1]
  : ""
var lsSource = (name = new RegExp("(?:^|;\\s*)lp-lsSource=([^;]*)").exec(
  document.cookie
))
  ? name.split(",")[1]
  : ""
var lsMedium = (name = new RegExp("(?:^|;\\s*)lp-lsMedium=([^;]*)").exec(
  document.cookie
))
  ? name.split(",")[1]
  : ""
var lsContent = (name = new RegExp("(?:^|;\\s*)lp-lsContent=([^;]*)").exec(
  document.cookie
))
  ? name.split(",")[1]
  : ""
var queryString = (name = new RegExp("(?:^|;\\s*)lp-queryString=([^;]*)").exec(
  document.cookie
))
  ? name.split(",")[1]
  : ""
var _mkto_trk = (name = new RegExp("(?:^|;\\s*)_mkto_trk=([^;]*)").exec(
  document.cookie
))
  ? name.split(",")[1]
  : ""
var convoId, leadData

if (lsTerms === "") {
  lsTerms = getParam("utm_term")
  if (!lsTerms) {
    lsTerms = getParam("keywords")
  }
  if (!lsTerms) {
    lsTerms = getParam("keyword")
  }
  if (!lsTerms) {
    lsTerms = getParam("oquery")
  }
  if (!lsTerms) {
    lsTerms = getParam("query")
  }
  if (!lsTerms) {
    lsTerms = getParam("_bk")
  }
  setCookie("lp-lsTerms", lsTerms, 30)
}

if (lsCampaign === "") {
  lsCampaign = getParam("utm_campaign")
  setCookie("lp-lsCampaign", lsCampaign, 30)
}

if (lsSource === "") {
  lsSource = getParam("utm_source")
  setCookie("lp-lsSource", lsSource, 30)
}

if (lsMedium === "") {
  lsMedium = getParam("utm_medium")
  setCookie("lp-lsMedium", lsMedium, 30)
}

if (lsContent === "") {
  lsContent = getParam("utm_content")
  setCookie("lp-lsContent", lsContent, 30)
}

if (queryString === "") {
  queryString = window.location.search
  setCookie("lp-queryString", queryString, 30)
}

if (lsRef === "") {
  setCookie("lp-lsRef", document.referrer, 1)
  lsRef = document.referrer
}
var lsOrganic = [
  "www.google.",
  "com.google",
  "www.bing.",
  "www.yahoo.",
  "search.yahoo.",
  "cn.bing.",
]
var lsSocial = [
  "plus.url.google.com",
  "plus.google.com",
  "facebook.com",
  "linkedin.com",
  "twitter.com",
  "//t.co",
  "youtube.com",
  "pinterest.com",
  "t.umblr.com",
  "instagram.com",
  "lnkd.in",
  "com.linkedin",
]
var lsReview = [
  "capterra.",
  "capmain.com",
  "crozdesk.com",
  "discovercloud.com",
  "financesonline.com",
  "g2crowd.com",
  "consumersadvocate.org",
  "saasgenius.com",
  "softwareadvice.com",
  "getapp.com",
  "itcentralstation.com",
  "financesonline.com",
  "business.com",
  "saasgenius.com",
  "itcentralstation.com",
  "selecthub.com",
  "siftery.com",
  "picksaas.com",
  "bestcompany.com",
  "softwaresuggest.com",
  "serchen.com",
  "ketchell.com",
  "shanebarker.com",
]
var lsPR = [
  "www.wsj.com",
  "www.emarketer.com",
  "www.inc.com",
  "www.msn.com",
  "www.bandt.com.au",
  "www.christianpost.com",
  "sg.news.yahoo.com",
  "www.nasdaq.com",
  "www.bizjournals.com",
  "www.bloomberg.com",
  "www.crmirewards.com",
  "www.bizreport.com",
  "mobilemarketingwatch.com",
  "www.applianceretailer.com.au",
  "www.independent.ie",
  "detroit.cbslocal.com",
  "truepundit.com",
  "www.ibm.comblogs",
  "www.businessinsider.com",
  "www.everyjoe.com",
  "www.bizreport.com",
  "praisecleveland.com",
  "www.breitbart.com",
  "www.newsweek.com",
  "uk.news.yahoo.com",
  "redpilltimes.com",
  "wtkr.com",
  "www.cbs8.com",
  "next.aftrs.edu.au",
  "stlouis.cbslocal.com",
  "baltimore.cbslocal.com",
  "connecticut.cbslocal.com",
  "philadelphia.cbslocal.com",
  "denver.cbslocal.com",
  "miami.cbslocal.com",
  "dfw.cbslocal.com",
  "www.studyfinds.org",
  "www.chainstoreage.com",
  "ciokurator.com",
  "istart.com.au",
  "www.medianet.com.au",
  "www.mybusiness.com.au",
  "www.dailymail.co.uk",
  "www.governmentnews.com.au",
  "marketingland.com",
  "thenextweb.com",
  "venturebeat.com",
  "www.itwire.com",
  "www.loyalty360.org",
  "www.nojitter.com",
  "www.huffingtonpost.de",
  "www.huffingtonpost.com",
  "www.nytimes.com",
  "www.amny.com",
  "www.metro.us",
  "www.crainsnewyork.com",
  "www.tnooz.com",
  "www.travolution.com",
  "www.thegrocer.co.uk",
  "www.mycustomer.com",
  "www.marconomy.de",
  "www.cmo.com.au",
  "www.cmo.com",
  "www.usatoday.com",
  "www.usnews.com",
  "www.handelsblatt.com",
  "fortune.com",
  "www.entrepreneur.comus",
  "www.financial-news.co.uk",
  "www.ft.com",
  "www.itproportal.com",
  "www.smartertravel.com",
  "www.smartcustomerservice.com",
  "businesstech.co.za",
  "skift.com",
  "www.ags-airlinegroundservices.com",
  "airlinegeeks.com",
  "www.mobilemarketer.com",
  "www.frequentbusinesstraveler.com",
  "www.lead-digital.de",
  "insidesmallbusiness.com.au",
  "www.topbots.com",
  "www.ibusiness.de",
  "www.werbewoche.ch",
  "www.contentmanager.de",
  "www.markenartikel-magazin.de",
  "www.tagesspiegel.de",
  "www.startupsense.net",
  "www.standard.co.uk",
  "www.thetimes.co.uk",
  "www.nbc29.com",
  "www.richmond.com",
  "www.computerworld.com.au",
  "www.computerworld.com",
  "www.itnews.com.au",
  "www.globaladvisors.biz",
  "magazineclick.com",
  "www.thenibbler.com.au",
  "thehustle.co",
  "www.thrillist.com",
  "qz.com",
  "www.destinationcrmblog.com",
  "www.nbcnews.com",
  "www.cnbc.com",
  "www.cnn.com",
  "www.ibtimes.com",
  "www.marketwatch.com",
  "www.investors.com",
  "www.retaildive.com",
  "www.digitalcommerce360.com",
  "www.wiwo.de",
  "www.traveltalkmag.com.au",
  "www.adnews.com.au",
  "www.rfigroup.com",
  "www.dynamicbusiness.com.au",
  "www.deutschlandfunk.de",
  "martechseries.com",
  "martechtoday.com",
  "www.retaildive.com",
  "risnews.com",
  "www.zdnet.de",
  "www.content-technology.com",
  "www.zdnet.com",
  "www.theaustralian.com.au",
  "www.marketingdive.com",
  "www.techrepublic.com",
  "www.newsbytesapp.com",
  "www.ubergizmo.com",
  "techgroundnews.com",
  "sk8.tech",
  "www.digitaltrends.com",
  "www.inquisitr.com",
  "www.macrumors.com",
  "www.techtimes.com",
  "appleinsider.com",
  "techcrunch.com",
  "www.thedrum.com",
  "www.travelweekly.com.au",
  "www.bbc.com",
  "www.futureofeverything.io",
  "www.bankingtech.com",
  "www.finextra.com",
  "wwd.com",
  "www.cmswire.com",
  "adexchanger.com",
  "www.cable.co.uk",
  "www.globalbankingandfinance.com",
  "www.thesun.ie",
  "internetretailing.net",
  "www.express.co.uk",
  "www.ciodive.com",
  "www.paymentssource.com",
  "chatbotsmagazine.com",
  "www.marketingweek.com",
  "www.pymnts.com",
  "www.autonews.com",
  "www.mediapost.com",
  "www.foxbusiness.com",
  "www.reuters.com",
  "adage.com",
  "www.adweek.com",
  "www.ap.org",
  "www.buzzfeed.com",
  "digiday.com",
  "www.fastcompany.com",
  "www.forbes.com",
  "hbr.org",
  "mashable.com",
  "www.recode.net",
  "www.theverge.com",
  "www.washingtonpost.com",
  "www.vice.com",
  "www.americanbanker.com",
  "www.wired.com",
  "arstechnica.com",
  "bankinnovation.net",
  "www.banktech.com",
  "www.bankingtech.com",
  "bgr.com",
  "www.chiefmarketer.com",
  "www.cnet.com",
  "www.engadget.com",
  "gizmodo.com",
  "www.informationweek.com",
  "multichannelmerchant.com",
  "www.pcmag.com",
  "www.retailtouchpoints.com",
  "stores.org",
  "www.techradar.com",
  "www.theinquirer.net",
  "www.travelpulse.com",
  "www.economist.com",
  "www.theguardian.com",
  "www.itproportal.com",
  "www.metro.us",
  "www.techworld.com",
  "www.cbr.com",
  "www.information-age.com",
  "www.financedigest.com",
  "digitalmarketingmagazine.co.uk",
  "cxm.co.uk",
  "cxm.world",
  "www.thebanker.com",
  "www.marketingtechnews.net",
  "www.computerweekly.com",
  "uxmag.com",
  "businessnewsdaily.com",
  "prnewswire.com",
  "channelpronetwork.com",
  "crn.com",
  "e-channelnews.com",
  "channelpartnersonline.com",
  "channelnomics.com",
  "channelbuzz.ca",
  "channelfutures.com",
  "comptia.org",
  "channele2e.com",
  "channelinfo.net",
  "channelinsider.com",
  "smbnation.com",
  "ascii.com",
  "the2112group.com",
  "451research.com",
  "channelemea.com",
  "canalys.com",
  "iteuropa.com",
  "channelexecutivemag.com",
  "independent.co.uk",
]

function lsList() {
  for (i = 0; i < lsOrganic.length; i++) {
    if (lsRef.indexOf(lsOrganic[i]) !== -1) {
      setCookie("lp-leadSource", "Organic", 1)
      leadSourceCookie = "Organic"
      return false
    }
  }
  for (i = 0; i < lsSocial.length; i++) {
    if (lsRef.indexOf(lsSocial[i]) !== -1) {
      setCookie("lp-leadSource", "Social", 30)
      setCookie("lp-lsRef", lsRef, 30)
      leadSourceCookie = "Social"
      return false
    }
  }
  for (i = 0; i < lsReview.length; i++) {
    if (lsRef.indexOf(lsReview[i]) !== -1) {
      setCookie("lp-leadSource", "Review website", 30)
      setCookie("lp-lsRef", lsRef, 30)
      leadSourceCookie = "Review website"
      return false
    }
  }
  for (i = 0; i < lsPR.length; i++) {
    if (lsRef.indexOf(lsPR[i]) !== -1) {
      setCookie("lp-leadSource", "PR", 1)
      leadSourceCookie = "PR"
      return false
    }
  }

  setCookie("lp-leadSource", "Other referral", 1)
  leadSourceCookie = "Other referral"
}

var lpindex = lsRef.indexOf("liveperson.com")

if (leadSourceCookie === "") {
  if (getParam("utm_medium") == "remarketing") {
    // Remarketing
    setCookie("lp-leadSource", "Remarketing", 30)
    leadSourceCookie = "Remarketing"
    setCookie("lp-lsRef", lsRef, 30)
  } else if (getParam("utm_medium") == "display") {
    // Display
    setCookie("lp-leadSource", "Display", 30)
    leadSourceCookie = "Display"
    setCookie("lp-lsRef", lsRef, 30)
  } else if (getParam("utm_medium") == "social") {
    // Social
    setCookie("lp-leadSource", "Social", 30)
    leadSourceCookie = "Social"
    setCookie("lp-lsRef", lsRef, 30)
  } else if (getParam("gclid")) {
    // Paid Search
    setCookie("lp-leadSource", "Paid search", 30)
    leadSourceCookie = "Paid search"
    setCookie("lp-lsRef", lsRef, 30)
  } else if (getParam("msclkid")) {
    // Paid Search
    setCookie("lp-leadSource", "Paid search", 30)
    leadSourceCookie = "Paid search"
    setCookie("lp-lsRef", lsRef, 30)
  } else if (getParam("utm_medium") === "email") {
    // Email
    setCookie("lp-leadSource", "Email", 1)
    leadSourceCookie = "Email"
  } else if (
    lsRef.indexOf("go.liveperson.com") >= 0 ||
    lsRef.indexOf("mkto-g0178.com") >= 0
  ) {
    setCookie("lp-leadSource", "Email", 1)
    leadSourceCookie = "Email"
  } else if (lsRef === "" || !lsRef || (lpindex > -1 && lpindex < 15)) {
    // Direct
    setCookie("lp-leadSource", "Direct", 1)
    leadSourceCookie = "Direct"
    lsRef = document.location.href
    setCookie("lp-lsRef", document.location.href, 1)
  } else {
    lsList() // Everything else
  }
}

// cookie user with gclid
var gclid = getParam("gclid")
if (gclid) {
  var gclsrc = getParam("gclsrc")
  if (!gclsrc || gclsrc.indexOf("aw") !== -1) {
    setCookie("gclid", gclid, 30)
  }
} else {
  gclid = (name = new RegExp("(?:^|;\\s*)gclid=([^;]*)").exec(document.cookie))
    ? name.split(",")[1]
    : ""
}

// cookie user with msclkid
var msclkid = getParam("msclkid")
if (msclkid) {
  setCookie("msclkid", msclkid, 30)
} else {
  msclkid = (name = new RegExp("(?:^|;\\s*)msclkid=([^;]*)").exec(
    document.cookie
  ))
    ? name.split(",")[1]
    : ""
}
