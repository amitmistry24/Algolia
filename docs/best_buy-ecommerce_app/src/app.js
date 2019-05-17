/* global algoliasearch instantsearch */

const searchClient = algoliasearch(
  'IVNRBZTFI1',
  '39b5cee90079e0d74a2dfedeeafce59d'
);

const search = instantsearch({
  indexName: 'best_buy',
  searchClient,
});

search.addWidget(
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  })
);

search.addWidget(
  instantsearch.widgets.currentRefinements({
    container: '#current-refinements',
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'brand',
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <article>
          <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
          <p>{{#helpers.highlight}}{ "attribute": "shortDescription" }{{/helpers.highlight}}</p>
          <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
          <p>{{#helpers.highlight}}{ "attribute": "salePrice" }{{/helpers.highlight}}</p>
          <p>{{#helpers.highlight}}{ "attribute": "price" }{{/helpers.highlight}}</p>
        </article>
      `,
    },
  })
);



search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);

search.start();
