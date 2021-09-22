root = document.getElementById('nptel_courses_registered_faculty_table')

headings = [
    "Sr. No.",
    "Name of Faculty",
    "Name of Course",
    "Status",
    "Status up till 31st May, 2020"
];

// array of rows without sr. no.
data = [
    ["Dr. S.T Mali", "Water Supply Engineering", "12", "Registered and Enroll for Exam"],
    ["Mrs. N.S Sane", "Hydraulic Engineering", "12", "Registered"],
    ["Ms. Anushree Chandragade", "Electronic Waste Management- Issues and Challenges (IIT Bombay)", "4", "Registered and Enroll for Exam- Assignments Completed. Final Exam date not yet announced"],
    ["Mr. Parag Ankad", "Engineering Mechanics: Statics and Dynamics", "8", "Registered"]
];

addOrderedTable(root, headings, data);