import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'ad1'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '2e8'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', '4a8'),
            routes: [
              {
                path: '/docs/guide/Comparisons',
                component: ComponentCreator('/docs/guide/Comparisons', '79d'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/guide/Docs Libraries',
                component: ComponentCreator('/docs/guide/Docs Libraries', 'f66'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/guide/Examples',
                component: ComponentCreator('/docs/guide/Examples', '9de'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/guide/Performance',
                component: ComponentCreator('/docs/guide/Performance', 'a24'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/lib/',
                component: ComponentCreator('/docs/lib/', '7f8'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/lib/grab-api',
                component: ComponentCreator('/docs/lib/grab-api', '8a7'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/lib/log',
                component: ComponentCreator('/docs/lib/log', 'afe'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/lib/modules',
                component: ComponentCreator('/docs/lib/modules', '9e6'),
                exact: true,
                sidebar: "default"
              },
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '83b'),
                exact: true,
                sidebar: "lib"
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
