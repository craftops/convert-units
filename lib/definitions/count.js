const metric = {
  individual: {
    name: {
      singular: 'individual'
    , plural: 'individuals'
    }
  , to_anchor: 1
},
  case: {
    name: {
      singular: 'case'
    , plural: 'cases'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: {}
, _anchors: {
    metric: {
      unit: 'individual'
    , ratio: 1
    }
  }
};
