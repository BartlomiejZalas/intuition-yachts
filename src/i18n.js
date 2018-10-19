import i18n from "i18next";
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(reactI18nextModule)
  .init({
    fallbackLng: ["en"],
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: {
        translation: {
          page: { menu: 'Menu', title: "Application" },
          menu: { home: 'Home',  about: "About", contact: 'Contant' },
          pages: {
            home: {title: 'Home', content: 'Welcome on page!'},
            about: {title: 'About', content: 'Check our projects.', selected: 'Selected project'},
            contact: {title: 'Contact', content: 'Contact with us.'},
          }
        },
      },
      pl: {
        translation: {
          page: { menu: 'Nawigacja', title: "Aplikacja" },
          menu: { home: 'Strong Główna', about: "O nas", contact: 'Kontakt' },
          pages: {
            home: {title: 'Strona Główna', content: 'Witamy na stronie!'},
            about: {title: 'O Nas', content: 'Sprawdź nasze projekty.', selected: 'Wybrany projekt'},
            contact: {title: 'Kontakt', content: 'Skontaktuj się z nami.'},
          }
        },
      },
      it: {
        translation: {
          page: { menu: 'Pagiamo', title: "Titolinno" },
          menu: { home: 'Homio', contact: 'Contakto' }
        },
      },
    },
  })

export default i18n;