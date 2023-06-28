import { defineStore } from 'pinia'
import { NETWORK } from '@/net/NetworkCfg';
import type * as SignIn from "@/interface/signin";
import type * as SignUp from "@/interface/signup";
import type * as User from "@/interface/user";
import { Network } from "@/net/Network";
import { NetworkData } from '@/net/NetworkData';

export const authStore = defineStore({
  id: 'auth',
  state: () => ({
    success: false as boolean,
    errMessage: '' as string,
    authModalType: '' as string,
    token: NetworkData.getInstance().getToken() as string | undefined,
    userInfo: {
      uid: "User6696608024",
      name: "Little Planes",
      avatar: new URL("@/assets/public/image/ua_public_10.png", import.meta.url).href,
    } as User.GetUserInfo
  }),
  getters: {
    getSuccess: (state) => state.success,
    getErrMessage: (state) => state.errMessage,
    getAuthModalType: (state) => state.authModalType,
    getToken: (state) => state.token,
    getUserInfo: (state) => state.userInfo
  },
  actions: {
    setAuthModalType(authModalType: string) {
      this.authModalType = authModalType
    },
    setSuccess(success: boolean) {
      this.success = success
    },
    setErrorMessage(message: string) {
      this.errMessage = message
    },
    setToken(token: string) {
      const networkData: NetworkData = NetworkData.getInstance();
      networkData.setToken(token);
      this.token = token;
    },
    removeToken() {
      this.token = undefined;
      const networkData: NetworkData = NetworkData.getInstance();
      networkData.resetData();
    },
    setUserInfo(userInfo: User.GetUserInfo) {
      this.userInfo = userInfo;
    },
    async dispatchSignIn(msg: SignIn.SigninRequestData) {
      this.success = false;
      const route: string = NETWORK.LOGIN.LOGIN;
      const network: Network = Network.getInstance();
      // real token
      const next = (response: SignIn.GetSigninResponseData) => {
        console.log(response);
        if (response.code == 200) {
          this.setToken(response.token);
          this.setSuccess(true);
        } else {
          switch (response.code) {
            case 0:
              // code === 0 means failed
              this.setErrorMessage('failed');
              break;
            case 100000:
              // code === 100000 means Passed data exception
              this.setErrorMessage('Passed data exception');
              break;
            case 100001:
              // code === 100001 means The password does not meet the requirements
              this.setErrorMessage('The password does not meet the requirements');
              break;
            case 100002:
              // code === 100002 User account is locked
              this.setErrorMessage('User account is locked');
              break;
            case 101001:
              // code === 200 means Login data exception
              this.setErrorMessage('Login data exception');
              break;
            case 101002:
              // code === 200 means The login account or password is wrong
              this.setErrorMessage('The login account or password is wrong');
              break;
            case 101003:
              // code === 101003 means Login account does not exist
              this.setErrorMessage('Login account does not exist');
              break;
            case 102001:
              // code === 102001 means Failed to register data
              this.setErrorMessage('Failed to register data');
              break;
            case 102002:
              // code === 102002 means Registration data exception
              this.setErrorMessage('Registration data exception');
              break;
            case 102003:
              // code === 102003 means Registering an existing account is abnormal
              this.setErrorMessage('Registering an existing account is abnormal');
              break;
            case 103001:
              // code === 103001 means Abnormal nickname format (abnormal length or illegal identifier)
              this.setErrorMessage('Abnormal nickname format (abnormal length or illegal identifier)');
              break;
            case 103002:
              // code === 103002 means Nickname is the same as email
              this.setErrorMessage('Nickname is the same as email');
              break;
            case 103003:
              // code === 103003 means Email format exception (abnormal length or illegal identifier)
              this.setErrorMessage('Email format exception (abnormal length or illegal identifier)');
              break;
            case 103004:
              // code === 103004 means Phone format exception (abnormal length or illegal identifier)
              this.setErrorMessage('Phone format exception (abnormal length or illegal identifier)');
              break;
            case 103005:
              // code === 103005 means The same password needs to be changed
              this.setErrorMessage('The same password needs to be changed');
              break;
            case 103006:
              // code === 103006 means The current password is wrong
              this.setErrorMessage('The current password is wrong');
              break;
            case 103007:
              // code === 103007 means The emails that need to be modified are the same
              this.setErrorMessage('The emails that need to be modified are the same');
              break;
            case 103008:
              // code === 103008 means The message that needs to be modified is already taken
              this.setErrorMessage('The message that needs to be modified is already taken');
              break;
            case 103009:
              // code === 103009 means The avatar index that needs to be modified is wrong
              this.setErrorMessage('The avatar index that needs to be modified is wrong');
              break;
            case 103010:
              // code === 103010 means wrong birthday format
              this.setErrorMessage('wrong birthday format');
              break;
          }
        }
      }
      await network.sendMsg(route, msg, next, 1);
    },
    async dispatchSignUp(msg: SignUp.SignupRequestData) {
      this.success = false;
      const route: string = NETWORK.LOGIN.REGISTER;
      const network: Network = Network.getInstance();
      // real token
      const next = (response: SignUp.GetSignupResponseData) => {
        console.log(response);
        if (response.code == 200) {
          this.setToken(response.token);
          this.setSuccess(true);
        } else {
          switch (response.code) {
            case 0:
              // code === 0 means failed
              this.setErrorMessage('failed');
              break;
            case 100000:
              // code === 100000 means Passed data exception
              this.setErrorMessage('Passed data exception');
              break;
            case 100001:
              // code === 100001 means The password does not meet the requirements
              this.setErrorMessage('The password does not meet the requirements');
              break;
            case 100002:
              // code === 100002 User account is locked
              this.setErrorMessage('User account is locked');
              break;
            case 101001:
              // code === 200 means Login data exception
              this.setErrorMessage('Login data exception');
              break;
            case 101002:
              // code === 200 means The login account or password is wrong
              this.setErrorMessage('The login account or password is wrong');
              break;
            case 101003:
              // code === 101003 means Login account does not exist
              this.setErrorMessage('Login account does not exist');
              break;
            case 102001:
              // code === 102001 means Failed to register data
              this.setErrorMessage('Failed to register data');
              break;
            case 102002:
              // code === 102002 means Registration data exception
              this.setErrorMessage('Registration data exception');
              break;
            case 102003:
              // code === 102003 means Registering an existing account is abnormal
              this.setErrorMessage('Registering an existing account is abnormal');
              break;
            case 103001:
              // code === 103001 means Abnormal nickname format (abnormal length or illegal identifier)
              this.setErrorMessage('Abnormal nickname format (abnormal length or illegal identifier)');
              break;
            case 103002:
              // code === 103002 means Nickname is the same as email
              this.setErrorMessage('Nickname is the same as email');
              break;
            case 103003:
              // code === 103003 means Email format exception (abnormal length or illegal identifier)
              this.setErrorMessage('Email format exception (abnormal length or illegal identifier)');
              break;
            case 103004:
              // code === 103004 means Phone format exception (abnormal length or illegal identifier)
              this.setErrorMessage('Phone format exception (abnormal length or illegal identifier)');
              break;
            case 103005:
              // code === 103005 means The same password needs to be changed
              this.setErrorMessage('The same password needs to be changed');
              break;
            case 103006:
              // code === 103006 means The current password is wrong
              this.setErrorMessage('The current password is wrong');
              break;
            case 103007:
              // code === 103007 means The emails that need to be modified are the same
              this.setErrorMessage('The emails that need to be modified are the same');
              break;
            case 103008:
              // code === 103008 means The message that needs to be modified is already taken
              this.setErrorMessage('The message that needs to be modified is already taken');
              break;
            case 103009:
              // code === 103009 means The avatar index that needs to be modified is wrong
              this.setErrorMessage('The avatar index that needs to be modified is wrong');
              break;
            case 103010:
              // code === 103010 means wrong birthday format
              this.setErrorMessage('wrong birthday format');
              break;
          }
        }
      }
      await network.sendMsg(route, msg, next, 1);
    },
    async dispatchUserProfile() {
      this.success = false;
      const route: string = NETWORK.HOME_PAGE.USER_INFO;
      const network: Network = Network.getInstance();
      // real token
      const next = (response: User.GetUserInfoResponseData) => {
        console.log(response);
        if (response.code == 200) {
          this.setUserInfo(response.data);
          this.setSuccess(true);
        } else {
          switch (response.code) {
            case 0:
              // code === 0 means failed
              this.setErrorMessage('failed');
              break;
            case 100000:
              // code === 100000 means Passed data exception
              this.setErrorMessage('Passed data exception');
              break;
            case 100001:
              // code === 100001 means The password does not meet the requirements
              this.setErrorMessage('The password does not meet the requirements');
              break;
            case 100002:
              // code === 100002 User account is locked
              this.setErrorMessage('User account is locked');
              break;
            case 101001:
              // code === 200 means Login data exception
              this.setErrorMessage('Login data exception');
              break;
            case 101002:
              // code === 200 means The login account or password is wrong
              this.setErrorMessage('The login account or password is wrong');
              break;
            case 101003:
              // code === 101003 means Login account does not exist
              this.setErrorMessage('Login account does not exist');
              break;
            case 102001:
              // code === 102001 means Failed to register data
              this.setErrorMessage('Failed to register data');
              break;
            case 102002:
              // code === 102002 means Registration data exception
              this.setErrorMessage('Registration data exception');
              break;
            case 102003:
              // code === 102003 means Registering an existing account is abnormal
              this.setErrorMessage('Registering an existing account is abnormal');
              break;
            case 103001:
              // code === 103001 means Abnormal nickname format (abnormal length or illegal identifier)
              this.setErrorMessage('Abnormal nickname format (abnormal length or illegal identifier)');
              break;
            case 103002:
              // code === 103002 means Nickname is the same as email
              this.setErrorMessage('Nickname is the same as email');
              break;
            case 103003:
              // code === 103003 means Email format exception (abnormal length or illegal identifier)
              this.setErrorMessage('Email format exception (abnormal length or illegal identifier)');
              break;
            case 103004:
              // code === 103004 means Phone format exception (abnormal length or illegal identifier)
              this.setErrorMessage('Phone format exception (abnormal length or illegal identifier)');
              break;
            case 103005:
              // code === 103005 means The same password needs to be changed
              this.setErrorMessage('The same password needs to be changed');
              break;
            case 103006:
              // code === 103006 means The current password is wrong
              this.setErrorMessage('The current password is wrong');
              break;
            case 103007:
              // code === 103007 means The emails that need to be modified are the same
              this.setErrorMessage('The emails that need to be modified are the same');
              break;
            case 103008:
              // code === 103008 means The message that needs to be modified is already taken
              this.setErrorMessage('The message that needs to be modified is already taken');
              break;
            case 103009:
              // code === 103009 means The avatar index that needs to be modified is wrong
              this.setErrorMessage('The avatar index that needs to be modified is wrong');
              break;
            case 103010:
              // code === 103010 means wrong birthday format
              this.setErrorMessage('wrong birthday format');
              break;
          }
        }
      }
      await network.sendMsg(route, {}, next, 1, 4);
    },
    async dispatchUpdateUserInfo(data: any) {
      this.success = false;
      const route: string = NETWORK.HOME_PAGE.USER_CHANGE;
      const network: Network = Network.getInstance();
      // real token
      const next = (response: User.GetUserInfoResponseData) => {
        console.log(response);
        if (response.code == 200) {
          this.setSuccess(true);
        } else {
          switch (response.code) {
            case 0:
              // code === 0 means failed
              this.setErrorMessage('failed');
              break;
            case 100000:
              // code === 100000 means Passed data exception
              this.setErrorMessage('Passed data exception');
              break;
            case 100001:
              // code === 100001 means The password does not meet the requirements
              this.setErrorMessage('The password does not meet the requirements');
              break;
            case 100002:
              // code === 100002 User account is locked
              this.setErrorMessage('User account is locked');
              break;
            case 101001:
              // code === 200 means Login data exception
              this.setErrorMessage('Login data exception');
              break;
            case 101002:
              // code === 200 means The login account or password is wrong
              this.setErrorMessage('The login account or password is wrong');
              break;
            case 101003:
              // code === 101003 means Login account does not exist
              this.setErrorMessage('Login account does not exist');
              break;
            case 102001:
              // code === 102001 means Failed to register data
              this.setErrorMessage('Failed to register data');
              break;
            case 102002:
              // code === 102002 means Registration data exception
              this.setErrorMessage('Registration data exception');
              break;
            case 102003:
              // code === 102003 means Registering an existing account is abnormal
              this.setErrorMessage('Registering an existing account is abnormal');
              break;
            case 103001:
              // code === 103001 means Abnormal nickname format (abnormal length or illegal identifier)
              this.setErrorMessage('Abnormal nickname format (abnormal length or illegal identifier)');
              break;
            case 103002:
              // code === 103002 means Nickname is the same as email
              this.setErrorMessage('Nickname is the same as email');
              break;
            case 103003:
              // code === 103003 means Email format exception (abnormal length or illegal identifier)
              this.setErrorMessage('Email format exception (abnormal length or illegal identifier)');
              break;
            case 103004:
              // code === 103004 means Phone format exception (abnormal length or illegal identifier)
              this.setErrorMessage('Phone format exception (abnormal length or illegal identifier)');
              break;
            case 103005:
              // code === 103005 means The same password needs to be changed
              this.setErrorMessage('The same password needs to be changed');
              break;
            case 103006:
              // code === 103006 means The current password is wrong
              this.setErrorMessage('The current password is wrong');
              break;
            case 103007:
              // code === 103007 means The emails that need to be modified are the same
              this.setErrorMessage('The emails that need to be modified are the same');
              break;
            case 103008:
              // code === 103008 means The message that needs to be modified is already taken
              this.setErrorMessage('The message that needs to be modified is already taken');
              break;
            case 103009:
              // code === 103009 means The avatar index that needs to be modified is wrong
              this.setErrorMessage('The avatar index that needs to be modified is wrong');
              break;
            case 103010:
              // code === 103010 means wrong birthday format
              this.setErrorMessage('wrong birthday format');
              break;
          }
        }
      }
      await network.sendMsg(route, data, next, 1);
    },
    dispatchSignout() {
      this.removeToken();
    }
  }
})
