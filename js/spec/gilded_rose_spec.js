describe("Gilded Rose", function() {


  it("should test a couple of products over 5 days", function() {
    let items = [];

    items.push(new Item('+5 Dexterity Vest', 15, 20));
    items.push(new Item('something random!', 3, 20));
    items.push(new Item('Aged Brie', 2, 0));
    items.push(new Item('Elixir of the Mongoose', 5, 7));
    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
    items.push(new Item('Conjured Mana Cake', 3, 6));


    let gildedRose = new Shop(items);
    
    var days = 5;

    for (var i = 0; i < days; i++) {
      gildedRose.updateQuality();
    }
    
    expect(gildedRose.items[0].sellIn).toEqual(10);
    expect(gildedRose.items[0].quality).toEqual(15);
    
    // 
    expect(gildedRose.items[1].sellIn).toEqual(0);
    expect(gildedRose.items[1].quality).toEqual(12);

    
    expect(gildedRose.items[2].sellIn).toEqual(0);
    expect(gildedRose.items[2].quality).toEqual(5);

    expect(gildedRose.items[3].sellIn).toEqual(0);
    expect(gildedRose.items[3].quality).toEqual(1);

    expect(gildedRose.items[4].sellIn).toEqual(0);
    expect(gildedRose.items[4].quality).toEqual(80);

    expect(gildedRose.items[5].sellIn).toEqual(10);
    expect(gildedRose.items[5].quality).toEqual(26);
    
    expect(gildedRose.items[6].sellIn).toEqual(0);
    expect(gildedRose.items[6].quality).toEqual(0);

    
    
    
  });
  
});
