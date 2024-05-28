const commonItems = ['Pencil','Pen','Marker', 'Lump of cat hair','Jar of air','Atom','Water','Fire','Deck of cards','$1 bill','Flyswatter','Snowglobe','toilet']
const uncommonItems = ['Earthworm (Alive)','Earthworm (Dead)','Wood','Boucey Ball','Meatballs','Rubber Duck','Mouse Pad','Salt Shaker','Pepper Shaker']
const rareItems = ['Dial-up phone','Parasol','Wild Neanderthal','Marbles','Plexiglass','Tree']
const epicItems = ['Fart in a jar','Sharktooth', 'Boba Tea Maker','Alphabet blocks']
const legendaryItems = ['Dragon Scale','Lightsaber','Red Panda Milk','1M pounds of silk']
const exoticItems = ['Bullet Ant Milk','Golden statue','Dreams in a jar']
const mythicItems = ['Diamond','Rhodochrosite','Real Wild Rown','ShophDaBoph']
const goddlyItems = ['','Your soul','God']

commonItemsSlot = commonItems[Math.floor(Math.random() * commonItems.length)];
uncommonItemsSlot = uncommonItems[Math.floor(Math.random() * uncommonItems.length)];
rareItemsSlot = rareItems[Math.floor(Math.random() * rareItems.length)];
epicItemsSlot = epicItems[Math.floor(Math.random() * epicItems.length)];
legendaryitemsSlot = legendaryItems[Math.floor(Math.random() * legendaryItems.length)];
exoticItemsSlot = exoticItems[Math.floor(Math.random() * exoticItems.length)];
mythicItemsSlot = mythicItems[Math.floor(Math.random() * mythicItems.length)];
goddlyItemsSlot = goddlyItems[Math.floor(Math.random() * goddlyItems.length)];

console.log("You earned a Common " + commonItemsSlot)
console.log("You earned a Uncommon " + uncommonItemsSlot)
console.log("You earned a Rare " + rareItemsSlot)
console.log("You earned a Epic " + epicItemsSlot)
console.log("You earned a Legendary " + legendaryitemsSlot)
console.log("You earned a Exotic " + exoticItemsSlot)
console.log("You earned a Mithic " + mythicItemsSlot)
console.log("You earned a Goddly " + goddlyItemsSlot)

var totalCommon = 0;
var totalUncommon = 0;
var totalRare = 0;
var totalEpic = 0;
var totalLegondary = 0;
var totalExotic = 0;
var totalMythic = 0;
var totalGoddly = 0;


function tiers() {
  if (Math.random() * 100 < 50) {
  totalCommon++;
  console.log("You earned a Common Item")
} else {
  if (Math.random() * 100 < 50) {
  totalUncommon++;
  console.log("You earned a Uncommon Item")
} else {
  if (Math.random() * 100 < 50) {
  totalRare++;
  console.log("You earned a Rare Item")
} else {
  if (Math.random() * 100 < 50) {
  totalEpic++;
  console.log("You earned a Epic Item")
} else {
  if (Math.random() * 100 < 50) {
  totalLegondary++;
  console.log("You earned a Legondary Item")
} else {
  if (Math.random() * 100 < 50) {
  totalExotic++;
  console.log("You earned a Exotic Item")
} else {
  if (Math.random() * 100 < 50) {
  totalMythic++;
  console.log("You earned a Mythic Item")
} else {
  if (Math.random() * 100 < 50) {
  totalGoddly++;
  console.log("You earned a Goddly Item")
        }
       }
      }
     }
    }
   } 
  } 
 }
}
tiers();

function totals() {
  alert("You have earned a total of:"
       + totalCommon + " Common Items" 
       + totalUncommon + " Uncommon Items"
       + totalRare + " Rare Items"
       + totalEpic + " Epic Items"
       + totalLegondary + " Legondary Item"
       + totalExotic + " Exotic Items"
       + totalMythic + " Mythic Items"
       + totalGoddly + " Goddly Items"
       );
}

