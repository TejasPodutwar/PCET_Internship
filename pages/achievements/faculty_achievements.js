root = document.getElementById('coursera_courses_faculty_table')

headings = [
    "Sr. No.",
    "Name of Faculty",
    "Name of Course",
    "Duration (weeks)",
    "Grade (%)",
    "Certificate Number"
];

// array of rows without sr. no.
data = [
    ["Dr. S.T Mali", "The Sustainable Development Goals – A global, transdisciplinary vision for the future (University of Copenhagen)", "3", "93", "AMQAZQ5FF9LF"],
    ["Dr. S.T Mali", "Introduction to Household Water Treatment and Safety ( École Polytechnique Fédérale de Lausanne)", "5", "63", "N9PJM4HYUVP6"],
    ["Dr. S.T Mali", "Planning & Design of Sanitation Systems and Technologies ( École Polytechnique Fédérale de Lausanne)", "5", "80", "6XJ6TG3EXLVD"],
    ["Mr. R.S. Chaudhari", "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity", "5", "90", "RWRD2TNM5RQQ"],
    ["Mrs. Renuka Purohit", "Preparing to Manage Human Resources (University of Minnesota)", "4", "100", "7CKKMQ2F7MW9"],
    ["Mrs. Renuka Purohit", "Work Smarter, Not Harder: Time Management for Personal & Professional Productivity", "5", "90", "HAU4R22SKGCU"],
    ["Mrs. N. S. Sane", "Natural Attenuation of Groundwater Contaminants: New Paradigms, Technologies, and Applications (RICE)", "9", "80", "BCGZD62Q5LBY"],
    ["Dr. S.T Mali", "Introduction to Faecal Sludge Management (EOFDL)", "5", "85", "GBZ29T8EEY5P"],
    ["Dr. S.T Mali", "Municipal Solid Waste Management in Developing Countries (EOFDL)", "5", "75", "4XQ3QPHP7DE4"],
    ["Dr. S.T Mali", "Air Pollution -a Global Threat to our health (University of Copenhagen)", "3", "96", "P6N7BU3ALUMH"],
    ["Mrs. S.S. Motegaonkar", "Water Resources Management and Policy (Universite De Geneve)", "5", "96", "DUYFGDWGH9JG"],
    ["Mr. R.S. Chaudhari", "Preparing to Manage Human Resources (University of Minnesota)", "4", "83.33", "MKNMMZVXXF4X"],
    ["Mr. R.S. Chaudhari", "Introduction to Engineering Mechanics (Georgia Institute of Tech)", "4", "100", "ZGVPV9DCKCTV"],
    ["Mrs. Renuka Purohit", "Introduction to Engineering Mechanics (Georgia Institute of Tech)", "4", "100", "DCUN3P8Z7PR5"],
    ["Mrs. Renuka Purohit", "Applications in Engineering Mechanics", "4", "100", "H3Q6ZC6SD2YR"],
    ["Mrs. Pratima Kalokhe", "Introduction to Engineering Mechanics (Georgia Institute of Tech)", "4", "100", "QKGQDJ94ZS9X"],
    ["Mr. T.S. Khambekar", "Introduction to Indoor Air Quality (Hongkong University of Science and Technology)", "4", "87", "CU2EFU7NVXGS"],
    ["Mr. T.S. Khambekar", "Municipal Solid Waste Management in Developing", "5", "86.20", "A4EPGWHU39G4"],
    ["Mr. T.S. Khambeka", "Disaster Preparedness (University of Pittsburgh)", "7", "92", "B6V957E9B6SQ"],
    ["Mr. T.S. Khambekar", "How to Write and Publish a Scientific Paper", "4", "85.70", "NNWHGGQZZKQK"],
    ["Mr. S. P. Gaikwad", "Probability and Statistics: To p or not to p? (University of London)", "6", "97", "DAHH53TEQHS4"],
    ["Ms. Anushree Chandragade", "Disaster Preparedness (University of Pittsburgh)", "7", "88", "HWQMK2DT4ERX"],
    ["Ms. Anushree Chandragade", "Municipal Solid Waste Management in Developing Countries (EOFDL)", "5", "73", "UVQ98LFME537"],
    ["Ms. Anushree Chandragade", "Introduction to Faecal Sludge Management (EOFDL)", "5", "70", "VGPS24V5EE6Z"],
    ["Ms. Anushree Chandragade", "Air Pollution -a Global Threat to our health (University of Copenhagen)", "3", "82", "ME3NLUPLDFDR"],
    ["Mr. Parag Ankad", "Python Data Structures (University of Michigan)", "7", "100", "SN6KS34YG7Y9"],
    ["Mr. Parag Ankad", "Programming for everybody (Getting started with Python)", "7", "100", "8KNGRVUPTQAR"]
];

addOrderedTable(root, headings, data);


/////////////////////////////////


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


//////////////////////////////


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


////////////////////////////////


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