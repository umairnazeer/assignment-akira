import SignupPage from '../pageobjects/signup.page';
import ProvincePage from '../pageobjects/province.page';
import AccountTypePage from '../pageobjects/account-type.page';
import EligibilityPage from '../pageobjects/eligibility.page';
import BenefitProviderPage from '../pageobjects/benefit-provider.page';
import ProviderDesjardinPage from '../pageobjects/provider-desjardins.page';
import NotEligibleDesjardinPage from '../pageobjects/not-eligible-desjardins.page';
import Message from '../data/messages';

import { expect } from 'chai';

describe('Signup', () => {
    describe('Page Visibility Test', () => {
        it('the url should contain /email', () => {
            SignupPage.open();
            const url = browser.getUrl();
            expect(url).to.contain('email');
        });
        it('should have the right title', () => {
            const title = browser.getTitle();
            expect(title).to.equal('Akira - Signup');
        });
        it('verify that the logo is visible', () => {
            const isDisplayed = SignupPage.logo.isDisplayed();
            expect(isDisplayed).to.be.true;
        });
        it('Card title is present', () => {
            browser.pause(5000);
            const cardTitle = SignupPage.getCardTitle();
            console.log("TITLE YE HY BC", cardTitle);
            console.log(Message.signupPageCardTitle());
            expect(cardTitle).to.equal(Message.signupPageCardTitle());
        });
    });
    describe('A user registers with invalid information', () => {
        it('should not be able to register', () => {
            SignupPage.open();
            SignupPage.enterEmail('83.mumair@gmail.com');
            SignupPage.clickNextBtn();
            ProvincePage.provinceList.waitForExist(5000, undefined, 'unable to locate element');
            expect(browser.getUrl()).to.contain('/province');
            ProvincePage.selectProvince("Ontario");
            ProvincePage.clickNextBtn();
            expect(browser.getUrl()).to.contain('/account_type');
            AccountTypePage.selectOption(1);
            expect(browser.getUrl()).to.contain('/verify_eligibility_with');
            EligibilityPage.selectOption(2);
            expect(browser.getUrl()).to.contain('/select_benefit_provider');
            BenefitProviderPage.optionsList.waitForDisplayed(5000, undefined, 'unable to locate element');
            BenefitProviderPage.selectOption(1);
            expect(browser.getUrl()).to.contain('/verification-info/desjardins');
            ProviderDesjardinPage.enterCredentials(12345, 12345);
            ProviderDesjardinPage.clickContinueBtn();
            NotEligibleDesjardinPage.notEligibleMessage.waitForDisplayed(5000, undefined, 'unable to locate element');
            expect(browser.getUrl()).to.contain('/not_eligible/desjardins');
            expect(NotEligibleDesjardinPage.getMessage()).to.equal(Message.notEligibleMessageDesjardin());
        });
        it('can click Start Again to try again', () => {
            NotEligibleDesjardinPage.clickStartAgainBtn();
            expect(browser.getUrl()).to.contain('/verification-info/desjardins');
        });
    });
    describe('', () => {

    });
});
