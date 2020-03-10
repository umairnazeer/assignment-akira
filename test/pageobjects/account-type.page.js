import Page from './page'

class AccountTypePage extends Page {

    get optionsList() { return $('.CardDecision.CardItem.align-right') }
    get option() { return $('.CardDecision.CardItem.align-right>div:nth-child(1)')}

     /**
      * @desc To pick a different answer, use a number starting from 1 to 3
      * @param {number} opt 
      */
    selectOption(opt) {
        const myOption = $(`.CardDecision.CardItem.align-right>div:nth-child(${opt})`);
        myOption.click();
    }
}

export default new AccountTypePage()