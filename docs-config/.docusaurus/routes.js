import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', 'fee'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'eac'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '861'),
            routes: [
              {
                path: '/guide/Comparisons',
                component: ComponentCreator('/guide/Comparisons', '4c4'),
                exact: true,
                sidebar: "default"
              },
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
                path: '/lib/grab-api',
                component: ComponentCreator('/lib/grab-api', 'f4d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/lib/icons',
                component: ComponentCreator('/lib/icons', 'a65'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/lib/icons-1',
                component: ComponentCreator('/lib/icons-1', 'd72'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/lib/log',
                component: ComponentCreator('/lib/log', 'f79'),
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
