// import AuthLogo from './extensions/my-logo.png';
import MenuLogo from './extensions/logo1.svg';
// import favicon from './extensions/favicon.ico';
export default {
    config: {
        // Replace the Strapi logo in auth (login) views
        // auth: {
        //     logo: AuthLogo,
        // },
        // Replace the favicon
        // head: {
        //     favicon: favicon,
        // },
        // Replace the Strapi logo in the main navigation
        menu: {
            logo: MenuLogo,
        },
        // Override or extend the theme
        theme: {
            colors: {
                // primary100: '#f6ecfc',
                // primary200: '#e0c1f4',
                // primary500: '#ac73e6',
                // primary600: '#9736e8',
                // primary700: '#8312d1',
                // danger700: '#b72b1a'
            },
        },
        locales: [
            'pt-BR',
        ],
        translations: {
            pt: {
                'Auth.form.email.label': 'test',
                Users: 'Utilisateurs',
                City: 'Portuguese (Brazil)',
                Id: 'pt-BR',
            },
        },
    },
    bootstrap(app) {
        console.log(app);
    },
};
