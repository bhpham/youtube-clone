# youtube-clone

Developing my first youtube version.

# Fuctional requirements:

- List Videos
- Sign-in/out
- Users can be able to upload videos
- Users must sign-in in order to upload videos
- Users can watch videos

# Non-Functional requirements:

- Highly scalable and Available.

# Tech Stack:

1. TypeScript
2. Next.js
3. Express.js
4. Docker
5. FFmpeg
6. Firebase Auth
7. Firebase Functions
8. Firebase Firestore
9. Google Cloud Storage
10. Google Cloud Pub/Sub
11. Google Cloud Run

# System Architecture of the web app:

![alt text](https://github.com/bhpham/youtube-clone/blob/main/yt-web-client/public/system_architecture.png?raw=true)
...

# Design Architecture Flow:
1. Cloud Storage will store the raw and processed videos uploaded by users
2. Pub/Sub will send messages to the video processing service.
3. Cloud Run will host a non-public video processing service. After it transcodes videos, they will be uploaded to Cloud Storage.
4. Cloud Firestore will store the metadata for the videos.
5. Cloud Run will host a Next.js app, which will serve as the Youtube web client.
6. The Next.js app will make API calls to Firebase Functions.
7. Firebase Functions will fetch videos from Cloud Firestore and return them.
