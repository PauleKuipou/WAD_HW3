Vue.component("header-component", {
  template:
    /*html*/
    `
        <header>
        <nav>
            <div>
                <img class="calendar" src="./photos/calendar-icon.png" alt="Calendar icon">
            </div>
            <div class="search-container">
                <input type="text">
                <button>Search</button>
            </div>
            <div id="account">
                <input class="userImg" type="image" src="./photos/account.png"  id="userButton" alt="user"/>
            </div>
            <br>
            
        </nav>
    
        <div class="navigation-links">
            <router-link to="/home">home</router-link>
            <router-link to="/contact">contact</router-link>
            <router-link to="/about">About</router-link>
        </div>

        
    </header>
        `,

  data() {
    return {};
  },

  methods: {},

  computed: {},
});
