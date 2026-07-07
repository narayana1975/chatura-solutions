# Forms & Contact System Documentation

Complete guide to contact forms, consultation requests, and form handling in Chatura Solutions.

## Overview

The website includes multiple contact forms and submission endpoints for managing user inquiries and consultation requests.

## Contact Pages

### Contact Page (`/contact`)

The main contact page with comprehensive contact form.

**Location**: `app/contact/page.tsx`

**Features**:
- Full contact form with validation
- Contact information display
- Multiple communication channels
- Location and business hours
- Map integration (if available)

**Form Fields**:
- Name (required)
- Email (required, email validation)
- Phone (required, phone format)
- Subject (required)
- Message (required, textarea)

**Submit Behavior**:
- Form validation before submission
- Success message display
- Error handling with user feedback
- Optional email notification

### Consultation Page (`/educational-consultation`)

Specialized consultation request form.

**Location**: `app/educational-consultation/page.tsx`

**Features**:
- Consultation-specific form
- Service type selection
- Availability and preferences
- Benefits overview
- Success stories/testimonials

**Form Fields**:
- Name (required)
- Email (required)
- Phone (required)
- Consultation Type (dropdown)
- Preferred Date/Time (optional)
- Message/Additional Info (textarea)

## Form Handling

### Client-Side Validation

Forms include validation for:
- Required fields
- Email format validation
- Phone number format
- Message length requirements
- Input sanitization

### Server-Side Processing

Form submission handled through API endpoints:

```bash
POST /api/contact          # General contact form
POST /api/consultation     # Consultation requests
```

## API Endpoints

### Contact Form API

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91-9876543210",
  "subject": "Inquiry",
  "message": "Your message here"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Thank you for contacting us",
  "ticketId": "TKT-001"
}
```

### Consultation API

**Endpoint**: `POST /api/consultation`

**Request Body**:
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+91-9876543210",
  "consultationType": "Career Guidance",
  "preferredDate": "2026-07-15",
  "message": "I would like..."
}
```

**Response**:
```json
{
  "success": true,
  "message": "Consultation request received",
  "bookingId": "CONS-001"
}
```

## Contact Information

### Primary Contact Details

- **Phone**: +91-416-4055743
- **Email**: info@chaturasolutions.com
- **Location**: Vellore, Tamil Nadu, India

### Service Hours

- Monday - Friday: 9:00 AM - 6:00 PM IST
- Saturday: 10:00 AM - 4:00 PM IST
- Sunday: Closed

## Form Customization

### Adding Fields

To add new fields to contact forms:

1. **Update Form Component**:
   ```jsx
   const [newField, setNewField] = useState('')
   
   <input
     type="text"
     value={newField}
     onChange={(e) => setNewField(e.target.value)}
     placeholder="Field label"
     required
   />
   ```

2. **Update API Endpoint**: Add field to request handler

3. **Update Email Template**: Include new field in notifications

### Changing Validation Rules

Edit form validation in form component:

```jsx
if (!email.includes('@')) {
  setError('Invalid email format')
  return
}

if (phone.length < 10) {
  setError('Invalid phone number')
  return
}
```

### Styling Forms

Forms use Tailwind CSS with custom components:

```jsx
<input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary" />

<button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition-shadow" />
```

## Email Notifications

### Setup Email Service

Forms can send email notifications. To enable:

1. **Configure Email Provider** (SendGrid, Mailgun, etc.)
2. **Add API Keys** to environment variables
3. **Update Email Handler** in API route

### Email Templates

#### Contact Confirmation

```
Thank you for contacting Chatura Solutions!

We received your message:
Subject: {subject}

Our team will review your inquiry and get back to you within 24 hours.

Best regards,
Chatura Solutions Team
```

#### Consultation Confirmation

```
Your consultation request has been received!

Consultation Type: {consultationType}
Preferred Date: {preferredDate}

We will send you confirmation details soon.

Thank you,
Chatura Solutions
```

## Data Storage & Privacy

### Data Handling

- Form data processed securely
- No data stored without consent
- Complies with Privacy Policy
- GDPR-compliant processing

### Privacy Considerations

- Encrypt sensitive data
- Secure database connections
- Regular security audits
- Data retention policies

## Form Analytics

### Tracking Submissions

Monitor form submissions using:

- Google Analytics events
- Console logging (development only)
- Server-side logging
- Form success rates

### Performance Metrics

- Form completion rate
- Average submission time
- Error rate
- Conversion rate

## Troubleshooting

### Form Not Submitting

1. Check browser console for errors
2. Verify all required fields are filled
3. Validate email/phone format
4. Check API endpoint availability
5. Clear browser cache and try again

### Missing Email Notifications

1. Verify email service configuration
2. Check API keys are correct
3. Review email template syntax
4. Check spam folder
5. Verify recipient email address

### Validation Errors

1. Check field requirements
2. Verify input format (email, phone)
3. Ensure no special characters if restricted
4. Try with different values
5. Check error messages displayed

## Best Practices

1. **User Experience**:
   - Keep forms short and focused
   - Provide clear labels
   - Show error messages clearly
   - Confirm successful submission

2. **Validation**:
   - Validate on both client and server
   - Provide helpful error messages
   - Suggest corrections when possible
   - Prevent spam/abuse

3. **Security**:
   - Sanitize all inputs
   - Use HTTPS for submissions
   - Rate limit form submissions
   - Store sensitive data securely

4. **Accessibility**:
   - Use proper labels and ARIA attributes
   - Ensure keyboard navigation
   - Provide error announcements
   - Support screen readers

## Integration Examples

### Contact Form with Email Notification

```jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, subject, message })
  })
  
  if (response.ok) {
    showSuccessMessage()
    resetForm()
  }
}
```

### Consultation Form with Validation

```jsx
const validateForm = () => {
  if (!name) return 'Name is required'
  if (!email.includes('@')) return 'Invalid email'
  if (!phone) return 'Phone is required'
  return null
}

if (validateForm()) {
  setError(validateForm())
  return
}
```

## Contact Resources

- **Contact Page**: https://chaturasolutions.com/contact
- **Consultation**: https://chaturasolutions.com/educational-consultation
- **Email**: support@chaturasolutions.com
- **Phone**: +91-416-4055743

For additional support, see the main documentation at `/docs/README.md`
