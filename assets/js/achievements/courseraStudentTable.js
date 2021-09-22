
headings = [
    "Sr. No.",
    "Name of Student",
    "Roll No",
    "Coursera courses completed till 25.05.2020",
    "Grade in %",
    "Certificate Number"
];


// table1
root = document.getElementById('coursera_courses_student_table1');

data = [
    ["Aditya V. Rudrakanthwar", "SECV1 52", "Successful Negotiation: Essential Strategies and Skills", "84.4", "JGD2RUQSA585"],
    ["Aditya V. Rudrakanthwar", "SECV1 52", "The Science of Well-Being", "88.7", "N89CQM79G75L"],
    ["Aditya V. Rudrakanthwar", "SECV1 52", "Trading Basics", "70.4", "SCDSH59ZSXRL"],
    ["Aditya V. Rudrakanthwar", "SECV1 52", "Introduction to Psychology.", "89.4", "U4FNLCFUZS9E"],
    ["Shubham T. Bhosale", "SECV1 09", "Greening the Economy: Sustainable Cities", "75", "KY6R995D8HRZ"],
    ["Manjitsinh I. Girase", "SECV1 15", "Planning & Design of Sanitation Systems and Technologies.", "92", "58P7MPHVTS4A"],
    ["Bhavik M. Shete", "SECV1 53", "Introduction to Household Water Treatment and Safe Storage", "69", "T5LGJAM85LXM"],
    ["Bhavik M. Shete", "SECV1 53", "Develop a Company Website with Wix", "100", "S4H7RTXWWPBU"],
    ["Vikram N. Jadhav", "SECV1 21", "Budgeting & Scheduling Projects", "100", "G3MAWDBLDMVJ"],
    ["Sumesh S. Aher", "SECV1 01", "Develop a Company Website with Wix", "88", "AX49E7NE7MGS"],
    ["Sumesh S. Aher", "SECV1 01", "Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential", "92", "NTS52ZUQVLCB"]
]

addOrderedTable(root, headings, data);


// table2
root = document.getElementById('coursera_courses_student_table2');

data = [
    ["Renuka Y. Kurepatil", "TECV 138", "Budgeting & Scheduling Projects", "98", "R7S9C83342DW"],
    ["Renuka Y. Kurepatil", "TECV 138", "Autodesk Certified Professional: AutoCAD for Design and Drafting Exam Prep", "89.3", "6Z5SL5L9HGTV"],
    ["Asha Shende", "TECV 157", "Greening the Economy: Sustainable Cities", "82", "3FGZCXEEN9XK"],
    ["Asha Shende", "TECV 157", "The Manager's Toolkit: A Practical Guide to Managing People at Work", "89", "YBX75PRAX6QD"]
]

addOrderedTable(root, headings, data);