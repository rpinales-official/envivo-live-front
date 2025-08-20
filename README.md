# enVivo Live Music App

A React Native + Expo application for discovering live music events.
Includes navigation with bottom tabs, event detail screens, custom top nav bar, and tests.

## Prerequisites

Before you begin, make sure you have:
    •	Node.js (LTS recommended — check with node -v)
    •	npm or yarn
    •	Expo CLI (npm install --global expo-cli)
    •	Git

## Getting Started

Install dependencies
```
npm install
# or
yarn install
```

## Configure environment variables
This app uses a Ticketmaster API key stored in .env:

Add your key:
    ```
    TM_API_KEY="your_api_key_here"
    ```

## Running the App

Start in development mode:
```
npx expo start
```
    •	Press i to run on iOS simulator
    •	Press a to run on Android emulator
    •	Scan the QR code with the Expo Go app on your device

## Running Tests

This project uses Jest with jest-expo.

Run all tests:
```
npm test
```

Update snapshots if needed:
```
npm test -- -u
```

##  Project Structure
```
src/
 ├─ components/       # Reusable UI components
 ├─ context/          # Context providers (e.g., EventsProvider)
 ├─ navigation/       # Navigation stacks and tabs
 ├─ screens/          # Screen components
 └─ assets/           # Static images/icons
 ```

## Tech Stack
	•	React Native (with Expo)
	•	TypeScript
	•	React Navigation (Stack + Bottom Tabs)
	•	Jest + @testing-library/react-native for testing
	•	Expo Modules (e.g., expo-system-ui)

## Data Flow

                         ┌─────────────────────────────┐
                         │        Ticketmaster API     │
                         └───────────────┬─────────────┘
                                         │  HTTP GET
                                         ▼
                ┌─────────────────────────────────────────────────┐
                │            Ticketmaster Service                 │
                │         src/services/ticketmaster.ts            │
                │  - builds URL & optional query params           │
                │      (keyword, city, countryCode, latlong,      │
                │       radius, startDateTime, size, page, sort)  │
                │  - fetch(url)                                   │
                │  - parse raw TM JSON                            │
                │  - normalize → internal Event[]                 │
                │      id: ev.id                                  │
                │      title: ev.name                             │
                │      venueName: ev._embedded?.venues?.[0]?.name │
                │      startDateTime: ev.dates?.start?.dateTime   │
				│      timeZone: ev.dates?.timezone               │
                │      description: ev.info                       │
                │      ticketUrl: ev.url                          │
                │      imageUrl: pickBestImage(ev.images)         │
                └───────────────────────┬─────────────────────────┘
                                		│  returns Event[]
                                		▼
                    	┌──────────────────────────────────┐
                    	│          EventsProvider          │
                    	│      src/context/EventsProvider  │
                    	│                                  │
                    	│  state:                          │
						│	• events[]                     │
                    	│  effect:                         │
						│	on mount →                     │
                    	│   	fetchTicketmaster(...)     │
                    	│       setEvents(Event[])         │
                    	│  derived:                        │
                    	│   • featuredEvents = random 6    │
                    	│   • upcomingEvents = next 6 by   │
                    	│     soonest startDateTime        │
                    	│  helpers:                        │
                    	│   • getEventById(id) (Map cache) │
                    	│  flags: isLoading, error         │
                    	└─────────────────┬────────────────┘
                                    	  │  via useEvents()
      		┌─────────────────────────────┼───────────────────────────────┐
      		▼                             ▼                               ▼
	┌───────────────────┐       ┌───────────────────┐           ┌──────────────────────┐
	│   HomeScreen      │       │ AllEventsScreen   │           │  EventDetailsScreen  │
	│  - featuredEvents │       │  - events[]       │           │  - route.params.id   │
	│  - upcomingEvents │       │                   │           │  - getEventById(id)  │
	│  - carousels/lists│       │  - Vertical list  │           │  - hero/meta/CTA     │
	└───────────────────┘       └───────────────────┘           └──────────────────────┘


## Navigation

App.tsx
 └── NavigationContainer (with custom dark theme)
      └── AppNavigator (Native Stack)
           ├── Tabs (Bottom Tabs)
           │    ├── HomeScreen
           │    │    └── TopNavBar("Home")
           │    └── AllEventsScreen
           │         └── TopNavBar("All Events")
           └── EventDetailsScreen
                └── TopNavBar("Event Title", back button)

## Development Notes

	•	All screens share a dark background (#0a0a0a) via contentStyle in navigation.
	•	Custom TopNavBar is used for consistent headers.
	    •	Tests cover:
	    	•	Component rendering
	    	•	Interactions
	    	•	Event data context

## License
MIT