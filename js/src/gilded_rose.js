'use strict'

function updateNormalItem () {
  if ((this.sellIn === 0) && (this.quality ===0)) return;

  this.sellIn -= 1;
  this.quality -= 1;
  
  if (this.sellIn <= 0) this.quality -= 1; // Once sellIn has passed, Quality degrades twice as fast
  
  if (this.sellIn < 0) this.sellIn = 0;
  if (this.quality < 0) this.quality = 0;
  if (this.quality > 50) this.quality = 50;
}

function updateAgedBrie () {
  if ((this.sellIn === 0) && (this.quality === 50)) return;

  this.sellIn -= 1; //to confirm if a brie as a sellIn date...
  this.quality += 1;
  
  if (this.sellIn < 0) this.sellIn = 0;
  if (this.quality < 0) this.quality = 0;
  if (this.quality > 50) this.quality = 50;
}

function updateSulfuras() {
  return; // is all good! legendary item!
}

function updateBackStagePasses() {
  if ((this.sellIn === 0) && (this.quality === 50)) return;

  this.sellIn -= 1; //to confirm if a brie as a sellIn date...
  this.quality += 1;
  
  if (this.sellIn <= 10) this.quality += 1; // Quality increases by 2 when there are 10 days or less
  if (this.sellIn <= 5) this.quality += 1; // Quality increases by 3 when there are 5 days or less
  
  
  if (this.sellIn < 0) this.sellIn = 0;
  if (this.sellIn === 0) this.quality = 0; // Quality drops to 0 after the concert
  if (this.quality > 50) this.quality = 50;
}

function updateConjuredItem () {
  if ((this.sellIn === 0) && (this.quality ===0)) return;

  this.sellIn -= 1;
  this.quality -= 2; //"Conjured" items degrade in Quality twice as fast as normal items
  
  if (this.sellIn <= 0) this.quality -= 1; // TODO confirm if  also degrades faster when sellIn date has passed
  
  if (this.sellIn < 0) this.sellIn = 0;
  if (this.quality < 0) this.quality = 0;
  if (this.quality > 50) this.quality = 50;
}

function findItemUpdateType(that) {
  let {name} = that;
  if (name.match("Aged Brie")) return updateAgedBrie.bind(that);
  if (name.match("Sulfuras")) return updateSulfuras.bind(that);
  if (name.match("Backstage passes")) return updateBackStagePasses.bind(that);
  if (name.match("Conjured")) return updateConjuredItem.bind(that);
  return updateNormalItem.bind(that);
}

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.updateFn = findItemUpdateType(this);
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].updateFn();
    }
    return this.items;
  }
}

