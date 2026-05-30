# Blogs and Courses Setup Documentation

## Overview
This document explains the structure and implementation of the Blogs and Courses sections of the Chatura Solutions website.

## Directory Structure

```
/vercel/share/v0-project/
├── data/
│   ├── blogs/
│   │   ├── top-10-interview-questions.json
│   │   ├── choosing-right-university.json
│   │   ├── essential-skills-2024.json
│   │   └── star-method-behavioral-interviews.json
│   └── courses.json
├── public/
│   └── data/
│       ├── blogs/
│       │   ├── top-10-interview-questions.json
│       │   ├── choosing-right-university.json
│       │   ├── essential-skills-2024.json
│       │   └── star-method-behavioral-interviews.json
│       └── courses.json
└── app/
    ├── blogs/
    │   ├── page.tsx (Blog listing page)
    │   └── [slug]/
    │       └── page.tsx (Individual blog post page)
    └── courses/
        └── page.tsx (Courses page with available & previous batches)
```

## Blogs System

### Blog JSON Structure
Each blog file (located in `/public/data/blogs/`) contains:
```json
{
  "id": "unique-id",
  "title": "Blog Title",
  "slug": "blog-slug",
  "excerpt": "Short excerpt for the listing page",
  "content": "Full markdown content of the blog post",
  "author": "Author Name",
  "date": "YYYY-MM-DD",
  "category": "Interview Tips|Education|Career",
  "readTime": 8
}
```

### Blogs Page (`/blogs`)
- Dynamically loads all blog JSON files from `/public/data/blogs/`
- Displays blogs in a 2-column grid (responsive to 1 column on mobile)
- Shows category, title, excerpt, date, and author
- Each blog post card is clickable and links to the individual blog page
- Blogs are sorted by date (newest first)

### Adding New Blogs
1. Create a new JSON file in `/data/blogs/` and `/public/data/blogs/`
2. Follow the JSON structure above
3. Add the filename (without .json) to the `blogFiles` array in `/app/blogs/page.tsx`
4. The blog will automatically appear on the listing page

## Courses System

### Courses JSON Structure (`/public/data/courses.json`)
```json
{
  "availableBatches": [
    {
      "id": "batch-1",
      "courseTitle": "Course Name",
      "startDate": "YYYY-MM-DD",
      "endDate": "YYYY-MM-DD",
      "duration": "8 weeks",
      "schedule": "Mon & Wed, 7:00 PM - 9:00 PM IST",
      "instructor": "Instructor Name",
      "seats": 15,
      "seatsRemaining": 5,
      "level": "Beginner|Intermediate|Advanced",
      "description": "Course description",
      "topics": ["Topic 1", "Topic 2", ...],
      "price": "₹4,999"
    }
  ],
  "previousBatches": [
    {
      "id": "prev-batch-1",
      "courseTitle": "Course Name",
      "startDate": "YYYY-MM-DD",
      "endDate": "YYYY-MM-DD",
      "duration": "8 weeks",
      "instructor": "Instructor Name",
      "studentCount": 18,
      "successRate": 94,
      "testimonials": [
        {
          "student": "Student Name",
          "rating": 5,
          "feedback": "Testimonial text"
        }
      ]
    }
  ]
}
```

### Courses Page (`/courses`)
- Displays two tabs: "Available Batches" and "Previous Batches"
- **Available Batches Tab**:
  - Shows courses currently open for registration
  - Displays course details: title, level, description, topics, dates, instructor, schedule
  - Shows seat availability with a progress bar
  - Price and "Register Now" button linking to contact page
  
- **Previous Batches Tab**:
  - Shows completed courses with statistics
  - Displays success rate, number of students, and duration
  - Shows student testimonials with ratings
  - Highlights achievements and course outcomes

## Navigation Integration

The "Courses" link has been added to the main header navigation:
- Desktop: Displays between "Home" and "Mock Interview"
- Mobile: Available in the hamburger menu
- Updated in `/components/header.tsx`

## Data Flow

### Blogs
1. Blog JSON files stored in `/data/blogs/` and `/public/data/blogs/`
2. Blog listing page fetches all files dynamically using `fetch()` in a `useEffect`
3. Files are parsed and sorted by date
4. Displayed in a responsive grid layout

### Courses
1. Courses data stored in `/data/courses.json` and `/public/data/courses.json`
2. Courses page fetches the file on mount
3. Data is parsed and displayed based on active tab (available or previous)
4. Color coding for difficulty levels and visual indicators for seat availability

## Styling

### Blog Cards
- Gradient backgrounds based on category
- Hover effects with shadow and color transitions
- Category badges with primary background color
- Responsive layout with proper spacing

### Course Cards
- Level badges with color-coded backgrounds (Beginner=green, Intermediate=blue, Advanced=purple)
- Topic tags with primary color borders
- Seat availability progress bar
- Previous batch cards with statistics and testimonials

## How to Update Content

### Update Blogs
1. Edit the JSON file in `/data/blogs/` 
2. Copy the updated file to `/public/data/blogs/`
3. No code changes needed - the page will automatically load the latest data

### Update Courses
1. Edit `/data/courses.json`
2. Copy to `/public/data/courses.json`
3. Changes appear immediately on the courses page

## Notes

- Blog and course data is loaded client-side dynamically
- All data files are publicly accessible in `/public/`
- The data structure is extensible - add new fields as needed
- Testimonials and ratings are fully integrated for previous batches
- All dates use ISO format (YYYY-MM-DD) for consistency
