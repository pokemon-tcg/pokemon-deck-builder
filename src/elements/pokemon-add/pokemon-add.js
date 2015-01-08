Polymer({
  quantity: 0,
  number: 0,
  set: "",
  created: function() {
    this.sets = [
      // Original
      { value: 'BS', label: 'Base Set', series: 'Original' },
      { value: 'B2', label: 'Base Set 2', series: 'Original' },
      { value: 'FO', label: 'Fossil', series: 'Original' },
      { value: 'GC', label: 'Gym Challenge', series: 'Orginal' },
      { value: 'GH', label: 'Gym Heroes', series: 'Original' },
      { value: 'JU', label: 'Jungle', series: 'Original' },
      { value: 'TR', label: 'Team Rocket', series: 'Original' },
      // Neo
      { value: 'N1', label: 'Neo Genesis', series: 'Neo' },
      { value: 'N2', label: 'Neo Discovery', series: 'Neo' },
      { value: 'N3', label: 'Neo Revelation', series: 'Neo' },
      { value: 'N4', label: 'Neo Destiny', series: 'Neo' },
      // Legendary Collection
      { value: 'LC', label: 'Legendary Collection', series: 'Legendary Collection' },
      // e-card
      { value: 'AQ', label: 'Aquapolis', series: 'e-Card' },
      { value: 'EX', label: 'Expedition', series: 'e-Card' },
      { value: 'SK', label: 'Skyridge', series: 'e-Card' },
      // EX
      { value: 'CG', label: 'EX Crystal Guardians', series: 'EX' },
      { value: 'DS', label: 'EX Delta Species', series: 'EX' },
      { value: 'DX', label: 'EX Deoxys', series: 'EX' },
      { value: 'DR', label: 'EX Dragon', series: 'EX' },
      { value: 'DF', label: 'EX Dragon Frontiers', series: 'EX' },
      { value: 'EM', label: 'EX Emerald', series: 'EX' },
      { value: 'RG', label: 'EX Fire Red & Leaf Green', series: 'EX' },
      { value: 'HL', label: 'EX Hidden Legends', series: 'EX' },
      { value: 'HP', label: 'EX Holon Phantoms', series: 'EX' },
      { value: 'LM', label: 'EX Legend Maker', series: 'EX' },
      { value: 'PK', label: 'EX Power Keepers', series: 'EX' },
      { value: 'RS', label: 'EX Ruby & Sapphire', series: 'EX' },
      { value: 'SS', label: 'EX Sandstorm', series: 'EX' },
      { value: 'MA', label: 'EX Team Magma vs Team Aqua', series: 'EX' },
      { value: 'TRR', label: 'EX Team Rocket Returns', series: 'EX' },
      { value: 'UF', label: 'EX Unseen Forces', series: 'EX' },
      // Diamond & Pearl
      { value: 'DP', label: 'Diamond & Pearl', series: 'Diamond & Pearl' },
      { value: 'GE', label: 'Great Encounters', series: 'Diamond & Pearl' },
      { value: 'LA', label: 'Legends Awakened', series: 'Diamond & Pearl' },
      { value: 'MD', label: 'Majestic Dawn', series: 'Diamond & Pearl' },
      { value: 'MT', label: 'Mysterious Treasures', series: 'Diamond & Pearl' },
      { value: 'SW', label: 'Secret Wonders', series: 'Diamond & Pearl' },
      { value: 'SF', label: 'Storm Front', series: 'Diamond & Pearl' },
      // Platinum
      { value: 'AR', label: 'Arceus', series: 'Platinum' },
      { value: 'PL', label: 'Platinum', series: 'Platinum' },
      { value: 'RR', label: 'Rising Rivals', series: 'Platinum' },
      { value: 'SV', label: 'Supreme Victors', series: 'Platinum' },
      // HeartGold & SoulSilver
      { value: 'HS', label: 'HeartGold & SoulSilver', series: 'HeartGold & SoulSilver' },
      { value: 'TM', label: 'Triumphant', series: 'HeartGold & SoulSilver' },
      { value: 'UD', label: 'Undaunted', series: 'HeartGold & SoulSilver' },
      { value: 'UL', label: 'Unleashed', series: 'HeartGold & SoulSilver' },
      // Call of Legends
      { value: 'CL', label: 'Call of Legends', series: 'Call of Legends' },
      // Black & White
      { value: 'BLW', label: 'Black & White', series: 'Black & White' },
      { value: 'BCR', label: 'Boundaries Crossed', series: 'Black & White' },
      { value: 'DEX', label: 'Dark Explorers', series: 'Black & White' },
      { value: 'DRX', label: 'Dragons Exalted', series: 'Black & White' },
      { value: 'EPO', label: 'Emerging Powers', series: 'Black & White' },
      { value: 'LTR', label: 'Legendary Treasures', series: 'Black & White' },
      { value: 'NXD', label: 'Next Destinies', series: 'Black & White' },
      { value: 'NVI', label: 'Noble Victories', series: 'Black & White' },
      { value: 'PLB', label: 'Plasma Blast', series: 'Black & White' },
      { value: 'PLF', label: 'Plasma Freeze', series: 'Black & White' },
      { value: 'PLS', label: 'Plasma Storm', series: 'Black & White' },
      // XY
      { value: 'FLF', label: 'Flashfire', series: 'XY' },
      { value: 'FFI', label: 'Furious Fists', series: 'XY' },
      { value: 'PHF', label: 'Phantom Forces', series: 'XY' },
      { value: 'XY', label: 'XY', series: 'XY' }
    ]
  },
  addCard: function(event) {
    event.preventDefault();
    if( parseInt(this.quantity) === 0 ||
        isNaN(parseInt(this.quantity)) ||
        parseInt(this.number) === 0 ||
        isNaN(parseInt(this.number)) ||
        this.set === "" ) {
      this.$.toast.show();
    } else {
      this.fire('add', {quantity: this.quantity, set: this.set, number: this.number});
      this.quantity = 0;
      this.set = "";
      this.number = 0;
    }
  }
});