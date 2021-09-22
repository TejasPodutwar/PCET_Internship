root = document.getElementById('other_courses_faculty_table')

headings = [
    "Sr. No.",
    "Name of Faculty",
    "Name of Course",
    "Course Conducted By",
    "Date of Completion"
];

// array of rows without sr. no.
data = [
    ["Mrs. S.S Motegaonkar", "Water Distribution Design and Modeling Fundamentals using WaterCAD and WaterGEMS (Metric) CONNECT Edition | EN", "Bentley Institute and training partner DTK HydroNET Solutions", "3rd – 5th July, 2020"],
    ["Mrs. N.S Sane", "Water Distribution Design and Modeling Fundamentals using WaterCAD and WaterGEMS (Metric) CONNECT Edition | EN", "Bentley Institute and raining partner DTK HydroNET Solutions", "3rd – 5th July, 2020"],
    ["Mr. S. P. Gaikwad", "One Week Online Certificate Course on DIGITAL TEACHING TECHIQUES", "ICT Academy partners with Atos and Synte", "12th - 17th October, 2020"],
    ["Ms. Anushree Chandragade", "One Week Online Certificate Course on DIGITAL TEACHING TECHIQUES", "ICT Academy partners with Atos and Syntel", "12th - 17th October, 2020"],
    ["Ms. Anushree Chandragade", "OpenFlows - Calibrating a Sewer Collection System Model", "Bentley Institute", "13th August, 2020"],
    ["Ms. Anushree Chandragade", "Open Flows - Overview of Hydraulic Transient Analysis with HAMMER", "Bentley Institute", "9th July, 2020"],
    ["Ms. Anushree Chandragade", "Water Distribution Design and Modeling Fundamentals using WaterCAD and WaterGEMS (Metric) CONNECT Edition | EN", "Bentley Institute and training partner DTK HydroNET Solutions", "3rd – 5th July, 2020"],
    ["Mr. Parag Ankad", "Stiffness Method for Truss Analysis with Python (8 week course)", "Dr Seán Carroll. (Senior lecturer at the University of Exeter in the UK)", "31st July - 30th October, 2020"],
    ["Mr. Parag Ankad", "6 week training on ETABS & SAFE", "Structurex Pvt. Ltd.", "29th June - 10th August, 2020"],
    ["Mr. D.S. Lal", "Excel Crash Course", "Corporate Finance Institute", "2nd May, 2020"],
    ["Mr. D.S. Lal", "Reading Financial Statement", "Corporate Finance Institute", "14th April, 2020"],
    ["Mr. D.S. Lal", "Introduction to Corporate Finance", "Corporate Finance Institute", "19th March, 2020"],
    ["Mr. D.S. Lal", "Accounting Fundamentals", "Corporate Finance Institute", "12th March, 2020"],
    ["Mr. R.S. Chaudhari", "Excel Crash Course", "Corporate Finance Institute", "2nd May, 2020"],
    ["Mr. R.S. Chaudhari", "Reading Financial Statement", "Corporate Finance Institute", "25th April, 2020"],
    ["Mr. R.S. Chaudhari", "Accounting Fundamentals", "Corporate Finance Institute", "23rd April ,2020"],
    ["Mr. R.S. Chaudhari", "Diploma in Workplace Safety and Health", "Alison", "24th May, 2020"],
    ["Mr. R.S. Chaudhari", "Workstation Ergonomics", "Alison", "24th May, 2020"],
    ["Mr. S.P. Gaikwad", "MATLAB Onramp", "MathWorks Training Services", "27th May, 2020"],
    ["Mr. Parag Ankad", "MATLAB Onramp", "MathWorks Training Services", "18th May, 2020"]
];

addOrderedTable(root, headings, data);