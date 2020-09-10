import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { userLogin, shopinglist } from '../services/users';
import Global from '../global';

export default {
  state: {
    userData: null,
    remember: false, // Whether to remember password
    formData: {
      username: 'admin',
      password: 'admin!',
    },
    listdata: [{ title: '一' },
    { title: '二' }],
  },
  reducers: {
    update: (state, payload) => ({ ...state, ...payload }),
    updateForm: (state, payload) => ({
      ...state,
      formData: { ...state.formData, ...payload },
    }),
    listdataF: (state, payled) => ({
      ...state,
      listdata: [...state.listdata, ...payled]
    })
  },
  effects: dispatch => ({
    // 登录
    async login(_, { users, global }) {
      
      const data = await userLogin(users.formData);
      if (data && data.token && data.data) {
        await AsyncStorage.setItem('token', data.token);


        // Cache username and password
        if (users.remember) {
          await AsyncStorage.setItem('cachLoginName', users.formData.loginName);
          await AsyncStorage.setItem('cachPassword', users.formData.password);
        }
        await AsyncStorage.setItem('userData', JSON.stringify(data.data));
        await dispatch.global.update({ token: data.token });
        await this.update({ userData: data.data });
        if (Global.navigation) {
          // Global.navigation.navigate('Home');
          Global.navigation.replace('Home');
        }
      } else if (data && data.message) {
        Alert.alert(`Login failed - ${data.error}`, data.message);
      }
    },
    async logout() {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userData');
      dispatch.global.update({ token: null });
      dispatch.users.update({ userData: null });
      Global.navigation.navigate('SignIn');
    },
    async getlist(_, { users, global }) {
      const l = await shopinglist(users.listdata);
      await this.update({ listdata: l.listdata });
    }
  }),
};
