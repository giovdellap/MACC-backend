## TODO
  - Position Fragment
    - Scaffolding - OK
    - Passare dati local - OK
    - Prendere dati local - OK
    - Chiamata GET Immagine
    - Vedere immagine



## TASK
- backend:
  - add position
    - salvataggio DB - OK
    - image - OK
  - location list - OK
  
- App:
  - Projects list
    - Aggiungere click elemento lista - OK
    - Refactoring card
  - Navigazione project
    - Chiamata GET a getproject/locationlist - OK
  - Location List
    - Vedere lista - OK
    - Refactoring card
  - Project Map
    - Integrare google maps - OK
    - Far vedere i puntini - OK
  - New position
    - GPS - OK
    - Chiamata REST - OK
  - Camera Fragment
    - Camera
      - Orientazione da aggiustare
    - Salvare foto: OK
  - Preview Fragment
    - Vedere foto - OK
    - Mandare foto: OK
  - Position Fragment
    - Scaffolding - OK
    - Passare dati local - OK
    - Prendere dati local - OK
    - Chiamata GET Immagine
    - Vedere immagine
  - Popup Google maps (?) 
  - 


## SCHERMATE
1) Login/Signin
   1) Logic working - OK
   2) Aggiustamenti grafici
2) View Projects
   1) Logic Working - OK
   2) Bottone logout
   3) Aggiustamenti grafici
3) New Project
   1) Logic Working - OK
   2) Speech to text
   3) Aggiustamenti grafici
4) View Project Map
5) View Project Location List
6) Add position + photo + description
7) Project Details + Share
Additional Features:
- 1:
  - Google Auth
- 3:
  - Microphone (+ external service?)
- 4: 
  - Google Maps
- 6:
  - GPS
  - Camera
  - Microphone

## BACKEND
- Google Login/SingIn


## ENDPOINTS
- Login(?) (1)
- Signin (?) (1)
- newProject (3)
  - REQ:
    - title
    - description
- getProjects (2)
- getProject (7)
- locationList (4/5)
  - REQ:
    - projectid
- add position (6)
  - title
  - image
  - description
- share (7)
  - email