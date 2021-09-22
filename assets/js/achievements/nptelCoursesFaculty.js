root = document.getElementById('nptel_courses_faculty_table')

headings = [
    "Sr. No.",
    "Name of Faculty",
    "Name of Course",
    "Duration (Weeks)",
    "Score",
    "Certificate type"
];

// array of rows without sr. no.
data = [
    ["Dr. S.T. Mali", "Municipal Solid Waste Management", "12", "60%", "Elite"],
    ["Mr. T.S. Khambekar", "Municipal Solid Waste management", "12", "67%", "Elite"]
];

addOrderedTable(root, headings, data);