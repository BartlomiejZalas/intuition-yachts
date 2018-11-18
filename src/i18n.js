import i18n from "i18next";
import { reactI18nextModule } from 'react-i18next';

i18n
  .use(reactI18nextModule)
  .init({
    fallbackLng: ["en"],
    interpolation: {
      escapeValue: false,
    },
    lng: 'pl',
    resources: {
      en: {
        translation: {
          menu: {
            about: "About",
            projects: "Projects",
            services: "Services",
            partners: "Partners",
            contact: "Contact"
          },
        },
      },
      pl: {
        translation: {
          menu: {
            about: "O Nas",
            projects: "Projekty",
            services: "Usługi",
            partners: "Partnerzy",
            contact: "Kontakt"
          },
          pages: {
            about: {
              title: 'O Nas', content: `
            <p>Intuition Yachts jest to działalność założona przez 
            absolwentkę Wydziału Oceanotechniki i Okrętownictwa Politechniki Gdańskiej - Martę Annę 
            Zawadzką.</p>

            <p>Dzięki pasji, wykształceniu oraz zdobytemu doświadczeniu możemy zaoferować Państwu 
            profesjonalne usługi przy użyciu najlepszej jakości sprzętu oraz specjalistycznemu 
            oprogramowaniu. Używamy programów takich jak: AutoCAD, Rhinoceros,  V-Ray, 
            Flamingo, Orca 3D, SSC oraz MultiSurf.</p>
            
            <p>Dzięki zdobywaniu doświadczenia zaróno w kraju jak i za granicą jesteśmy w stanie spełnić 
            wymagania różnego rodzaju klientów, oferując przy tym szeroki pakiet usług.</p>
            
            <p>Projekty realizujemy na terenie Polski oraz za granicą w zależności od wymagań klienta.
            <br>
            Część wykonanych projektów podczas zdobywania doświadczenia można obejrzeć w naszym Portfolio:</p>
            
            <a href="#">TU BĘDZIE PDF DO ŚCIĄGNIĘCIA</a>` },
            services: {
              title: 'Usługi', content: `
            <ul>
              <li>Projekty koncepcyjne jednostek pływających</li>
              <li>Stylizacje zewnętrzne</li>
              <li>Projekty wnętrz</li>
              <li>Rysunki techniczne</li>
              <li>Wizualizacje 3d</li>
              <li>Modelowanie 3d</li>
            </ul>
            <p>Jesteśmy gotowi stworzyć dla Państwa zarówno sam projekt koncepcyjny jak również w pełni go 
            realizować. Nasze usługi obejmują wszystko, począwszy od stylizacji zewnętrznej, aż po czystą 
            architekturę morską, przy użyciu najwyższej technologii.</p>
            <p>Wierzymy, że w pełni zaangażowany i odpowiedzialny zespół, potrafi przekroczyć oczekiwania klienta. </p>
            <p>Wszystkie usługi wykonujemy za pomocą specjalistycznego oprogramowania takiego jak, AutoCAD, 
            Rhinoceros,  V-Ray, Flamingo, Orca 3D oraz MultiSurf. </p>
            ` },
            projects: {
              title: 'Projekty',
              more: 'więcej',
              yachts: {
                title: 'Jachty',
                eco14: {
                  name: 'ECO-14',
                  shortDescription: `ECO-14 jest to projekt koncepcyjny ekologicznego jachtu motorowego o napędzie 
                  elektrycznym.  Głównymi założeniami tej jednostki była rekreacyjna żegluga na drogach śródlądowej 
                  i przybrzeżnych, czteroosobowej załogi.`,
                  description: `<p>ECO-14 jest to projekt koncepcyjny ekologicznego jachtu motorowego o napędzie 
                  elektrycznym.  Głównymi założeniami tej jednostki była rekreacyjna żegluga na drogach śródlądowej 
                  i przybrzeżnych, czteroosobowej załogi. Współautorami projektu jest Marta Zawadzka i Julisz 
                  Strawiński. </p>
                  <p>Ponadto wykonano cztery różne aranżacje wnętrz w następujących wariantach:</p>
                  <ol>
                    <li> Jacht turystyczny, rodzinny prywatny dla 4-osobowej załogi (2 dorosłych i 2 dzieci); </li>
                    <li> Jacht czarterowy dla 6-osobowej załogi; </li>
                    <li> Jacht przystosowany do żeglugi osób niepełnosprawnych; </li>
                    <li> Jacht konferencyjny dla 12-osobowej załogi. </li>
                  </ol>
                  
                  <p>Pierwsza koncepcja projektu jest skonczona i gotowa do realizacji lub też może być odpowiednio 
                  dostosowana do potrzeb i wymagać klienta.</p>
                  
                  <p>Aktualnie trwają prace nad następną wersją kształtu kadłuba oraz stylizacją zewnętrznej.</p>
                  `
                },
                catb6: {
                  name: 'CAT B -16',
                  shortDescription: `Koncepcyjny projekt tramwaju wodnego. Jest nim 16-metrowy katamaran 
                  przeznaczony do transportu 50 osób.`,
                  description: `Koncepcyjny projekt tramwaju wodnego. Jest nim 16-metrowy katamaran przeznaczony 
                  do transportu 50 osób.`
                }
              }
            },
            partners: {
              title: 'Partnerzy', content: `
            <h2>Partnerzy</h2>
            <p class="py-2">
            <img src="{{partner1Logo}}" alt="" title="Yacht Studio Strawiński S.C."/>
            </p>
            <h2>Rekomendacje</h2>
            <ul>
              <li>Julisz Strawiński</li>
              <li>Sebastian Allebrodt</li>
              <li>Javier Jaudenes</li>
            </ul>
            ` },
            contact: {
              title: 'Kontakt',
              contactdata: 'Dane kontaktowe',
              contactform: 'Formularz kontaktowy',
              form: {
                name: 'Imię i Nazwisko',
                email: 'Email',
                subject: 'Temat',
                message: 'Wiadomość',
                send: 'Wyślij'
              },
              content: `
            <p>
              <strong>Polska</strong><br/>
              Sokółki 63<br/>
              19-420 Kowale Oleckie<br/>
              tel.: +48 <br/>
              E-mail: 
            </p>
            <p>
              <strong>Hiszpania</strong><br/>
              C/ Miquel Angel Riera 16/6A<br/>
              07004 Palma de Mallorca<br/>
              tel.: +34 604 331 861
            </p>
            ` },
            dummy: { content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsum dolor quam.' },
          }
        },
      },
    },
  })

export default i18n;