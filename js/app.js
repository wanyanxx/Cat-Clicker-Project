var Cat=function(){
    this.clickCount=ko.observable(0);
    this.name=ko.observable('Tommy');
    this.imgSrc=ko.observable('img/1.jpg');
    this.level=ko.computed(function(){
        var title;
        var  clickCount = this.clickCount();
        if(clickCount<10){return "Newborn";}
        else if(clickCount<20){return "Adult";}
            else if(clickCount<30){return "Old";}
        return title;  
    },this);
    this.nameList=ko.observable('NickName');
    this.nickNames=ko.observableArray([
        {name:'Abby'},
        {name:'Baby'},
        {name:'Canny'},
    ])
}
var ViewModel=function(){
    var self = this;
    this.currentCat=ko.observable(new Cat());
    this.incrementCounter=function(){
    self.currentCat().clickCount(self.currentCat().clickCount()+1);
    }
}
ko.applyBindings(new ViewModel());