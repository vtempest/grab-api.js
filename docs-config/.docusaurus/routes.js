import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '532'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '55c'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '149'),
            routes: [
              {
                path: '/guide/Examples',
                component: ComponentCreator('/guide/Examples', '8d3'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/guide/Performance',
                component: ComponentCreator('/guide/Performance', '426'),
                exact: true,
                sidebar: "default"
              },
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
                component: ComponentCreator('/', '396'),
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
