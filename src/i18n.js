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
          pages: {
            about: {
              title: 'About Us', content: `
                <p>Every story has its beginning. Intuition Yachts is based on the passion for yachts, which began in 2012. At the time, the founder of the company during education came across the yacht called "Intuition" and its main designer, the famous Juliusz Strawiński. He took her under his wing and infected with his passion for design.</p>
                <p>After years of learning, the company is ready to meet the customers' needs by providing complex design and modelling services.</p>
                <p>The mission and the biggest dream of the organization is that each designed yacht becomes a yacht traversing the waters of the world. Will it be your yacht?</p>
                <p>Our team consists of experienced engineers with a wide range of technical knowledge and extraordinary creativity. As a result, we are able to match the team of professionals to the needs of the client, to meet even the most complicated projects. Our engineers can also support our client during prefabrication as a supervisor. Both during the new construction and during the reconstruction of the boats.</p>
                <p>Trust us and let us know each other. Below you will find our portfolio:</p>
                <p><a href="/downloads/Portfolio-MartaAnnaZawadzka-05.02.2018.pdf">Intuition Yachts - Portfolio.pdf</a></p>
                <p>Marta Anna Zawadzka - founder of "Intuition Yachts". She won two titles at Gdańsk University of Technology in the field of design and management in the maritime economy. Yachts are her hobby and at the same time work. She completed numerous professional experience both at home and abroad in such companies as, among others: Gdynia Shipyard SA, Polish Chamber of Maritime Economy, PRS, Surge Projects and in particular Yacht Studio Strawiński.</p>
                <p>To broaden her horizons, she moved to one of the European yacht capitals - Majorca. She gained experience in a company managing yacht construction projects, and then she tried her hand at designing their interiors. Thanks to these experiences, she expressed her sense of style and developed a passion for elegant and luxurious interior decorations.</p>
                <p>The passion for sailing and the hours spent at sea allow Marta to get to know individual yachts from the user's side. As a result, the designs are not only well-thought-out visually and technically, but also aim at ergonomics and continuous improvement of standard solutions.</p>
              `
            },
            projects: {
              title: 'Projects',
              more: 'more',
              yachts: {
                title: 'Yachts',
                'canna': {
                  name: 'CANNA',
                  shortDescription: 'This is a project of a 5.5-meter long runabout. Details of construction will be revealed soon. Moreover building of the prototype will also start soon.',
                  description: 'This is a project of a 5.5-meter long runabout. Details of construction will be revealed soon. Moreover building of the prototype will also start soon'
                },
                'hb-12': {
                  name: 'HB-12',
                  shortDescription: 'HB-12 is the concept of a 12-meter electric catamaran that works as a houseboat.',
                  description: 'HB-12 is the concept of a 12-meter electric catamaran that works as a houseboat. If you dream about a house on the water, but you want it to look like a yacht, this concept is just for you. Our design studio is a supporter of electric drives and solar panels, which is why this catamaran has been designed so as not to pollute our environment. In addition, we have proposed 4 different interior arrangements to show how many spatial planning possibilities each space brings. External stylization is just an example, because our designs are made according to the wishes and visualization of the client. Contact us and we will design an individual project for you. We make non-binding, free concepts.'
                },
                'eco14-private': {
                  name: 'Private tourist and family yacht for a 4-crew members',
                  description: `
                  <p>A concept created for a peaceful, recreational family vacation. The interior is designed so that each member of the crew can enjoy their own, comfortable space. Consists of:</p>
                  <ul>
                  <li>wheelhouse</li>
                  <li>salon</li>
                  <li>galley</li>
                  <li>double cabin </li>
                  <li>twin cabin</li>
                  <li>bathroom</li>
                  <li>small bow deck</li>
                  <li>large stern deck</li>
                  </ul>
                  `
                },
                'eco14-charter': {
                  name: 'Charter yacht for a 6-crew members',
                  description: `
                  <p>The interior is designed based on the possibility of yacht charter for comfortable recreational tourism. A six-person crew can rest on a yacht equipped with:
                  <ul>
                  <li>wheelhouse</li>
                  <li>salon</li>
                  <li>galley</li>
                  <li>bathroom</li>
                  <li>small bow deck</li>
                  <li>large stern deck</li>
                  </ul>
                  `
                },
                'eco14-for-disabled': {
                  name: 'Yacht adapted for the navigation of disabled persons',
                  description: `
                  <p>Nowadays it is becoming more and more popular to adapt the environment to easy use, from all resources, by people with disabilities. This also applies to sailing. Therefore, this task was also undertaken in our Studio. The concept of interior arrangement for disabled people intended for day sailing for a crew of 6 was designed. It consists of:
                  <ul>
                  <li>wheelhouse</li>
                  <li>salon</li>
                  <li>galley</li>
                  <li>bathroom</li>
                  <li>small bow deck</li>
                  <li>large stern deck</li>
                  </ul>
                  `
                },
                'eco14-conference': {
                  name: 'Conference yacht for a crew of 12 people',
                  description: `
                  <p>Until recently, untypical concept of the boat was a conference yacht intended for corporate business meetings. Due to the fact that it is becoming more and more popular, our Studio decided to present interior design for conference purposes for a crew of 12 people. It consists of:
                  <ul>
                  <li>wheelhouse</li>
                  <li>salon/conference room</li>
                  <li>galley</li>
                  <li>bathroom</li>
                  <li>small bow deck</li>
                  <li>large stern deck</li>
                  </ul>
                  `
                },
                eco14: {
                  name: 'ECO-14',
                  menuDescription: 'Four different interior designs were made for the first concept:',
                  "menu-eco14-private": 'Private tourist and family yacht for a 4-crew members;',
                  "menu-eco14-charter": 'Charter yacht for a 6-crew members;',
                  "menu-eco14-for-disabled": 'Yacht adapted for the navigation of disabled persons;',
                  "menu-eco14-conference": 'A conference yacht for a crew of 12 people.',
                  shortDescription: `ECO-14 is a conceptual design of a 14-meter ecological motor yacht with electric drive system. The main assumptions are recreational sailing on inland and coastal waters. The co-authors of the project are: Marta Zawadzka and Juliusz Strawiński.`,
                  description: `
                  <p>ECO-14 is a conceptual design of a 14-meter ecological motor yacht with electric drive system. The main assumptions are recreational sailing on inland and coastal waters. The co-authors of the project are: Marta Zawadzka and Juliusz Strawiński.</p>
                  <p>At least two concepts are planned that differ in the shape of the hull and external styling. The "ECO-14" line was created with the thought of sailing in comfortable conditions. Thanks to the specially selected electric drive system, silent vibration-free operation of the engine is possible, and the lack of exhaust emissions allows reaching the innermost corners of the world protected by the environment.</p>
                  <p>The first design concept is finished and ready for implementation. However, it can also be adapted to the needs and requirements of the client.</p>
                  <p>The yacht has easy access to the interior of the superstructure from both the bow deck and the aft deck. The stern deck offers a huge space for comfortable sitting on sofas at tables or sunbathing. It is also possible to eat meals outdoors with an additional folding table and storage chairs in the hold under the stern deck.</p>
                  <p>Work on the next version of the shape of the hull and external stylization is currently in progress.</p>
                  `
                }
              }
            },
            services: {
              title: 'Services', content: `
              <p>Conceptual designs of boats and consultations regarding to the selection of the vessel</p>
              <p>Exterior styling</p>
              <p>Interior designs</p>
              <p>Technical drawings</p>
              <p>3D visualizations</p>
              <p>3D modelling</p>
              <p>Classification and working designs according to the requirements of any classification society and standards related to European Community directives</p>
              <p>Technical expertise</p>
              <p>Professional consultancy for companies and private shipowners</p>
              <p>Brokerage on the circulation of vessels, equipment and modern techniques</p>
              <p>Shipowner supervision during the construction of the vessel</p>
              <p>We are ready to create both a conceptual project for you as well as fully implement it. Our services cover everything from external styling to pure sea architecture using the highest technology.</p>
              <p>We believe that a fully committed and responsible team can exceed customer expectations.</p>
              <p>All services are performed using specialized software such as AutoCAD, Rhinoceros, V-Ray, Flamingo, Orca 3D, MultiSurf and SSC.</p>
              `
            },
            partners: {
              title: 'Partners', 
              content: `
              <p>
              <a href="http://www.yacht-studio.pl/pl-index.html" target="_blank">
                <img src="{{partner1Logo}}" alt="Yacht Studio Strawiński" title="Yacht Studio Strawiński S.C."/>
              </a>
              </p>
              <p>Yacht Studio Strawiński is an independent design company specializing in individual custom yacht projects. It has existed since 1981. Our cooperation with Yacht Studio Strawiński has been going on almost continuously since 2012. At that time, we have developed some conceptual projects together. We also supported the implementation of the Yacht Studio Strawiński projects.</p>
              `,
              seacon: `
              <p>
              <a href="http://seacon.com.pl" target="_blank">
                <img src="{{logo}}" alt="Seacon" title="Seacon"/>
              </a>
              </p>
              <p>Created with passion for shipbuilding, Seacon Engineering is an independent design office located in Gdańsk – the heart of Polish shipbuilding industry.
              Together with Seacon, we are creating a new project that will be the beginning of a new brand and we hope that it will conquer international yacht market.
              </p>`
            },
            contact: {
              title: 'Contact',
              contactdata: 'Contact Details',
              contactform: 'Contact Form',
              sendMessageError: 'ERROR: Message has not been sent',
              sendMessageSuccess: 'Your message has been sent. Thank you.',
              form: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                send: 'Send'
              },
              content: `
              <p>
              <strong>Poland</strong><br>
              Sokółki 63<br>
              19-420 Sokółki<br>
              mobile: +48 500 204 025<br>
              e-mail: marta@intuition-yachts.com
              </p>

              <p>
              <strong>Spain</strong><br>
              C/ Miquel Angel Riera 16/6A<br>
              07004 Palma de Mallorca<br>
              mobile: +34 604 331 861<br>
              e-mail: studio@intuition-yachts.com
              </p>
            ` },
          }
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
              <p>Każda historia ma swój początek. Intuition Yachts swoją historię opiera na pasji do jachtów, która rozpoczęła się w 2012 roku. W tym właśnie czasie założycielka firmy podczas edukacji natknęła się na jednostkę „Intuition” i jej głównego projektanta, słynnego Juliusza Strawińskiego. Przyjął ją pod swoje skrzydła i zaraził niesłabnącą pasją do projektowania.</p>
              <p>Po latach nauki, firma gotowa jest aby samodzielnie spełniać potrzeby klientów przez świadczenie kompleksowych usług projektowania i modelowania.</p>
              <p>Misją i największym marzeniem organizacji jest to, aby każdy zaprojektowany jacht został jednostką przemierzającą wody świata. Czy będzie to Twój jacht?</p>
              <p>Nasz zespół składa się z doświadczonych inżynierów o szerokim zakresie wiedzy technicznej i nietuzinkowej kreatywności. W rezultacie jesteśmy w stanie dopasować zespół profesjonalistów do potrzeb klienta, tak aby sprostać nawet najbardziej skomplikowanym projektom. Nasi inżynierowie mogą również wspierać naszego klienta podczas prefabrykacji jako nadzór. Zarówno podczas nowej budowy, jak i podczas przebudowy jednostek.</p>
              <p>Zaufaj nam i pozwól nam się poznać. Poniżej znajdziesz nasze portfolio:</p>
              <p><a href="/downloads/Portfolio-MartaAnnaZawadzka-05.02.2018.pdf">Intuition Yachts - Portfolio.pdf</a></p>
              <p>Marta Anna Zawadzka - założycielka „Intuition Yachts”. Zdobyła dwa tytuły na Politechnice Gdańskiej z zakresu projektowania oraz zarządzania w gospodarce morskiej. Jachty są jej hobby i zarazem pracą. Odbyła liczne praktyki zawodowe zarówno w kraju jak i za granicą w takich firmach jak m.in.: Stocznia Gdynia S.A., Krajowa Izba Gospodarki Morskiej, PRS, Surge-projects i w szczególności Yacht Studio Strawiński.</p>
              <p>Aby poszerzyć horyzonty, przeniosła się do jednej z europejskich stolic jachtów - Majorki. Zdobyła tam doświadczenie w firmie zarządzającej projektami budowy jachtów, a następnie próbowała swoich sił w projektowaniu ich wnętrz. Dzięki tym doświadczeniom dała wyraz swojemu wyczuciu stylu oraz rozwinęła zamiłowanie do eleganckich i luksusowych wystrojów wnętrz.</p>
              <p>Pasja do żeglowania i spędzone dzięki temu godziny na morzu pozwalają Marcie poznawać poszczególne jednostki od strony użytkownika. Dzięki temu projekty są nie tylko przemyślane wizualnie i technicznie, ale mają również na celu ergonomię oraz ciągłe doskonalenie standardowo stosowanych rozwiązań.</p>
            ` },
            services: {
              title: 'Usługi', content: `
              <p>Projekty koncepcyjne jednostek pływających oraz konsultacje w zakresie wyboru jednostki</p>
              <p>Stylizacje zewnętrzne</p>
              <p>Projekty wnętrz</p>
              <p>Rysunki techniczne</p>
              <p>Wizualizacje 3D</p>
              <p>Modelowanie 3D</p>
              <p>Projekty klasyfikacyjne i robocze wg wymogów dowolnej instytucji klasyfikacyjnej i norm związanych z dyrektywami Wspólnoty Europejskiej</p>
              <p>Ekspertyzy techniczne</p>
              <p>Doradztwo profesjonalne dla firm i armatorów prywatnych</p>
              <p>Pośrednictwo w sprawie obrotu jednostek pływających, elementów wyposażenia i nowoczesnych technik</p>
              <p>Nadzór armatorski w okresie budowy jednostki</p>
              <p>Jesteśmy gotowi stworzyć dla Państwa zarówno sam projekt koncepcyjny jak również w pełni go realizować. Nasze usługi obejmują wszystko, począwszy od stylizacji zewnętrznej, aż po czystą architekturę morską, przy użyciu najwyższej technologii.</p>
              <p>Wierzymy, że w pełni zaangażowany i odpowiedzialny zespół, potrafi przekroczyć oczekiwania klienta.</p>
              <p>Wszystkie usługi wykonujemy za pomocą specjalistycznego oprogramowania takiego jak, AutoCAD, Rhinoceros, V-Ray, Flamingo, Orca 3D, MultiSurf oraz SSC.</p>
            ` },
            projects: {
              title: 'Projekty',
              more: 'więcej',
              yachts: {
                title: 'Jachty',
                'canna': {
                  name: 'CANNA',
                  shortDescription: 'Jest to projekt 5,5-metrowej łodzi motorowej, której szczegóły zostaną ujawnione wkrótce. Już niedługo rusza również budowa prototypu. ',
                  description: 'Jest to projekt 5,5-metrowej łodzi motorowej, której szczegóły zostaną ujawnione wkrótce. Już niedługo rusza również budowa prototypu. '
                },
                'hb-12': {
                  name: 'HB-12',
                  shortDescription: 'HB-12 to koncepcja 12-metrowego katamaranu o napędzie elektrycznym, pełniącego funkcję houseboat’a.',
                  description: 'HB-12 to koncepcja 12-metrowego katamaranu o napędzie elektrycznym, pełniącego funkcję houseboat’a. Jeśli marzysz o domie na wodzie, ale chcesz, żeby przypominał on z wyglądu jacht to, ta koncepcja jest właśnie dla ciebie. Nasze studio projektowe jest zwolennikiem napędów elektrycznych oraz paneli fotowoltaicznych, dlatego też jednostka została tak zaprojektowana, aby nie zanieczyszczać środowiska. Ponadto zaproponowaliśmy 4 różne aranżację wnętrza, aby pokazać jak wiele możliwości rozplanowania przestrzennego niesie ze sobą każda powierzchnia. Stylizacja zewnętrzna jest tylko przykładem, bo nasze projekty są wykonywane zgodnie z życzeniami i wizualizacją klienta. Zgłoś się do nas, a zaprojektujemy specjalnie dla ciebie indywidualny projekt. Wykonujemy niezobowiązujące, darmowe koncepcje.'
                },
                'eco14-private': {
                  name: 'Jacht prywatny turystyczno-rodzinny dla 4-osobowej załogi',
                  description: `
                  <p>Koncepcja stworzona z myślą o spokojnym, rekreacyjnym wypoczynku rodzinnym. Wnętrze zaprojektowane tak, aby każdy z członków załogi mógł cieszyć się własną, komfortową przestrzenią.</p>
                  <p>Składa się z:</p>
                  <ul>
                  <li>sterówki</li>
                  <li>salonu</li>
                  <li>kuchni</li>
                  <li>kabiny dwuosobowej z podwójnym łóżkiem</li>
                  <li>kabiny dwuosobowej z dwoma łóżkami</li>
                  <li>łazienki</li>
                  <li>małego pokładu dziobowego </li>
                  <li>dużego pokładu rufowego </li>
                  </ul>
                  `
                },
                'eco14-charter': {
                  name: 'Jacht czarterowy dla 6-osobowej załogi',
                  description: `
                  <p>Wnętrze zaprojektowane w oparciu o umożliwienie czarteru jachtu do komfortowej turystyki rekreacyjnej. Sześcioosobowa załoga może wypocząć na jachcie wyposażonym w:</p>
                  <ul>
                  <li>sterówkę</li>
                  <li>salon</li>
                  <li>kuchnię</li>
                  <li>łazienkę</li>
                  <li>mały pokład dziobowy </li>
                  <li>duży pokład rufowy </li>
                  </ul>
                  `
                },
                'eco14-for-disabled': {
                  name: 'Jacht przystosowany do żeglugi osób niepełnosprawnych',
                  description: `
                  <p>W dzisiejszych czasach coraz bardziej popularne stało się przystosowywanie środowiska do łatwego korzystania, ze wszystkich zasobów, przez osoby niepełnosprawne. Odnosi się to również do żeglugi. Dlatego, też w naszym studio podjęto się tego zadania. Zaprojektowano koncepcję aranżacji wnętrza dla osób niepełnosprawnych przeznaczoną do żeglugi dziennej dla 6-osobowej załogi. W jej skład wchodzi:</p>
                  <ul>
                  <li>sterówka</li>
                  <li>salon</li>
                  <li>kuchnia</li>
                  <li>łazienka</li>
                  <li>mały pokład dziobowy</li>
                  <li>duży pokład rufowy </li>
                  </ul>
                  `
                },
                'eco14-conference': {
                  name: 'Jacht konferencyjny dla 12-osobowej załogi',
                  description: `
                  <p>Do niedawna nietypową koncepcją jednostki był jacht konferencyjny przeznaczony do firmowych spotkań biznesowych. Ze względu na to, iż staje się to coraz bardziej popularne, w naszym Studio zdecydowano się na przedstawienie projektu aranżacji wnętrza do celów konferencyjnych dla 12-osobowej załogi.  Składa się on z:</p>
                  <ul>
                  <li>sterówki</li>
                  <li>salonu konferencyjnego</li>
                  <li>kuchni</li>
                  <li>łazienki</li>
                  <li>małego pokładu dziobowego </li>
                  <li>dużego pokładu rufowego </li>
                  </ul>
                  `
                },
                eco14: {
                  name: 'ECO-14',
                  menuDescription: 'Dla pierwszej koncepcji wykonano cztery różne aranżacje wnętrz:',
                  "menu-eco14-private": 'Jacht prywatny turystyczno-rodzinny dla 4-osobowej załogi;',
                  "menu-eco14-charter": 'Jacht czarterowy dla 6-osobowej załogi;',
                  "menu-eco14-for-disabled": 'Jacht przystosowany do żeglugi osób niepełnosprawnych; ',
                  "menu-eco14-conference": 'Jacht konferencyjny dla 12-osobowej załogi.',
                  shortDescription: `ECO-14 jest to projekt koncepcyjny 14-metrowego ekologicznego jachtu motorowego o napędzie elektrycznym. Głównymi założeniami jednostki jest rekreacyjna żegluga na drogach śródlądowych i przybrzeżnych. Współautorami projektu są: Marta Zawadzka i Juliusz Strawiński. `,
                  description: `
                  <p>ECO-14 jest to projekt koncepcyjny 14-metrowego ekologicznego jachtu motorowego o napędzie elektrycznym. Głównymi założeniami jednostki jest rekreacyjna żegluga na drogach śródlądowych i przybrzeżnych. Współautorami projektu są: Marta Zawadzka i Juliusz Strawiński. </p>
                  <p>Przewidziane są przynajmniej dwie koncepcje różniące się kształtem kadłuba oraz stylizacją zewnętrzną. Linia „ECO-14” stworzona zos­tała z myślą o żegludze w komfortowych warunkach. Dzięki specjalnie dobranemu elektrycznemu systemowi napędowi, możliwa jest cicha bezwibracyjna praca silnika, a brak emisji spalin pozwala na dotarcie do najskrytszych zakątków świata objętych ochroną środowis­ka.</p>
                  <p>Pierwsza koncepcja projektu jest skończona i gotowa do realizacji. Aczkolwiek może też być odpowiednio dostosowywana do potrzeb i wymagań klienta.</p>
                  

                  <p>Jacht posiada łatwy dostęp do wnętrza nadbudówki zarówno z pokładu dziobowego, jak i rufowego. Pokład rufowy oferuje ogromną przestrzeń umożliwiającą wygodne siedzenie na sofach przy stolikach lub opalanie się. Możliwe jest również spożywanie posiłków na zewnątrz przy dodatkowym rozkładanym stole i krzesłach magazynowanych w ładowni pod pokładem rufowym.</p>
                  <p>Aktualnie trwają prace nad następną wersją kształtu kadłuba oraz stylizacją zewnętrzną.</p>                 
                  `
                }
              }
            },
            partners: {
              title: 'Partnerzy', content: `
              <p>
              <a href="http://www.yacht-studio.pl/pl-index.html" target="_blank">
                <img src="{{partner1Logo}}" alt="Yacht Studio Strawiński" title="Yacht Studio Strawiński S.C."/>
              </a>
              </p>
              <p>Yacht Studio Strawiński - niezależna firma projektowa powstała w 1981r. z siedzibą w Sopocie. Specjalizuje się w projektach indywidualnych, wykonywanych pod zamówienie klienta. Nasza współpraca trwa od 2012r. W tym czasie opracowane zostały wspólne projekty koncepcyjne. Oprócz tego wspieraliśmy również realizację projektów autorskich Yacht Studio Strawiński.</p>
              `,
              seacon: `
              <p>
              <a href="http://seacon.com.pl" target="_blank">
                <img src="{{logo}}" alt="Seacon" title="Seacon"/>
              </a>
              </p>
              <p>Seacon Engineering to niezależne biuro projektowe zlokalizowane w Gdańsku, sercu polskiego przemysłu stoczniowego, stworzone z pasji do budownictwa okrętowego.
              Wraz z firmą Seacon tworzymy nowy projekt, który będzie początkiem nowej marki i mamy nadzieję, że podbije zarówno polski rynek jachtowy jak i międzynarodowy.
              
              </p>` },
            contact: {
              title: 'Kontakt',
              contactdata: 'Dane kontaktowe',
              contactform: 'Formularz kontaktowy',
              sendMessageError: 'BŁĄD: Wiadomośc nie została wysłana.',
              sendMessageSuccess: 'Wiadomość wysłana. Dziękujemy.',
              form: {
                name: 'Imię i Nazwisko',
                email: 'Email',
                subject: 'Temat',
                message: 'Wiadomość',
                send: 'Wyślij'
              },
              content: `
              <p>
              <strong>Polska</strong><br>
              Sokółki 63<br>
              19-420 Sokółki<br>
              tel.: +48 500 204 025<br>
              e-mail: marta@intuition-yachts.com
              </p>
              
              <p>
              <strong>Hiszpania</strong><br>
              C/ Miquel Angel Riera 16/6A<br>
              07004 Palma de Mallorca<br>
              tel.: +34 604 331 861<br>
              e-mail: studio@intuition-yachts.com
              </p>
            ` },
            dummy: { content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel lectus. Ut sagittis, ipsum dolor quam.' },
          }
        },
      },
    },
  })

export default i18n;