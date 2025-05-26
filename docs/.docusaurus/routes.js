import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', 'c5c'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'a6a'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '278'),
            routes: [
              {
                path: '/lib/',
                component: ComponentCreator('/lib/', 'e95'),
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
