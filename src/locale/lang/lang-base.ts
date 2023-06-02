export type langType = {
  main: {
    signupButton: string,
    loginButton: string,
  },
  login: {
    formPage: {
      header: {
        titleLine1: string, 
        titleLine2: string,
      },
      button: string,
      forgetPassword: string,
      donthaveAccount: string,
      createOne: string,
    },
    forgotPasswordPage: {
      title: string,
      submit: string,
      notification: string,
    },
  }
  signup: {
    formPage: {
      header: {
        titleLine1: string,
        titleLine2: string,
      },
      emailAddress: string,
      password: string,
      validation: {
        email: {
          title: string,
          title2: string,
        },
        password: {
          items: [
            string,
            string,
            string,
            string,
          ]
        },
      },
      promoCode: string,
      agree: {
        prefix: string,
        bold: string,
        suffix: string,
      },
      alreadyAccount: string,
      signIn: string,
      button: string,
      divider: string,
    },
    confirmCancelPage: {
      title: string,
      description: string,
      continue: string,
      cancel: string,
    },
    alreadyRegisterPage: {
      title: string,
      confirm: string,
      cancel: string,
    },
    displayNamePage: {
      title: string,
      username: string,
      validation: {
        username: {
          title: string,
          items: [
            string,
            string,
          ]
        }
      },
      submit: string,
    },
  },
  navBar: {
    casino: string,
    sport: string,
    my_vip_perks: string,
    more: string,
    live_support: string,
    menu_item_1: {
      promotions: string,
      vip_club: string,
      affiliate: string,
      blog: string,
    },
    casino_sub_menu: {
      recently_played: string,
      favorites: string,
      game_originals: string,
      slots: string,
      live_casino: string,
    },
    language: {
      title: string,
      english: string,
      portuguese: string,
      espanola: string,
    },
    sound_mode: {
      on: string,
      off: string,
    }
  }
  rightBar: {
    dropdownItem: {
      casino: string,
      sport: string
    }
    bottom: {
      yourMessage: string
    }
  }
  home: {
    search: string
    button: {
      lobby: string
      popular: string
      slots: string
      live_casino: string
      blue_originals: string
    }
    original_games: string
  }
};