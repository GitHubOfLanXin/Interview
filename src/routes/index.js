import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import DevOptions from '../pages/DevOptions';
import MyHomeSetting from '../pages/MyHome/Setting';
import MyHomeCub from '../pages/MyHome/Cub/index.js';
import ShoppingCartDown from '../pages/ShoppingCart/Down';
import ShoppingCartUp from '../pages/ShoppingCart/Up'


export const stackPageData = [
  {
    name: "Home",
    component: Home,
    options: {
      // headerShown: false,
      // header: () => null
    }
  },
  {
    name: "SignIn",
    component: SignIn,
    options: {
      headerShown: false,
      header: () => null
    }
  },
  {
    name: "DevOptions",
    component: DevOptions,
    options: {
      headerShown: false,
      header: () => null
    }
  },
  {
    name: "ShoppingCartUp",
    component: ShoppingCartUp,
    options: {
        title: '我是楼下',
    }
  },
  {
    name: "ShoppingCartDown",
    component: ShoppingCartDown,
    options: {
        title: '我是楼下',
    }
  },
  {
    name: "MyHomeCub",
    component: MyHomeCub,
    options: {
        title: '我的熟车',
    }
  },
  {
    name: "MyHomeSetting",
    component: MyHomeSetting,
    options: {
      title: '设置',
    }
  },
]