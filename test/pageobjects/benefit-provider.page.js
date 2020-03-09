import Page from './page'

class BenefitProviderPage extends Page {

    get optionsList() { return $('.CardDecision.CardItem.align-right') }
    get option() { return $('.CardDecision.CardItem.align-right>div:nth-child(1)') }

    selectOption(opt) {
        const myOption = $(`.CardDecision.CardItem.align-right>div:nth-child(${opt})>button.CardButton.secondary`);
        myOption.click();
    }
}

export default new BenefitProviderPage()