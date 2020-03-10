import Page from './page'

class EligibilityPage extends Page {

    get optionsList() { return $('.CardDecision.CardItem.align-right') }
    get option() { return $('.CardDecision.CardItem.align-right>div:nth-child(2)') }

    /**
     * @desc to pick different element use number 1 to 4 for example Desjardins logo is 1 and 
     *       Good News! text is 2
     * @param {number} opt 
     * @example if you put 1, it will get the desjardin logo, if you put 2 it will read the text "Good Job!"
     */
    selectOption(opt) {
        const myOption = $(`.CardDecision.CardItem.align-right>div:nth-child(${opt})`);
        myOption.click();
    }
}

export default new EligibilityPage()