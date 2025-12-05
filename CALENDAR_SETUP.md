# 📅 Finalizing Your Calendar Setup

You are one step away from accepting bookings! Follow these simple steps to connect your Cal.com account.

## 1. Get Your Cal.com Link

1. Go to [Cal.com](https://cal.com) and log in (or sign up for free).
2. Go to the **Event Types** page.
3. You should see a default event (like "15 Min Meeting") or you can create a new one called "Strategy Call".
4. Copy the **Link** for that event.
   - It will look like: `cal.com/yourname/15min`
   - or: `cal.com/agency-name/strategy-call`

## 2. Update Your Code

1. Open the file: `src/components/Calendar.jsx`
2. Scroll to **line 67** (approx).
3. Look for this line:
   ```jsx
   data-cal-link="YOUR_USERNAME/YOUR_EVENT"
   ```
4. Replace `YOUR_USERNAME/YOUR_EVENT` with the part of your link *after* `cal.com/`.

   **Example:**
   - If your link is `cal.com/john-doe/chat`, use:
     ```jsx
     data-cal-link="john-doe/chat"
     ```

## 3. Verify It Works

1. Go to your local site: [http://localhost:5173/#calendar](http://localhost:5173/#calendar)
2. You should now see your actual available times instead of the loading spinner.
3. Test clicking a time to make sure the booking flow opens correctly.

## Optional: Use a Simple Button Instead

If you prefer not to embed the full calendar and just want a button that opens your booking page in a new tab:

1. In `src/components/Calendar.jsx`, comment out the `<div className="cal-embed" ...>` section.
2. Uncomment the section at the bottom labeled `Alternative: Direct Link Button`.
3. Update the `href` with your full Cal.com URL.
