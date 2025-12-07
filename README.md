# YouTube Clone Project

## 📌 Project Overview
This project is a functional **YouTube Clone** developed as an ICT practical/coursework project. The main objective was to replicate the core user interface and user experience of YouTube, demonstrating proficiency in frontend web development technologies (HTML, CSS, and JavaScript).

The website recreates key YouTube features, including the video feed, dynamic sidebar navigation, shorts player, and a responsive channel profile page. It is designed to be visually similar to the actual YouTube desktop site.

---

## 🚀 Features

### Core UI/UX
*   **Responsive Design**: Adapts layout for different screen sizes.
*   **Professional Sidebar**: Collapsible and expandable sidebar with "Mini" and "Full" modes (similar to YouTube).
*   **Navigation Bar**: Functional search bar (UI), voice search tooltip, notification dropdowns, and profile menu.
*   **Tooltips**: Custom hover tooltips for icons (e.g., "Search", "Create", "Notifications").

### Functionality
*   **Video Feed**: Grid layout for videos with hover effects, displaying thumbnails, duration, channel icon, and metadata.
*   **Category Chips**: Interactive filtering chips (e.g., "Music", "Gaming", "Live") at the top of the feed.
*   **Shorts Player**: A dedicated vertical viewing mode for YouTube Shorts with overlay interactions (Like, Dislike, Comment).
*   **Dropdown Menus**: Interactive dropdowns for "Create Video", "Notifications", and "Profile Settings".

### Pages
*   **Home**: The main landing page with a rich video recommendation feed.
*   **Shorts**: A specialized UI for short-form content.
*   **Subscriptions**: A dedicated view for subscribed channels with "List" and "Grid" view toggles.
*   **You (Profile)**: A personal channel page featuring a banner, avatar, and tabs for "History" and "Playlists".

---

## 📸 Screenshots

> *Note: Measurement and visual verification images.*

### Homepage
![Homepage](thumbnails/iphone16.jpg)
*(Replace with actual homepage screenshot)*

### Video Page / Feed
![Video Feed](thumbnails/minecraft.jpg)
*(Replace with actual video feed screenshot)*

### Shorts Page
![Shorts Page](thumbnails/machine_short.jpg)
*(Replace with actual shorts page screenshot)*

### Subscriptions Page
![Subscriptions](thumbnails/fbise.avif)
*(Replace with actual subscriptions page screenshot)*

### Channel / Account Menu
![Account Menu](channel-pictures/channelpp.jpg)
*(Replace with actual menu open screenshot)*

---

## 📂 Page-by-Page Explanation

### 1. `index.html` (Homepage)
*   **Purpose**: The main landing page that users see when opening the website.
*   **UI Elements**:
    *   **Header**: Contains the logo, search bar, voice search, create button, and profile icon.
    *   **Sidebar**: A navigation drawer enabling quick access to Home, Shorts, Subscriptions, and Library.
    *   **Categories**: A scrollable list of chips ("All", "Music", "Gaming") to filter content.
    *   **Video Grid**: A responsive grid displaying video thumbnails, titles, and channel info.
*   **How it works**: Uses `general.css` for layout and `video.css` for card styling. `sidebar.js` manages the sidebar toggling, and `tooltips.js` handles hover interactions.

### 2. `shorts.html` (Shorts Player)
*   **Purpose**: Replicates the YouTube Shorts viewing experience.
*   **UI Elements**:
    *   **Vertical Player**: Central video container simulating a mobile screen.
    *   **Action Buttons**: Floating side buttons for Like, Dislike, Comment, and Share.
    *   **Overlay Info**: Channel name, subscribe button, and video description overlaid on the video.
*   **How it works**: The layout is restricted to a central column using `shorts.css`. The sidebar enters a "mini" state by default to focus on content.

### 3. `subscription.html` (Subscriptions)
*   **Purpose**: Displays updates from subscribed channels.
*   **UI Elements**:
    *   **Manage Bar**: Options to switch between Grid and List views.
    *   **Content Grid**: Shows the latest videos specifically from subscribed creators (e.g., FBISE, Marques Brownlee).
*   **How it works**: Reuses the core grid layout but adds a custom `subscriptions-header` for view management controls.

### 4. `you.html` (Channel Profile)
*   **Purpose**: Represents the user's personal channel/profile page ("You" tab).
*   **UI Elements**:
    *   **Channel Banner**: Displays the user's avatar (`channel-pictures/channelpp.jpg`) and handle (`@hamidrafique1319`).
    *   **Tabs**: Navigation for "Home", "Videos", "Playlists".
    *   **History & Playlists**: Horizontal scrolling sections showcasing watch history and created playlists.
*   **How it works**: Uses `you.css` to style the profile header and horizontal scrollable lists.

---

## 📁 Folder Structure

```text
Youtube Project Website/
│
├── index.html            # Main Homepage
├── shorts.html           # Shorts Player Page
├── subscription.html     # Subscriptions Page
├── you.html              # User Profile Page
├── README.md             # Project Documentation
│
├── styles/               # CSS Stylesheets
│   ├── general.css       # Base styles (fonts, body)
│   ├── header.css        # Navbar styling
│   ├── sidebar.css       # Sidebar styling
│   ├── video.css         # Video card styling
│   ├── shorts.css        # Shorts specific styling
│   ├── you.css           # Profile page styling
│   ├── tooltips.css      # Tooltip styling
│   └── theme.css         # Theme variables (colors)
│
├── scripts/              # JavaScript Files
│   ├── header.js         # Header interactions
│   ├── sidebar.js        # Sidebar toggle logic
│   ├── tooltips.js       # Tooltip positioning
│   ├── theme.js          # Theme management
│   └── main.js           # General logic
│
├── icons/                # SVG Icons (Search, Menu, Logos)
├── thumbnails/           # Video Thumbnails
└── channel-pictures/     # Channel Avatars
```

---

## 💻 Technologies Used

*   **HTML5**: Semantic structure for all pages.
*   **CSS3**:
    *   **Flexbox & Grid**: For complex layouts (video grid, sidebar).
    *   **CSS Variables**: For consistent theming (colors, spacing).
    *   **Media Queries**: For responsiveness.
*   **JavaScript (ES6)**:
    *   DOM Manipulation for sidebar toggles and dropdowns.
    *   Event handling for interactive elements.
*   **Google Fonts**: *Roboto* (standard YouTube font).
*   **Material Icons**: Google's *Material Symbols Outlined* for UI icons.

---

## ⚙️ How to Run the Project

1.  **Download**: Download the project folder to your computer.
2.  **Open**: Browse to the project directory.
3.  **Run**: Double-click on `index.html` to open it in your default web browser (Chrome, Edge, or Firefox recommended).
4.  **Navigate**: Click the links (Shorts, Subscriptions, You) to explore different pages.

*Note: No server installation (Node.js/Python) is required; this is a static frontend project.*

---

## 👥 Credits

**Developed by:**
*   **Hamid Rafique**
*   **Hashir Kamal**
*   **Wadia Sahar**

*This project was created for our ICT Practical Coursework.*
