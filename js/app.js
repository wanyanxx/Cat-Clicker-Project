var initialCats=[
    {
        clickCount:0,
        name:'Tommy',
        imgSrc:'img/1.jpg',
        nickNames:['Abby','Mr-T'],
    },
    {
        clickCount:0,
        name:'Habby',
        imgSrc:'img/2.jpg',
        nickNames:['Baby'],    
    },
    {
        clickCount:0,
        name:'Elle',
        imgSrc:'img/3.jpg',
        nickNames:['Hello'],    
    },
    {
        clickCount:0,
        name:'Selly',
        imgSrc:'img/4.jpg',
        nickNames:['Sweet'],   
    },
    {
        clickCount:0,
        name:'Jane',
        imgSrc:'img/5.jpg',
        nickNames:['Mimi'],    
    },
]
var Cat=function(data){
    this.clickCount=ko.observable(data.clickCount);
    this.name=ko.observable(data.name);
    this.imgSrc=ko.observable(data.imgSrc);
    this.level=ko.computed(function(){
        var title;
        var  clickCount = this.clickCount();
        if(clickCount<10){return "Newborn";}
        else if(clickCount<20){return "Adult";}
            else if(clickCount<30){return "Old";}
        return title;  
    },this);
   
    this.nickNames = data.nickNames;
}

var ViewModel=function(){
    var self = this;
    this.catList =ko.observableArray([]);
    initialCats.forEach(function(catItem){
        self.catList.push(new Cat(catItem));
    })
    this.currentCat=ko.observable(this.catList()[0]);
    this.incrementCounter=function(){
    self.currentCat().clickCount(self.currentCat().clickCount()+1);
    }
    this.changeCurrentCat=function(currentCat){
        self.currentCat(currentCat);
    }
}
ko.applyBindings(new ViewModel());