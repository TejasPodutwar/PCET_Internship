root = document.getElementById('staff_courses_table')

headings = [
    "Sr. No.",
    "Name of Staff",
    "Participated in",
    "Organized by",
    "Duration"
];

// array of rows without sr. no.
data = [
    ["Mrs Rakhi Dhevhare", "Coursera – Excel Skills for Business: Essentials", "Coursera (MACQUARIE University Sydney, Australia)", "6 Weeks"],
    ["Mrs Pratibha Dighe", "Coursera – Excel Skills for Business: Essentials", "Coursera (MACQUARIE University Sydney, Australia)", "6 Weeks"],
    ["Ms. Puja Kanhurkar", "Coursera – Excel Skills for Business: Essentials", "Coursera (MACQUARIE University Sydney, Australia)", "6 Weeks"],
    ["Mr. Sitaram S. Hamde", "Coursera – Excel Skills for Business: Essentials", "Coursera (MACQUARIE University Sydney, Australia)", "6 Weeks"],
    ["Mr. Sitaram S. Hamde", "Mechanics of materials: Fundamental of stress & axial loading", "Georgia Institute of Technology", "5 Weeks"],
    ["Mr. Sitaram S. Hamde", "Clustering geolocation data Intelligently in Python", "Project Network", "1 Week"],
    ["Mr. Sitaram S. Hamde", "Planning a patient safety or quality improvement", "JOHNS HOPKINS", "4 Weeks"]
];

addOrderedTable(root, headings, data);


////////////////////////////


root = document.getElementById('staff_workshop_table')

headings = [
    "Sr. No.",
    "Name of Staff",
    "Participated in",
    "Conducted by",
    "Date of Completion"
];

// array of rows without sr. no.
data = [
    ["Mrs. Rakhi Devhare", "Webinar on \"Leadership Development in Women Professional Entrants\".", "Electronics and Telecommunication Department, AISSMS COE, Pune", "30th May, 2020"],
    ["Mrs. Rakhi Devhare", "Webinar on Water Proofing Technologies by Er. Jayant Khode.", "Civil Department, PCCOE Nigdi", "25th May, 2020"],
    ["Mrs. Rakhi Devhare", "Three Day Online Workshop on MS-Office.", "Computer Department, Priyadarshini College of Engineering, Nagpur", "18th - 20th May, 2020"],
    ["Ms. Puja Kanhurkar", "Webinar on Water Proofing Technologies by Er. Jayant.", "-", "-"],
    ["Ms. Puja Kanhurkar", "Webinar on \"Leadership Development in Women Professional Entrants\".", "Department of Electronics and Telecommunication, AISSMS COE, Pune", "30th May, 2020"],
    ["Mr. Sitaram Hamde Kanse", "Basics of Surveying", "Dr. Vithalrao Vikhe Patil College of Engineering, Ahmednagar", "27th May, 2020"],
    ["Akshay Kanse", "Webinar on Water Proofing Techniques by Er. Jayant Khode", "Civil Department, PCCOE, Nigdi", "25th May, 2020"]
];

addOrderedTable(root, headings, data);