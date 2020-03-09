import Page from './page'

class provincePage extends Page {

    get provinceList() { return $('select[name="province"]') }
    get nextBtn() { return $('.CardButton.primary') }

    selectProvince(provinceName) {
        const list = this.provinceList;
        list.selectByVisibleText(provinceName);
    }

    clickNextBtn() {
        this.nextBtn.click()
    }

    // clickNextBtn() {
    //     this.nextBtn.click()
    // }
    

}

export default new provincePage()