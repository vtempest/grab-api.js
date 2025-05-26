import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', 'e86'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '8a6'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'f8f'),
            routes: [
              {
                path: '/lib/',
                component: ComponentCreator('/lib/', 'd92'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/lib/globals',
                component: ComponentCreator('/lib/globals', 'aff'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'cdc'),
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
