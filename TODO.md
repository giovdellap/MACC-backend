## TASK
- backend:
  - docker
  - struttura
  - definizione model
  - Attacco db mongo
  - controller
  - viewProjects
  - newProject
- App:
  - View Projects
    - mettere lista
    - chiamata REST
    - bottone logout
  - New Project
    - Mettere form
    - mettere speech-to-text

## SCHERMATE
1) Login/Signin - OK
2) View Projects
3) New Project
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