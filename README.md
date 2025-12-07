# 🎥 YouTube Clone - ICT Project

A fully functional, responsive **YouTube Clone** developed as a comprehensive ICT coursework project. This application replicates the core core experience of YouTube, featuring a dynamic homepage, video player interface, subscription management, and a dedicated user dashboard, all built with **vanilla HTML, CSS, and JavaScript**.

## 🔗 Live Demo
🔴 **[View Live Project](https://hamidrafique2-boop.github.io/ICT-Project-Youtube-Clone/)**

---

## 🚀 Features
This project includes a wide range of features mimicking the real YouTube interface:
*   **Homepage Video Grid**: Responsive grid layout displaying video thumbnails, titles, channel info, and views.
*   **Dynamic Sidebar**: Collapsible and expadable navigation sidebar (Mini vs Full view).
*   **Interactive Header**:
    *   Functional Search Bar with hover effects.
    *   Voice Search tooltip/popup.
    *   Create, Notifications, and Profile dropdown menus.
    *   **Dark/Light Appearance Toggle** (simulated UI).
*   **Shorts Page**: Dedicated full-screen style Shorts player interface.
*   **Subscriptions Page**: Layout to manage subscribed channels with Grid/List view toggles.
*   **You (Profile) Page**: Personalized dashboard showing Watch History and Playlists.
*   **Responsive Design**: Adapts layout for different screen sizes (desktop, tablet, mobile).
*   **Tooltips & Hover Effects**: Detailed UI interactions for a polished user experience.

---

## 📸 Screenshots

### 1. Homepage
The main landing page featuring a responsive video grid and sidebar navigation.
![Homepage](thumbnails/iphone16.jpg)
*(Note: Replace with actual homepage screenshot)*

### 2. Shorts Page
Immersive vertical video player interface.
![Shorts Page](thumbnails/machine_short.jpg)
*(Note: Replace with actual shorts page screenshot)*

### 3. Subscriptions Page
Manage and view updates from subscribed channels.
![Subscriptions Page](thumbnails/fbise.avif)
*(Note: Replace with actual subscriptions page screenshot)*

### 4. You (Profile) Page
User dashboard displaying history and playlists.
![You Page](channel-pictures/channelpp.jpg)
*(Note: Replace with actual profile page screenshot)*

### 5. Sidebar & Navigation
Expandable sidebar with multiple sections (Home, Subscriptions, Explore).
![Sidebar](icons/hamburger-menu.svg)

---

## 📂 Page-by-Page Breakdown

### 🏠 `index.html` (Homepage)
*   **Purpose**: The main entry point of the website.
*   **Key Elements**:
    *   **Header**: Fixed top container with Search, Mic, and Profile controls.
    *   **Sidebar**: Left navigation with "Home", "Shorts", "Subscriptions" links.
    *   **Filter Chips**: Top scrollable bar for video categories (All, Gaming, Music, etc.).
    *   **Video Grid**: A CSS Grid layout displaying video cards (`video-card`) with hover states.
*   **Functionality**: Integrates `sidebar.js` for menu toggling and `header.js` for dropdowns.

### 📱 `shorts.html` (Shorts)
*   **Purpose**: Replicates the YouTube Shorts viewing experience.
*   **Key Elements**:
    *   **Mini Sidebar**: Collapsed sidebar to maximize viewing area.
    *   **Short Player**: Central video container with overlay text and controls.
    *   **Action Buttons**: Right-side floating buttons for Like, Dislike, Comment, and Share.
*   **Interactions**: Custom CSS styling (`shorts.css`) for the dark, immersive layout.

### 📺 `subscription.html` (Subscriptions)
*   **Purpose**: Displays videos specifically from subscribed channels.
*   **Key Elements**:
    *   **View Toggle**: Buttons to switch between Grid and List views (UI elements).
    *   **Manage Button**: Control for managing subscription list.
    *   **Content Grid**: Filtered list of video content.
*   **Structure**: Uses specific styles (`subscriptions-header`) to differentiate from the main feed.

### 👤 `you.html` (User Dashboard)
*   **Purpose**: The personal user profile area.
*   **Key Elements**:
    *   **Channel Header**: Large banner/avatar section with channel name (@hamidrafique1319).
    *   **Tabs**: Navigation for Home, Videos, Playlists, etc.
    *   **History Section**: Horizontal scrollable list of recently watched videos.
    *   **Playlists Section**: Display of user-created playlists like "Web Development Course".
*   **Styling**: Uses `you.css` for the unique channel layout and horizontal scrolling sections.

---

## 📁 Folder Structure

```text
ICT-Project-Youtube-Clone/
├── channel-pictures/    # User avatars and channel profile images
├── icons/               # SVG icons for navigation and UI elements
├── scripts/             # JavaScript logic files
│   ├── header.js        # Logic for search, dropdowns, and notifications
│   ├── main.js          # Main application logic
│   ├── sidebar.js       # Sidebar toggle functionality
│   ├── theme.js         # Theme handling (Dark/Light) (if implemented)
│   └── tooltips.js      # Tooltip positioning and behavior
├── styles/              # CSS Stylesheets
│   ├── general.css      # Global resets and variables
│   ├── header.css       # Header specific styles
│   ├── shorts.css       # Shorts page specific styles
│   ├── sidebar.css      # Sidebar styles
│   ├── theme.css        # Theme variables (colors)
│   ├── tooltips.css     # Tooltip styles
│   ├── video.css        # Video card and grid styles
│   └── you.css          # Profile page styles
├── thumbnails/          # Video thumbnail images
├── index.html           # Main Homepage
├── shorts.html          # Shorts Page
├── subscription.html    # Subscriptions Page
├── you.html             # Profile/You Page
└── README.md            # Project Documentation
```

---

## �️ Technology Stack

*   **HTML5**: Semantic structure for all pages.
*   **CSS3**:
    *   Flexbox & CSS Grid for layouts.
    *   CSS Variables for consistent theming.
    *   Responsive media queries.
*   **JavaScript (Vanilla)**: DOM manipulation for interactive elements (sidebar, dropdowns).
*   **Assets**:
    *   **Google Fonts**: *Roboto* (Regular, Medium, Bold).
    *   **Material Icons**: Google Material Symbols Outlined for UI icons.

---

## 👥 Developers & Contributions (Credits)

This project was a collaborative team effort for our ICT Coursework.

### 1. Homepage (`index.html`)
**Developed by:**
*   **Hamid Rafique**
*   **Hashir Kamal Ahmed**
*   **Wadia Sahar**

### 2. Sidebar Functionality
**Developed by:**
*   **Wadia Sahar**
    *   Implementation of the collapsible navigation menu and responsive behaviors.

### 3. Header & Features
**Developed by:**
*   **Hashir Kamal Ahmed**
    *   Search bar implementation.
    *   Profile dropdown menu.
    *   Theme changing functionality.
    *   Notification system UI.

### 4. Additional Pages & Functionality
**Developed by:**
*   **Hamid Rafique**
    *   `shorts.html` (Shorts interface).
    *   `you.html` (User Profile/History).
    *   `subscription.html` (Subscriptions Grid).
    *   All related JavaScript & UI functionality for these pages.

---

## ⚙️ How to Run the Project

Since this is a frontend-only project (HTML/CSS/JS), no backend server is required.

1.  **Download** the project folder.
2.  **Locate** the `index.html` file in the root directory.
3.  **Double-click** `index.html` to open it in your default web browser (Chrome, Edge, Firefox, etc.).
4.  Navigate through the links (Shorts, Subscriptions, You) to view the full project.

---

> **Note**: This website was fully created by our team for an ICT project. It is a clone intended for educational purposes.
