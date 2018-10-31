import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '功能展示',
    group: true,
  },  
  {
    title: 'JsonEdit画面(新)',
    icon: 'nb-keypad',
    children: [
      {
        title: '项目辞书',
        link: '/pages/json-from-demo',
      },
      {
        title: '内部IF',
        link: '/pages/json-from-demo',
      },
      {
        title: '画面设计',
        link: '/pages/json-from-demo',
      },  
      {
        title: '外部IF',
        link: '/pages/json-from-demo',
      },
    ],
  }, 
  {
    title: 'JsonEdit画面(旧)',
    icon: 'nb-compose',
    children: [
      {
        title: '项目辞书',
        link: '/pages/json-from-demo',
      },
      {
        title: '内部IF',
        link: '/pages/json-from-demo',
      },
      {
        title: '画面设计',
        link: '/pages/json-from-demo',
      },  
      {
        title: '外部IF',
        link: '/pages/json-from-demo',
      },           
    ],
  }, 
  {
    title: '分析图表',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
      {
        title: 'G6',
        link: '/pages/g6-from-demo',
      },      
    ],
  },  
  {
    title: '数据表格',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },  
  {
    title: '简单入力',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },   
 /*
  {
    title: 'E-commerce',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
  },
  {
    title: 'IoT Dashboard',
    icon: 'nb-home',
    link: '/pages/iot-dashboard',
  },
  */
  {
    title: '画面展示',
    group: true,
  },
  {
    title: '标准画面',
    icon: 'nb-locked',
    children: [
      {
        title: '基本入力',
        link: '/pages/json-from-demo',
      },      
      {
        title: '登录管理',
        link: '/auth/login',
      },
      {
        title: '注册管理',
        link: '/auth/register',
      },
      {
        title: '密码管理',
        link: '/auth/request-password',
      },
      {
        title: '恢复密码',
        link: '/auth/reset-password',
      },
    ],
  },
 
  {
    title: '自定设计',
    group: true,
  }, 
  {
    title: '设计管理',
    icon: 'nb-locked',
    children: [
      {
        title: '基本入力',
        link: '/pages/json-from-demo',
      },      
    ],
  },   
 
/*
  {
    title: '设计管理',
    group: true,
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Popovers',
        link: '/pages/ui-features/popovers',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
*/
];
