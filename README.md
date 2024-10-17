# YouTube Clone

## Overview

This project is a personal endeavor to create a simplified version of YouTube, enabling users to upload, download, and watch videos. The application incorporates essential functionalities while leveraging modern web technologies.

## Functional Requirements

- **List Videos**: Users can browse and view a list of uploaded videos.
- **Sign-In/Sign-Out**: Users must sign in to access certain features.
- **Upload Videos**: Authenticated users can upload their videos to the platform.
- **Watch Videos**: Users can view videos uploaded by others.

## Non-Functional Requirements

- **Scalability**: The application is designed to handle increasing loads seamlessly.
- **Availability**: The system ensures high availability for a better user experience.

## Tech Stack

- **TypeScript**: For building robust and maintainable code.
- **Next.js**: For server-side rendering and client-side functionality.
- **Express.js**: For handling API requests.
- **Docker**: For containerization of the application.
- **FFmpeg**: For video processing and transcoding.
- **Firebase Auth**: For user authentication.
- **Firebase Functions**: For serverless backend operations.
- **Firebase Firestore**: For real-time data storage and retrieval.
- **Google Cloud Storage**: For storing raw and processed video files.
- **Google Cloud Pub/Sub**: For message handling in video processing.
- **Google Cloud Run**: For hosting serverless applications.

## System Architecture

The architecture of the web application is designed to efficiently manage video uploads and processing. Below is a brief description of each component:

- **Cloud Storage**: Stores both raw and processed videos uploaded by users.
- **Pub/Sub**: Sends messages to the video processing service to trigger transcoding tasks.
- **Cloud Run**: Hosts a non-public video processing service that transcodes videos and uploads them back to Cloud Storage.
- **Cloud Firestore**: Maintains metadata for the videos, allowing for easy retrieval and management.
- **Next.js App**: Serves as the client interface for the YouTube clone, making API calls to Firebase Functions to fetch and display videos.

## Design Architecture Flow

1. **Video Upload**: Users upload videos through the Next.js client.
2. **Message Queue**: Upon upload, a message is sent to Cloud Pub/Sub to initiate video processing.
3. **Transcoding**: The Cloud Run service processes the video using FFmpeg and stores the output in Cloud Storage.
4. **Metadata Storage**: Video metadata is saved in Firestore, ensuring that all necessary information is accessible.
5. **Video Retrieval**: The Next.js client makes requests to Firebase Functions to retrieve video data for listing and playback.

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


## Conclusion

This YouTube clone project showcases the integration of various technologies to create a scalable and efficient video-sharing platform. It serves as a testament to my skills as a software engineer and my ability to design and implement complex systems. 

Feel free to explore the code, contribute, or provide feedback!
