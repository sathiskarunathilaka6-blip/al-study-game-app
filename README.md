# AL Study Game Mobile — V7 Game Mechanics

Android + iOS Capacitor project shell.

## Added gameplay mechanics
- XP combo multiplier: x1 → x1.25 → x1.5 → x1.75 → x2
- Daily quests: lesson, 5 correct answers, perfect quiz
- Streak rewards: 3 / 7 / 14 day milestones and monthly milestones
- Achievement system with XP rewards
- Chapter progress map with locked/current/completed nodes
- Chapter boss battles; 80%+ clears a boss
- Random 10-second challenge cards worth bonus XP + coins
- Sound feedback using device Web Audio API, with ON/OFF toggle
- Level-up animation and reward burst
- Stable local progress + backup/restore JSON
- Existing mission completion keys are migrated from V2 to V3 so future content can be added without intentionally resetting progress

## Study flow
Lesson → source-paper practice → original past-paper-pattern questions → predicted questions → complete mission → next map node.

## Mobile build
This is the web layer inside a Capacitor project. To produce a final Android APK, build the Android platform with Android Studio/Gradle. To produce an installable iOS IPA, an Apple-signed iOS build is required.
