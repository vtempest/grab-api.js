import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '188'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '025'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'c35'),
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
