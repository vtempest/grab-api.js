import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', 'a74'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '4f3'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'd35'),
            routes: [
              {
                path: '/lib/',
                component: ComponentCreator('/lib/', 'e95'),
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
                path: '/lib/global/',
                component: ComponentCreator('/lib/global/', 'd7e'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/lib/global/namespaces/NodeJS',
                component: ComponentCreator('/lib/global/namespaces/NodeJS', '710'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/lib/grab-api',
                component: ComponentCreator('/lib/grab-api', 'f4d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/lib/modules',
                component: ComponentCreator('/lib/modules', '28a'),
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
