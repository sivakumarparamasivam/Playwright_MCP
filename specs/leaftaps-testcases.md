# Leaftaps Test Cases

## Test Case 1 — Login (Happy path)
- **Objective:** Verify user can log in to http://leaftaps.com/opentaps using provided credentials.
- **Assumptions:** Browser is launched with a fresh session.
- **Preconditions:** None.
- **Test Data:** Username: ``  Password: ``
- **Steps:**
  1. Navigate to `http://leaftaps.com/opentaps`.
  2. Enter the username `` into the username field.
  3. Enter the password `` into the password field.
  4. Click the Login button.
- **Expected Result:** The user is logged in and the `CRM/SFA` link is visible.
- **Success Criteria:** Presence of `CRM/SFA` link or dashboard text indicating successful login.
- **Failure Conditions:** Login error message shown or page remains on the login screen.

## Test Case 2 — Navigate to Create Lead
- **Objective:** From a logged-in session, navigate to the Create Lead form.
- **Assumptions:** User is logged in (use Test Case 1 if needed).
- **Test Data:** None additional.
- **Steps:**
  1. From the landing/dashboard page, click the `CRM/SFA` link.
  2. Click the `Leads` link.
  3. Click the `Create Lead` link.
- **Expected Result:** The Create Lead form is displayed with fields like Company Name, First Name, Last Name present.
- **Success Criteria:** Presence of `#createLeadForm_companyName` and other form fields.
- **Failure Conditions:** Navigation links not present or Create Lead page not displayed.

---

## Notes and Next Steps
- Add automated Playwright tests (see corresponding spec file).
- Add negative tests (invalid credentials), boundary checks, and data-driven variants.
