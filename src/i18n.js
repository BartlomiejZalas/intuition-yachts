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
          menu: {
            about: "About",
            projects: "Projects",
            services: {
              services: "Services",
              yachts: "Yachts",
              inside: "Interior Desing",
              models3d: "3D Models",
              technicaldrawings: "Technical Drawing"
            },
            partners: "Partners",
            contact: "Contact"
          },
          pages: {
            about: { title: 'About', content: 'About us.' },
            projects: { title: 'Projects' },
            yachts: { title: 'Yachts', 
              tram: {
                name: "CAT B-16", 
                description: "A conceptual water-tram project. It is a 16-meter catamaran designed for transporting 50 people."
              }, 
              eco14: {
                name: "ECO-14",
                description: ""
              },
              yacht: {
                name: "Yacht",
                description: "Lorem ipsum dolor sit amet."
              }
            },
            interiorDesgin: { title: 'Interior Desgin' },
            models3D: { title: '3D Models' },
            technicalDrawings: { title: 'Technical Drawings' },
            partners: { title: 'Partners' },
            contact: { title: 'Contact', content: 'Contact with us.' },
            dummy: { content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsum dolor quam.' },
          }
        },
      },
      pl: {
        translation: {
          menu: {
            about: "O Nas",
            projects: "Projekty",
            services: {
              services: "Usługi",
              yachts: "Jachty",
              inside: "Projektowanie wnętrz",
              models3d: "Modelowanie 3D",
              technicaldrawings: "Rysunki Techniczne"
            },
            partners: "Partnerzy",
            contact: "Kontakt"
          },
          pages: {
            about: { title: 'O Nas', content: 'About us.' },
            projects: { title: 'Projekty' },
            yachts: { title: 'Jachty', 
              tram: {
                name: "CAT B -16", 
                description: "Koncepcyjny projekt tramwaju wodnego. Jest nim 16-metrowy katamaran przeznaczony do transportu 50 osób."
              }, 
              eco14: {
                name: "ECO-14",
                description: ""
              },
              yacht: {
                name: "Yacht",
                description: "Lorem ipsum dolor sit amet."
              }
            },
            interiorDesgin: { title: 'Projektowanie Wnętrz' },
            models3D: { title: 'Modele 3D' },
            technicalDrawings: { title: 'Rysunki Techniczne' },
            partners: { title: 'Partnerzy' },
            contact: { title: 'Kontakt', content: 'Contact with us.' },
            dummy: { content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsum dolor quam.' },
          }
        },
      },
    },
  })

export default i18n;