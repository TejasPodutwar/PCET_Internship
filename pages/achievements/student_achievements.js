
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


// table3
root = document.getElementById('coursera_courses_student_table3');

data = [
    ["Viraj U. Bhandari", "BECV 107", "Sustainable Development in the 21st Century with Ban ki moon", "92.6", "5UE7K8LBTE6V"],
    ["Viraj U. Bhandari", "BECV 107", "Effective Problem-Solving and Decision-Making.", "100", "6A3M7UTSH26B"],
    ["Viraj U. Bhandari", "BECV 107", "The Art of Negotiation.", "100", "DVN4CSK2E8PM"],
    ["Viraj U. Bhandari", "BECV 107", "Managing Project Risks and Changes.", "100", "E6LVBDFRXT7U"],
    ["Viraj U. Bhandari", "BECV 107", "Initiating and Planning Projects", "100", "R9JST2XWJYQE"],
    ["Viraj U. Bhandari", "BECV 107", "High-Impact Business Writing", "100", "SSV2FTB2V3XH"],
    ["Shubhendu A. Kesarkar", "BECV 132", "Autodesk Certified Professional: AutoCAD for Design and Drafting Exam Prepration.", "90.8", "EWED575EHG22"],
    ["Rohit S. Datir", "BECV 113", "Business Strategy", "88", "L98L6TMT5UTC"],
    ["Rohit S. Datir", "BECV 113", "Excell Skills for Business: Essentials", "92", "WJLDWYTLCWT4"],
    ["Rohit S. Datir", "BECV 113", "Excel Skills for Business: Intermediate I", "98", "K7AYSYLTKZQ7"],
    ["Rohit S. Datir", "BECV 113", "Leading Teams", "93", "ULTF83N6AEKK"],
    ["Rohit S. Datir", "BECV 113", "Smart Cities – Management of Smart Urban Infrastructures", "98", "LCAHF4JCT47U"],
    ["Rohit S. Datir", "BECV 113", "Successful Negotiation: Essential Strategies and Skills", "89", "RVEAJU5BBNWX"],
    ["Param R. Desai", "BECV 184", "Successful Negotiation: Essential Strategies and Skills.", "93.3", "CJL4ADMSGF32"],
    ["Param R. Desai", "BECV 184", "Marketing Strategy for Entrepreneurs.", "83.2", "ZPJWL4592XHQ"],
    ["Param R. Desai", "BECV 184", "Marketing Analytics", "82.3", "7FJ76ECNLWXV"],
    ["Param R. Desai", "BECV 184", "Design Thinking for Innovation.", "94.4", "EQ23TQS9PJ2T"],
    ["Param R. Desai", "BECV 184", "Mindshift: Break Through Obstacles to Learning and Discover Your Hidden Potential.", "93.1", "GZWJTDNFUK97"],
    ["Param R. Desai", "BECV 184", "Sales Training: Techniques for a Human-Centric Sales Process.", "95.1", "9MZGCVNN5KVP"],
    ["Utkarsha D. Golande", "BECV 123", "Introduction to Engineering Mechanics.", "80", "G3HSLZEX9XHN"],
    ["Parimal B. Sinalkar", "BECV 169", "Introduction to Engineering Mechanics.", "93", "95J7AP6KBDSD"],
    ["Vikas V. Singh", "BECV 170", "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity.", "100", "RVHRZ577PFJV"]
];

addOrderedTable(root, headings, data);


////////////////////////////////
headings = [
    "Sr. No.",
    "Name of student",
    "Class",
    "Name of course",
    "Course Conducted by"
]

root = document.getElementById('other_courses_student_table1');
data = [
    ["Jaidip Patil", "TE Civil", "Career Edge-Knockdown the lockdown", "TCS iON"],
    ["Avishkar Tele", "TE Civil", "English Score by British Council", "British Council"],
    ["Mandlik Sahil", "TE Civil", "CEFR B2 in a test of English Proficiency", "British Council"],
    ["Shivani Kamat", "TE Civil", "Earthquakes vs Buildings Engineering", "Udemy"],
    ["Shivani Kamat", "TE Civil", "Engineering Ethics Building a strong foundation", "IEEE"],
    ["Shivani Kamat", "TE Civil", "Transformational Leadership", "Alison"],
    ["Shivani Kamat", "TE Civil", "Industry ready civil RCC module 4 weeks internship", "Know How organization."],
    ["Shivani Kamat", "TE Civil", "English Score", "British Council"],
    ["Simran Khan", "TE Civil", "English Proficiency", "British Council"],
    ["Nikhil Bhanavse", "TE Civil", "Online course on “Geographical Information System”<br>Course Duration- 18 hours (28th September to 15th October, 2020)", "Indian Institute of Remote Sensing (IIRS), ISRO,<br>Dehradun"]
]
addOrderedTable(root, headings, data);

root = document.getElementById('other_courses_student_table2');
data = [
    ["Aishwarya Bhore", "BE Civil", "Online course on “Geographical Information System” Course Duration- 18 hours (28th September to 15 th October, 2020)", "Indian Institute of Remote Sensing (IIRS), ISRO,<br>Dehradun"],
    ["Shraddha Amrutkar", "BE Civil", "Online course on “Geographical Information System”<br>Course Duration- 18 hours (28th September to 15th October, 2020)", "Indian Institute of Remote Sensing (IIRS), ISRO,<br>Dehradun"],
    ["Renuka Gaikwad", "BE Civil", "Online course on “Geographical Information System”<br>Course Duration- 18 hours (28th September to 15th October, 2020)", "Indian Institute of Remote Sensing (IIRS), ISRO, <br>Dehradun"]
]
addOrderedTable(root, headings, data);

root = document.getElementById('other_courses_student_table3');
data = [
    ["Pallavi Salunkhe", "ME CM", "English Score by British Council", "British Council"],
    ["Pallavi Salunkhe", "ME CM", "Primavera P6 Professional Advanced English - Student Kit", "Infinity PMC Private Limited"],
    ["Pallavi Salunkhe", "ME CM", "AutoCAD Essentials", "A.P Shah Institute of Technology in association with AUTODESK"]
]
addOrderedTable(root, headings, data);

headings = [
    "Sr. No.",
    "Name of Student",
    "Name of Course",
    "Course conducted by"
]
root = document.getElementById('other_courses_student_table4');
data = [
    ["Pallavi Salunkhe", "Accounting Fundamentals, Reading Financial Statement", "Corporate Finance Institute"],
    ["Pradnya Lokhande", "Accounting Fundamentals, Reading Financial Statement", "Corporate Finance Institute"],
    ["Krishna Gupta", "Introduction to Corporate Finance, Accounting Fundamentals, Reading Financial Statement, Initiating and Planning Project, Budgeting & Scheduling, Introduction to Corporate Finance", "Corporate Finance Institute and Coursera"],
    ["Akash Govalkar", "Introduction to Corporate Finance, Accounting Fundamentals, Reading Financial Statement, Budgeting & Scheduling", "Corporate Finance Institute and Coursera"],
    ["Akshay Pudke", "Accounting Fundamentals, Reading Financial Statement, Initiating and Planning Project, Budgeting & Scheduling", "Corporate Finance Institute and Coursera"]
]
addOrderedTable(root, headings, data);


////////////////////////////////////////
headings = [
    "Sr. No.",
    "Name of Student",
    "Year and Division",
    "Event",
    "Organized by",
    "Prize details"
]

root = document.getElementById("student_participation_and_awards_table1")
data = [
    ["Renuka Gaikwad", "TE", "Protective Equipment Making against Covid-19-Techno spark 2020", "PCCOER", "Winner"],
    ["Hrutuja Chaudhari", "TE", "Paper Presentation- Techno spark 2020", "PCCOER", "Winner"],
    ["Amarnath Tayde", "TE", "Township Planning", "VIIT, Pune", "Winner"],
    ["Amarnath Tayde", "TE", "TEND- IT", "VIIT, Pune", "Winner"],
    ["Ajay Pawar", "TE", "Nirmaan- Crossover", "VIIT, Pune", "Winner"],
    ["Ajay Pawar", "TE", "Township Planning", "VIIT, Pune", "Winner"],
    ["Parmeshwar Kolnure", "TE", "Township Planning", "VIIT, Pune", "Winner"],
    ["Parmeshwar Kolnure", "TE", "TEND-IT", "VIIT, Pune", "Winner"],
    ["Swapnil Hire", "TE", "Nirmaan- Crossover", "VIIT, Pune", "Winner"],
    ["Swapnil Hire", "TE", "TEND-IT", "VIIT, Pune", "Runner-Up"]
]
addOrderedTable(root, headings, data)

root = document.getElementById("student_participation_and_awards_table2");
data = [
    ["Mayuresh Bajbalkar", "BE", "Paper Presentation", "Technospark2020" , "PCCOE & R, Ravet", "1st Position"],
    ["Rushikesh Bangar", "BE", "Paper Presentation,Technospark2020", "PCCOE & R, Ravet", "1st Position"],
    // ["Pratik Pawar", "BE", "Paper Presentation, Technospark2020", ]
]
addOrderedTable(root, headings, data);


////////////////////////////////////////

headings = [
    "Sr. No.",
    "Name of Participants",
    "Class/ Div",
    "Topic",
    "Category"
]

root = document.getElementById("student_paper_presentation_by_be_table")

data = [
    ["Khushaboo Lohakare","BE Civil","Water Hyacinth into Nutrient Rich Fertilizer by Rotary Drum","Research Paper"],
    ["Supriya Joshi","BE Civil","Water Hyacinth into Nutrient Rich Fertilizer by Rotary Drum","Research Paper"],
    ["Pooja Patil","BE Civil","Water Hyacinth into Nutrient Rich Fertilizer by Rotary Drum","Research Paper"],
    ["Vaishnavi Shinde","BE Civil","Water Hyacinth into Nutrient Rich Fertilizer by Rotary Drum","Research Paper"],
    ["Saurabh Khadkekar","BE Civil","Water Hyacinth into Nutrient Rich Fertilizer by Rotary Drum","Research Paper"],
    ["Vishal Sharma","BE Civil","Recycling and Reuse of Water Treatment Plant Sludge as a coagulant in sewage treatment plant","Research Idea"],
    ["Wasim Mukhtar","BE Civil","Recycling and Reuse of Water Treatment Plant Sludge as a coagulant in sewage treatment plant","Research Idea"],
    ["Rajshri Raut","BE Civil","Recycling and Reuse of Water Treatment Plant Sludge as a coagulant in sewage treatment plant","Research Idea"],
    ["Raj Sonune","BE Civil","Recycling and Reuse of Water Treatment Plant Sludge as a coagulant in sewage treatment plant","Research Idea"],
    ["Hrutuja Vijay Chaudhari","BE Civil","Floating treatment wetlands: biological buoyant filters for wastewater reclamation","Research Paper"]
    
]

addOrderedTable(root, headings, data);