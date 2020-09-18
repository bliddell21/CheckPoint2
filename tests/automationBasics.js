const { verify } = require("crypto")
//Test plan available at https://docs.google.com/document/d/18fi_FrrWjl_Uj9H4s0BHSQjN8quTAhgn2a8OpkfSrRY/edit?usp=sharing
var automationBasicsPage = {}
module.exports = {
beforeEach: browser => {
automationBasicsPage= browser.page.automationBasicsObj()
automationBasicsPage
    .navigate()
.useXpath()    
.waitForElementPresent('//body')
},
afterEach: browser => {
automationBasicsPage.end()
},
'Functionality Testing': browser => {
    automationBasicsPage
    .setValue('@evenOddInput','1,2,3,4')
    .click('@evenOddButton')
    .verify.containsText('@evenResults',"2,4")
    .verify.containsText('@oddResults', "1,3")
    .setValue('@filterObjectInput',"title")
    .click('@filterObjectButton')
    .verify.containsText('@filterObjectResults', "Jimmy Joe")
    .verify.containsText('@filterObjectResults', "Carly Armstrong")
    automationBasicsPage.expect.element('@filterObjectResults').text.to.not.contain('Jeremy Schrader')
    automationBasicsPage
    .setValue('@filterStringInput',"J")
    .click('@filterStringButton')
    .verify.containsText('@filterStringResults', "James")
    .expect.element('@filterStringResults').text.to.not.contain("Mark")
    automationBasicsPage
    .setValue('@palindromeInput','racecar')
    .click('@palindromeButton')
    .verify.containsText('@palindromeResults',"true")
    .clearValue('@palindromeInput')
    .setValue('@palindromeInput',"monkey")
    .click('@palindromeButton')
    .verify.containsText('@palindromeResults',"false")
    .setValue('@sumInput1',"7")
    .setValue('@sumInput2',"8")
    .click('@sumButton')
    .verify.containsText('@sumResults',"15")
}
}
