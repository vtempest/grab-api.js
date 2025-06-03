import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', '4d3'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'ee7'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'b8c'),
            routes: [
              {
                path: '/guide/Comparisons',
                component: ComponentCreator('/guide/Comparisons', '9f7'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/guide/Examples',
                component: ComponentCreator('/guide/Examples', '937'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/guide/Performance',
                component: ComponentCreator('/guide/Performance', '0d2'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/lib/',
                component: ComponentCreator('/lib/', '6e8'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/lib/grab-api',
                component: ComponentCreator('/lib/grab-api', 'b2d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/lib/log',
                component: ComponentCreator('/lib/log', 'e76'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/lib/modules',
                component: ComponentCreator('/lib/modules', '6f1'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/',
                component: ComponentCreator('/', '48d'),
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
