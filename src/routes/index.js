import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import DevOptions from '../pages/DevOptions';
import MyHomeSetting from '../pages/MyHome/Setting';
import MyHomeCub from '../pages/MyHome/Cub/index.js'


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