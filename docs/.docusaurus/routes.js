import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'fdb'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', 'c38'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'fd7'),
            routes: [
              {
                path: '/docs/lib/',
                component: ComponentCreator('/docs/lib/', 'bb3'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/lib/globals',
                component: ComponentCreator('/docs/lib/globals', 'e61'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'cfe'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
