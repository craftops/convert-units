var metric
  , imperial;

metric = {
 ml: {
    name: {
      singular: 'Millilitre'
    , plural: 'Millilitres'
    }
  , to_anchor: 1/1000
  }
, cl: {
    name: {
      singular: 'Centilitre'
    , plural: 'Centilitres'
    }
  , to_anchor: 1/100
  }
, dl: {
    name: {
      singular: 'Deciliter'
    , plural: 'Deciliters'
    }
  , to_anchor: 1/10
  }
, l: {
    name: {
      singular: 'Liter'
    , plural: 'Liters'
    }
  , to_anchor: 1
  }
};

imperial = {
  tsp: {
    name: {
      singular: 'Teaspoon'
    , plural: 'Teaspoons'
    }
  , to_anchor: 1/6
  }
, Tbs: {
    name: {
      singular: 'Tablespoon'
    , plural: 'Tablespoons'
    }
  , to_anchor: 1/2
  }
, 'fl-oz': {
    name: {
      singular: 'Fluid Ounce'
    , plural: 'Fluid Ounces'
    }
  , to_anchor: 1
}
, tenthoz: {
    name: {
      singular: 'Tenth Ounce'
    , plural: 'Tenth Ounces'
    }
  , to_anchor: 1/10
}
, cup: {
    name: {
      singular: 'Cup'
    , plural: 'Cups'
    }
  , to_anchor: 8
  }
, pnt: {
    name: {
      singular: 'Pint'
    , plural: 'Pints'
    }
  , to_anchor: 16
  }
, qt: {
    name: {
      singular: 'Quart'
    , plural: 'Quarts'
    }
  , to_anchor: 32
  }
, gal: {
    name: {
      singular: 'Gallon'
    , plural: 'Gallons'
    }
  , to_anchor: 128
}
, bbl: {
    name: {
      singular: 'Beer Barrel'
    , plural: 'Beer Barrels'
    }
  , to_anchor: 3968
}
, ce: {
    name: {
      singular: 'Case Equivalent'
    , plural: 'Case Equivalent'
    }
  , to_anchor: 288
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'l'
    , ratio: 33.8140226
    }
  , imperial: {
      unit: 'fl-oz'
    , ratio: 1/33.8140226
    }
  }
};
