import SignupPage from '../pageobjects/signup.page';
import ProvincePage from '../pageobjects/province.page';
import AccountTypePage from '../pageobjects/account-type.page';
import EligibilityPage from '../pageobjects/eligibility.page';
import BenefitProviderPage from '../pageobjects/benefit-provider.page';
import ProviderDesjardinPage from '../pageobjects/provider-desjardins.page';
import NotEligibleDesjardinPage from '../pageobjects/not-eligible-desjardins.page';
import EligibleDesjardinPage from '../pageobjects/eligible-desjardins.page';
import Message from '../data/messages';

import { expect } from 'chai';

describe('Signup', () => {
    let policyNumber, certificateNumber;
    describe('Flow 1: A user registers with invalid information', () => {
        beforeAll(function () {
            policyNumber = 12345;
            certificateNumber = 12345;
        });
        it('should NOT be able to register', () => {
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
            ProviderDesjardinPage.enterCredentials(policyNumber, certificateNumber);
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
    describe('Flow 2: A user registers with valid information', () => {
        beforeAll(function () {
            policyNumber = 'CN34343';
            certificateNumber = 'qatest001';
        });
        it('should be able to register', () => {
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
            ProviderDesjardinPage.enterCredentials(policyNumber, certificateNumber);
            ProviderDesjardinPage.clickContinueBtn();
            EligibleDesjardinPage.eligibleMessage.waitForDisplayed(5000, undefined, 'unable to locate element');
            expect(browser.getUrl()).to.contain('/eligible/desjardins');
            EligibleDesjardinPage.eligibleMessage.waitForDisplayed(5000, undefined, 'unable to locate element');
            expect(EligibleDesjardinPage.getMessage()).to.equal(Message.eligibleMessageDesjardins());
            EligibleDesjardinPage.sendActivationLinkBtn.waitForDisplayed(5000, undefined, 'unable to locate element');
            // avoiding to click on the "Send me my activation link" button, instead check the button text
            expect(EligibleDesjardinPage.getBtnText()).to.equal(Message.eligibleDesjardinsBtnText());
        });
    });

    /* 
    some other tests
        Best way of doing Visual testing is to use tools like apliTools
        Below are some tests to verify the visibility of some UI components
    */
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
        it('card title is present', () => {
            browser.pause(1000);
            const cardTitle = SignupPage.getCardTitle();
            expect(cardTitle).to.equal(Message.signupPageCardTitle());
        });
    });
    // some form validations
    describe('Form Validations:', () => {
        describe('Next button should be disabled', () => {
            it('when wrong email format is provided', () => {
                SignupPage.open();
                SignupPage.enterEmail('83.mumair@g');
                expect(SignupPage.btnIsDisabled.isDisplayed()).to.be.false;
            });
            it('when email field is empty', () => {
                SignupPage.open();
                SignupPage.enterEmail('');
                expect(SignupPage.btnIsDisabled.isDisplayed()).to.be.false;
                console.log("THE PROCESS IS", process);
            });
        });
    });
});
