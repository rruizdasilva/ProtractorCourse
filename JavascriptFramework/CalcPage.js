function CalcPage(){
    this.firstinput = element(by.model("first"));
    this.secondinput = element(by.model("second"));
    this.gobutton = element(by.id("gobutton"));
    this.result = element(by.css("h2[class='ng-binding"));
    this.getURL=function(url){
        browser.get(url);
    };
}

module.exports = new CalcPage();
