# Work Forge – Social Dashboard (Assignment)

## 📌 Project Overview
Work Forge is a front-end web project built as part of an Object-Oriented JavaScript / Front-End Development assignment.  
The project demonstrates API usage, DOM manipulation, modal interactions, and basic user interface behaviors using **HTML, CSS, and JavaScript**.

The application simulates a simple social dashboard where users can view profile information, browse suggested people, create posts, and interact with a profile modal.

---

## 🛠 Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- Random User API (https://randomuser.me)
- Git & GitHub

---

## ✨ Features

### 1. User Profile Display
- A profile card is displayed on the left side of the page.
- Profile includes:
  - Avatar
  - Name
  - Role / Location
- Profile data is visually consistent across the interface.

---

### 2. Profile Modal
- Clicking the **user avatar** in the header opens a profile modal.
- The modal displays the **same profile information** as the left profile card.
- Information layout uses a structured **label : value** format for clarity.

**Modal includes:**
- User avatar
- Name
- Email
- Location
- Buttons:
  - **Close** – closes the modal
  - **Logout** – clears login state and redirects to the login page

---

### 3. Change Avatar
- Users can upload a new avatar image from their local device.
- The updated avatar is immediately reflected:
  - In the profile modal
  - In the header avatar
  - In the left profile card

---

### 4. People You May Know (API Integration)
- Suggested users are dynamically loaded using the **Random User API**.
- Each suggested user card displays:
  - Profile image
  - Name
  - Location
- Demonstrates:
  - `fetch()` API usage
  - Dynamic DOM rendering
  - Error handling for failed requests

---

### 5. Post Creation
- Users can create simple posts with:
  - Text content
  - Optional image upload
- Newly created posts appear at the top of the feed.
- Image uploads are handled using the `FileReader` API.

---

### 6. Logout Functionality
- Clicking **Logout**:
  - Clears login data from `localStorage`
  - Redirects the user back to the login page (`index.html`)

## 👥 Creators / Team
- Cunwei Qin  
- Carlos Bumanglag

---