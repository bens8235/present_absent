**Project Overview**

I chose to store names and attendance status in Supabase to persist changes. All pages are server-side rendered to improve SEO and ensure data is preloaded. Components are client-side to enable greater functionality and flexibility. I also decided to keep server-side asynchronous functions in a dedicated library, allowing them to be reused in client components. Additionally, I created a TypeScript interfaces file for reusability.

Some changes I would make if I spent more time on this project:

1. Implement authentication to ensure users can only edit their own data.
2. Update status using a unique ID instead of names to avoid conflicts with duplicate names.
3. Fetch database data in the layout to pass it to pages, minimizing redundant database calls.
4. Add the ability to delete names, including a button that displays all names with a delete checkbox for bulk deletion or similar functionality.
5. Expand testing to cover additional components.
6. Improve accessibility by making ARIA attributes more comprehensive and adding better keyboard navigation and other enhancements.
