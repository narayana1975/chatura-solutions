# Courses System Documentation

Complete guide to managing and working with the Chatura Solutions courses system.

## Overview

The courses system displays upskilling courses with filtering, categorization, and enrollment capabilities. All course data is managed through a single JSON file.

## Directory Structure

```
public/
  data/
    courses.json               # All courses data

app/
  courses/
    page.tsx                  # Courses listing page
    layout.tsx               # Courses page layout
```

## Courses Data Format

The courses data is stored in `/public/data/courses.json`:

```json
{
  "courses": [
    {
      "id": "1",
      "title": "Complete Python Programming",
      "category": "Programming",
      "level": "Beginner",
      "duration": "8 weeks",
      "price": 4999,
      "description": "Learn Python from scratch to advanced level",
      "instructor": "Expert Trainer",
      "learners": 1250,
      "rating": 4.8
    }
  ]
}
```

### Field Descriptions

- **id**: Unique course identifier
- **title**: Course name/title
- **category**: Course category (Programming, Business, Design, etc.)
- **level**: Difficulty level (Beginner, Intermediate, Advanced)
- **duration**: Course duration (e.g., "8 weeks", "12 hours")
- **price**: Course price in INR
- **description**: Short course description
- **instructor**: Instructor/trainer name
- **learners**: Number of enrolled learners
- **rating**: Course rating (1-5 stars)

## Adding a New Course

### Edit courses.json

Open `/public/data/courses.json` and add a new course object to the courses array:

```json
{
  "courses": [
    {
      "id": "5",
      "title": "Web Development Masterclass",
      "category": "Programming",
      "level": "Intermediate",
      "duration": "12 weeks",
      "price": 7999,
      "description": "Master HTML, CSS, JavaScript, and React",
      "instructor": "Senior Developer",
      "learners": 850,
      "rating": 4.9
    },
    // ... existing courses
  ]
}
```

## Course Features

### Listing Page

The courses page at `/courses` displays:

- Course cards with:
  - Course title
  - Category tag
  - Level indicator
  - Duration information
  - Price
  - Description
  - Instructor name
  - Learner count
  - Star rating

### Filtering & Search

Features available on the courses page:

- **Category Filter**: Filter by course category
- **Level Filter**: Filter by difficulty level
- **Search**: Search courses by title or description
- **Sorting**: Sort by price, rating, or learners

### Course Card Display

Each course card shows:

```
[Course Title]
Category | Level | Duration
Description...
⭐ Rating (X learners)
Price: ₹X,XXX
[Enroll Now Button]
```

## Managing Courses

### Update Existing Course

Edit the course object directly in `/public/data/courses.json`:

```json
{
  "id": "1",
  "title": "Updated Course Title",
  "price": 5999,
  "rating": 4.9,
  // ... other fields
}
```

### Remove Course

Delete the course object from the courses array in `/public/data/courses.json`.

### Bulk Updates

To update multiple courses, edit the JSON file and modify all relevant fields. Changes take effect immediately when the file is saved and server reloads.

## Categories

Common course categories used:

- Programming
- Web Development
- Mobile Development
- Data Science
- Design
- Business
- Marketing
- Personal Development

## Levels

Course levels available:

- **Beginner**: No prior experience needed
- **Intermediate**: Basic knowledge required
- **Advanced**: Extensive knowledge required

## Pricing Strategy

- Beginner courses: ₹2,999 - ₹5,999
- Intermediate courses: ₹5,999 - ₹9,999
- Advanced courses: ₹9,999 - ₹15,999

## Rating System

Courses display ratings on a 5-star scale:

- 4.5+ ⭐⭐⭐⭐⭐ (Excellent)
- 4.0-4.5 ⭐⭐⭐⭐ (Very Good)
- 3.5-4.0 ⭐⭐⭐ (Good)
- Below 3.5 (Consider removal or improvement)

## Learner Count

The learner count indicates course popularity:

- Helps build social proof
- Shows course demand
- Influences credibility
- Update based on actual enrollment

## Course Enrollment

### Enrollment Flow

1. User views course on `/courses`
2. Clicks "Enroll Now" button
3. Directed to enrollment/contact page
4. User provides information
5. Confirmation sent

### Integration

Enrollment typically redirects to:

- Contact form at `/contact`
- Courses page with enrollment section
- External enrollment platform

## SEO for Courses

### Page Optimization

- Dynamic meta titles and descriptions
- Schema markup for course data
- Open Graph tags for social sharing
- Mobile-responsive layout

### Individual Course

While individual course pages aren't separate routes, course data appears in:

- `/courses` listing page
- Search engine results
- Social media previews

## Performance Considerations

### Loading

- All courses load from single JSON file
- Lightweight and fast loading
- No database queries required
- Suitable for 100+ courses

### Caching

- Page caching for better performance
- Client-side filtering for responsive UI
- Image optimization recommended

## Best Practices

1. **Naming**: Use clear, descriptive course titles
2. **Categories**: Keep categories consistent and organized
3. **Pricing**: Research competitive pricing
4. **Ratings**: Update ratings based on feedback
5. **Descriptions**: Write compelling, clear descriptions
6. **Updates**: Keep course information current
7. **Images**: Use high-quality course images if available

## Troubleshooting

### Courses Not Displaying

- Verify `/public/data/courses.json` exists
- Check JSON syntax is valid
- Ensure courses array has objects
- Check browser console for errors

### Filtering Not Working

- Verify filter values match course data
- Check category names are exact matches
- Clear browser cache
- Try different filter combinations

### Styling Issues

- Check responsive design on mobile
- Verify card layout displays correctly
- Ensure price formatting is consistent
- Check star rating display

## File Location

- **Main file**: `/public/data/courses.json`
- **Page**: `/app/courses/page.tsx`

## Example Course Entry

```json
{
  "id": "3",
  "title": "Advanced JavaScript & React",
  "category": "Programming",
  "level": "Advanced",
  "duration": "10 weeks",
  "price": 8999,
  "description": "Master advanced JavaScript concepts and build production-ready React applications",
  "instructor": "Expert JavaScript Developer",
  "learners": 2100,
  "rating": 4.7
}
```

For questions or updates needed, refer to the main documentation index in `/docs/README.md`.
