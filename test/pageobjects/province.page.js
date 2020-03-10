import Page from './page'

class provincePage extends Page {

    get provinceList() { return $('select[name="province"]') }
    get nextBtn() { return $('.CardButton.primary') }

    /**
     * @desc this function picks the province from the province list
     * @param {string} provinceName 
     * @example  'Ontario'
     */
    selectProvince(provinceName) {
        const list = this.provinceList;
        list.selectByVisibleText(provinceName);
    }

    /**
     * @desc this function clicks the next button
     */
    clickNextBtn() {
        this.nextBtn.click()
    }
}

export default new provincePage()