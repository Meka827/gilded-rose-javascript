class Item {
  constructor(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
  }
}

class CheezeItem extends Item {
  updateQuality(){
    this.sell_in--;
    if(this.quality < 50) {
      this.quality++;
    }
  };
};

class BackstagePassItem extends Item {
  updateQuality() {
    if(this.sell_in <= 10 && this.sell_in > 5) {
      this.quality += 2
    } else if (this.sell_in <= 5 && this.sell_in > 0) {
      this.quality +=3
    } else if (this.sell_in < 0) {
      this.quality = 0
    } else {
      this.quality++
    }
    this.sell_in--
  }
}

class LegendaryItem extends Item {
  updateQuality() {
    // this.quality = 80;
    // this.sell_in = 0;
  }
}

class BasicItem extends Item {
  updateQuality(){
    if(this.quality > 0) {
      if(this.sell_in < 0) {
        this.quality -= 2;
      }else{
        this.quality--
      }
    }
  this.sell_in--;
}
}

class ConjuredItem extends Item {
  updateQuality(){
  this.quality -= 2;
  this.sell_in--;
}
}

var items = []

items.push(new BasicItem('+5 Dexterity Vest', 10, 20));
items.push(new CheezeItem('Aged Brie', 2, 0));
items.push(new BasicItem('Elixir of the Mongoose', 5, 7));
items.push(new LegendaryItem('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new BackstagePassItem('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new ConjuredItem('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (let item in items) {
    items[item].updateQuality();
  }
}