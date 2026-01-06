const bankLoanDocuments = [
  // --- 1. State Bank of India (SBI) ---
  {
    bank: "State Bank of India",
    loans: {
      "Home Loan": {
        requiredDocuments: [
          "Identity Proof (Aadhaar, Passport, Driving Licence, PAN)",
          "Address Proof (Aadhaar, Passport, Utility Bill)",
          "Income Proof (Salary Slips last 3 months, Form 16, IT Returns)",
          "Bank Statement (last 6 months)",
          "Property Documents (Sale Deed, Title Deed, NOC, Approved Plan)",
        ],
        notes: [
          "Co-applicant KYC required if joint loan",
          "For self-employed: IT returns of last 3 years + Business Registration",
        ],
      },
      "Personal Loan": {
        requiredDocuments: [
          "Identity Proof",
          "Address Proof",
          "PAN Card",
          "Latest Salary Slips (3 months)",
          "Bank Statements (last 6 months)",
          "Employment Proof",
        ],
        notes: [
          "Good CIBIL score (700+) is mandatory",
          "Pre-approved offers available for existing SBI customers",
        ],
      },
      "Car Loan": {
        requiredDocuments: [
          "Identity Proof",
          "Address Proof",
          "Income Proof (Salary Slip/ITR)",
          "Bank Statement (6 months)",
          "Proforma Invoice of Car",
        ],
        notes: [
          "Loan sanctioned only on authorized dealer invoice",
          "For used cars: Valuation report required",
        ],
      },
      "Education Loan": {
        requiredDocuments: [
          "Identity Proof",
          "Address Proof",
          "PAN Card",
          "Proof of Admission (Offer Letter, Fee Structure)",
          "Academic Records",
          "Co-borrower’s Income Proof",
        ],
        notes: [
          "Collateral security may be required if loan > 7.5 Lakhs",
          "Moratorium: Course period + 1 year",
        ],
      },
      "Business Loan": {
        requiredDocuments: [
          "Identity Proof of Proprietor/Partners/Directors",
          "Address Proof of Business & Owner",
          "PAN Card (Business & Promoter)",
          "Business Registration Certificate",
          "GST Returns",
          "IT Returns (last 3 years)",
          "Bank Statement (12 months)",
        ],
        notes: [
          "Collateral or CGTMSE scheme applicable",
          "Detailed Project Report required for large loans",
        ],
      },
      "Gold Loan": {
        requiredDocuments: [
          "Identity Proof",
          "Address Proof",
          "Demand Promissory Note",
          "Witness Letter",
          "Gold Purity Certificate",
        ],
        notes: ["Minimum 18 Karat gold accepted", "Flexible repayment tenure"],
      },
      "Agriculture Loan": {
        requiredDocuments: [
          "Identity Proof",
          "Address Proof",
          "Land Ownership Proof (7/12 extract)",
          "Crop Cultivation Details",
          "Income Certificate from Tehsildar",
        ],
        notes: ["Loan depends on land holding size and crop pattern"],
      },
      "Loan Against Property": {
        requiredDocuments: [
          "KYC Documents",
          "Property Ownership Documents",
          "Income Proof (3 years ITR)",
          "Existing Loan Details",
          "Bank Statements",
        ],
        notes: ["Property valuation report is mandatory"],
      },
      "Consumer Durable Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Basic Income Proof",
          "Pro-forma Invoice of Durable Item",
        ],
        notes: ["Available at select partner stores"],
      },
      "Credit Card Loan": {
        requiredDocuments: [
          "Credit Card Copy",
          "KYC Documents (Limited)",
          "Recent Bank Statement",
        ],
        notes: ["Pre-approved, usually no extra documentation"],
      },
      "Overdraft / Cash Credit": {
        requiredDocuments: [
          "KYC Documents",
          "Business Registration Proof",
          "Collateral Documents (if secured)",
          "Latest Audited Financials",
        ],
        notes: ["Annual review of limits is conducted"],
      },
      "Working Capital Loan": {
        requiredDocuments: [
          "Business Plan/Project Report",
          "Stock and Debtor Statements",
          "KYC Documents",
          "Tax Returns (3 years)",
        ],
        notes: ["Based on inventory and receivables cycle"],
      },
      "Microfinance Loan": {
        requiredDocuments: [
          "Aadhar/Voter ID",
          "Proof of Business Activity",
          "Group Agreement (for SHGs)",
        ],
        notes: ["Group lending model is common"],
      },
      "Mudra Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Proof of SC/ST/OBC (if applicable)",
          "Business Setup Proof",
          "Quotation for Machinery/Equipment",
        ],
        notes: ["Loan schemes: Shishu, Kishore, Tarun"],
      },
      "Top-up Loan": {
        requiredDocuments: [
          "Original Loan Agreement",
          "Last 12 months Repayment History",
          "Updated Income Proof",
          "KYC Documents (for update)",
        ],
        notes: ["Minimum 1 year of satisfactory repayment required"],
      },
    },
  },
  // --- 2. HDFC Bank ---
  {
    bank: "HDFC Bank",
    loans: {
      "Home Loan": {
        requiredDocuments: [
          "KYC Documents (ID & Address Proof)",
          "PAN Card",
          "Income Proof (Salary Slips/ITR)",
          "Bank Statement (last 6 months)",
          "Property Documents",
        ],
        notes: [
          "Faster approval for salaried employees of listed corporates",
          "Top-up loan available after 12 months",
        ],
      },
      "Personal Loan": {
        requiredDocuments: [
          "KYC Documents",
          "PAN Card",
          "Salary Slips (last 3 months)",
          "Bank Statement (last 6 months)",
        ],
        notes: [
          "Minimum net monthly income: ₹25,000 (varies by city)",
          "Instant disbursal for existing HDFC account holders",
        ],
      },
      "Car Loan": {
        requiredDocuments: [
          "KYC Documents",
          "PAN Card",
          "Bank Statement (6 months)",
          "Salary Slips/ITR",
          "Car Invoice/Quotation",
        ],
        notes: [
          "100% funding on select models",
          "Pre-approved loans for existing customers",
        ],
      },
      "Education Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Admission Letter",
          "Fee Schedule",
          "Academic Certificates",
          "Co-borrower’s IT Returns & Salary Proof",
        ],
        notes: [
          "Loan covers tuition, hostel & travel expenses",
          "Tax rebate under Section 80E available",
        ],
      },
      "Business Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Registration",
          "PAN & GST",
          "IT Returns (3 years)",
          "Bank Statement (12 months)",
          "Financial Statements (Balance Sheet, P&L)",
        ],
        notes: [
          "Collateral not required for small ticket loans",
          "Prepayment allowed with nominal charges",
        ],
      },
      "Gold Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Valuer Certificate",
          "Gold Ornament Details",
          "Completed Application Form",
        ],
        notes: ["Quick disbursal within 45 minutes"],
      },
      "Agriculture Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Land Record Extract (7/12)",
          "Crop Inspection Report",
          "Village Patwari Income Report",
        ],
        notes: ["Loans for crop production, machinery, and storage"],
      },
      "Loan Against Property": {
        requiredDocuments: [
          "KYC Documents",
          "Occupancy Certificate",
          "Encumbrance Certificate",
          "Income Proof (3 years)",
        ],
        notes: ["Residential and commercial property accepted"],
      },
      "Consumer Durable Loan": {
        requiredDocuments: [
          "KYC Documents",
          "One Passport Size Photo",
          "Retailer's Invoice",
        ],
        notes: ["No down payment schemes available"],
      },
      "Credit Card Loan": {
        requiredDocuments: [
          "Active HDFC Credit Card",
          "KYC Documents (Optional)",
          "Signed Loan Request Form",
        ],
        notes: [
          "Instant loan with no documentation required for pre-approved customers",
        ],
      },
      "Overdraft / Cash Credit": {
        requiredDocuments: [
          "KYC Documents",
          "Letter of Continuity",
          "Audited Financials",
          "Stock & Book Debt Statements",
        ],
        notes: ["Limit based on business turnover and collateral"],
      },
      "Working Capital Loan": {
        requiredDocuments: [
          "Business Profile",
          "Collateral Security Documents",
          "Tax Clearance Certificate",
        ],
        notes: ["Structured for SMEs and corporate clients"],
      },
      "Microfinance Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Proof of Residence",
          "Business Photo Proof",
        ],
        notes: ["Focus on women's Self Help Groups (SHGs)"],
      },
      "Mudra Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Machinery Quotation",
          "Rent/Lease Agreement for Business Premises",
        ],
        notes: ["Schemes are Shishu, Kishore, and Tarun"],
      },
      "Top-up Loan": {
        requiredDocuments: [
          "KYC Documents (Optional)",
          "Updated Loan Statement",
          "Latest Income Documents",
        ],
        notes: ["Can be used for any purpose, including home renovation"],
      },
    },
  },
  // --- 3. ICICI Bank ---
  {
    bank: "ICICI Bank",
    loans: {
      "Home Loan": {
        requiredDocuments: [
          "Application Form & Photo",
          "KYC Documents",
          "Processing Fee Cheque",
          "Income Proof",
          "Title Deeds of Property",
        ],
        notes: [
          "Home loan for NRI customers available",
          "Balance transfer option offered",
        ],
      },
      "Personal Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Last 3 Months Salary Slips",
          "Bank Statements (3 months)",
        ],
        notes: [
          "Minimum salary required is ₹15,000",
          "Instant approval for pre-qualified customers",
        ],
      },
      "Car Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Proof of Residence/Office",
          "Latest Salary Slip/ITR",
          "Pro-forma Invoice",
        ],
        notes: ["Quick sanction and funding, up to 100% funding on-road price"],
      },
      "Education Loan": {
        requiredDocuments: [
          "Proof of Admission",
          "Schedule of Expenses",
          "Last 2 Years ITR/Form 16 of Co-applicant",
        ],
        notes: ["Loan for overseas and domestic courses covered"],
      },
      "Business Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Existence Proof",
          "Bank Statement (6 months)",
          "Last 2 Years ITR",
        ],
        notes: [
          "Flexible tenure options, collateral-free loans up to ₹50 Lakh",
        ],
      },
      "Gold Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Signature Verification Proof",
          "Ornament Details Form",
        ],
        notes: ["High loan value up to 75% of gold market value"],
      },
      "Agriculture Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Land Possession Certificate",
          "Loan Utilisation Plan",
          "Village Revenue Records",
        ],
        notes: ["Loans for farm equipment, irrigation, and crop cultivation"],
      },
      "Loan Against Property": {
        requiredDocuments: [
          "KYC Documents",
          "Property documents (registered sale deed)",
          "Last 3 months Bank Statement",
          "Income Proof",
        ],
        notes: ["Attractive interest rates available on existing property"],
      },
      "Consumer Durable Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Filled Application Form",
          "Product Quotation",
        ],
        notes: ["Zero processing fee and flexible EMI options"],
      },
      "Credit Card Loan": {
        requiredDocuments: ["ICICI Credit Card", "Loan Application Request"],
        notes: ["Instant processing, no separate documents required"],
      },
      "Overdraft / Cash Credit": {
        requiredDocuments: [
          "KYC Documents",
          "Firm's Constitution Document",
          "Last 3 years Audited Financials",
        ],
        notes: ["Overdraft facility linked to savings account"],
      },
      "Working Capital Loan": {
        requiredDocuments: [
          "CMA Data",
          "Projections for next 1 year",
          "KYC Documents",
          "Stock Statement (Monthly)",
        ],
        notes: ["Customised products for different industry sectors"],
      },
      "Microfinance Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Activity Proof",
          "Loan Utilization Declaration",
        ],
        notes: ["Targeting women entrepreneurs and rural areas"],
      },
      "Mudra Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Location Proof",
          "Details of Equipment to be purchased",
        ],
        notes: ["Focus on new and existing micro-enterprises"],
      },
      "Top-up Loan": {
        requiredDocuments: [
          "Original Loan Agreement",
          "Latest Salary Slip",
          "Bank Statement",
        ],
        notes: ["Can be availed on Home Loan and Loan Against Property"],
      },
    },
  },
  // --- 4. Punjab National Bank (PNB) ---
  {
    bank: "Punjab National Bank",
    loans: {
      "Home Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Income Proof (6 months salary/ITR)",
          "Bank Statement (1 year)",
          "Property Title Documents",
        ],
        notes: [
          "Maximum loan tenure of 30 years",
          "Special schemes for government employees",
        ],
      },
      "Personal Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Salary Slip (3 months)",
          "Last 1 Year Bank Statement",
        ],
        notes: ["Purpose can be medical emergency or marriage"],
      },
      "Car Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Driving License",
          "Pro-forma Invoice",
          "Income Proof",
        ],
        notes: ["Low-interest rates for new vehicles"],
      },
      "Education Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Course & Fee Details",
          "Mark Sheets/Degree Certificate",
        ],
        notes: ["No margin for loans up to ₹4 Lakh"],
      },
      "Business Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Registration Certificate",
          "Last 3 Years Audited Balance Sheet",
        ],
        notes: ["Term Loan and Working Capital options available"],
      },
      "Gold Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Valuation Certificate",
          "Application with undertaking",
        ],
        notes: ["Loans against gold ornaments and jewelry"],
      },
      "Agriculture Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Land Records (Khatauni/Khasra)",
          "Declaration on Non-Dues",
          "Crop Insurance Details",
        ],
        notes: ["Kisan Credit Card (KCC) available"],
      },
      "Loan Against Property": {
        requiredDocuments: [
          "KYC Documents",
          "Latest Utility Bill",
          "Property Sale Deed",
          "Income Documents",
        ],
        notes: ["Loan sanctioned up to 70% of property value"],
      },
      "Consumer Durable Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Dealer's Invoice",
          "Salary Slip (Recent)",
        ],
        notes: ["Available for purchase of white goods and electronics"],
      },
      "Credit Card Loan": {
        requiredDocuments: ["PNB Credit Card", "Loan Request Form"],
        notes: ["Loan against card limit available"],
      },
      "Overdraft / Cash Credit": {
        requiredDocuments: [
          "KYC Documents",
          "Board Resolution (for company)",
          "Stock & Book Debt Statement",
          "GST/VAT Registration",
        ],
        notes: ["Suitable for managing cash flow fluctuations"],
      },
      "Working Capital Loan": {
        requiredDocuments: [
          "CMA Data",
          "KYC Documents",
          "Projections for Working Capital",
        ],
        notes: ["Loan limit depends on estimated sales and working cycle"],
      },
      "Microfinance Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Recommendation from SHG/JLG",
          "Loan Utilization Plan",
        ],
        notes: ["Loans provided to members of Joint Liability Groups (JLGs)"],
      },
      "Mudra Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Proposal",
          "Machinery Quotation",
        ],
        notes: ["PNB is an authorized lending institution for Mudra"],
      },
      "Top-up Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Existing Loan Statement",
          "Updated Income Proof",
        ],
        notes: ["Available on existing PNB Home Loan"],
      },
    },
  },
  // --- 5. Bank of Baroda (BoB) ---
  {
    bank: "Bank of Baroda",
    loans: {
      "Home Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Income Proof (ITR/Salary Slips)",
          "Title Deeds",
          "Loan Acknowledgment (if already running)",
        ],
        notes: ["Competitive interest rates and transparent processing"],
      },
      "Personal Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Salary Slip (3 months)",
          "Bank Statement (6 months)",
        ],
        notes: ["Loan available for salaried and pension account holders"],
      },
      "Car Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Invoice/Estimate",
          "Proof of Income",
          "Driving License",
        ],
        notes: ["Financing up to 90% of the cost of the car"],
      },
      "Education Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Admission Proof",
          "Future Income Projection (after study)",
        ],
        notes: ["Special interest rates for premier institutions"],
      },
      "Business Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Profile",
          "Audited Financials (3 years)",
          "Bank Statement (1 year)",
        ],
        notes: ["Loans for traders, manufacturers, and service providers"],
      },
      "Gold Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Ornament Valuation Report",
          "Application Form",
        ],
        notes: ["Purpose can be personal or business needs"],
      },
      "Agriculture Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Pattadar Passbook",
          "Crop Sowing Statement",
          "Land Mortgage Details",
        ],
        notes: ["Focus on short-term and long-term agricultural credit needs"],
      },
      "Loan Against Property": {
        requiredDocuments: [
          "KYC Documents",
          "Property Tax Receipt",
          "Sale Deed",
          "Income Statement",
        ],
        notes: ["Overdraft facility also available against property"],
      },
      "Consumer Durable Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Pro-forma Invoice",
          "Income Proof",
        ],
        notes: ["Loan to buy household appliances and electronics"],
      },
      "Credit Card Loan": {
        requiredDocuments: ["Active BOB Credit Card", "Signed Request Form"],
        notes: ["Flexible EMI conversion of credit card outstanding"],
      },
      "Overdraft / Cash Credit": {
        requiredDocuments: [
          "KYC Documents",
          "Statement of Assets and Liabilities",
          "GST/VAT Return Copies",
        ],
        notes: ["For working capital requirements of businesses"],
      },
      "Working Capital Loan": {
        requiredDocuments: [
          "Business Registration Proof",
          "CMA Data",
          "KYC Documents",
        ],
        notes: ["Assessment based on cash budget and projected turnover"],
      },
      "Microfinance Loan": {
        requiredDocuments: [
          "KYC Documents",
          "SHG/JLG Membership Proof",
          "Business Activity Plan",
        ],
        notes: ["Facilitating livelihood enhancement through micro-credit"],
      },
      "Mudra Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Proposal",
          "License/Registration Proof",
        ],
        notes: ["BoB participates actively in the Mudra scheme"],
      },
      "Top-up Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Original Loan Sanction Letter",
          "Latest Income Proof",
        ],
        notes: ["Can be taken against existing Baroda Home Loan"],
      },
    },
  },
  // --- 6. Canara Bank ---
  {
    bank: "Canara Bank",
    loans: {
      "Home Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Salary Certificate/ITR",
          "Bank Statement (6 months)",
          "Non-encumbrance Certificate",
        ],
        notes: ["Low-interest rates, no pre-payment penalty on floating rates"],
      },
      "Personal Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Last 3 Months Salary Certificate",
          "Bank Statement",
        ],
        notes: ["Loan for salaried employees and pensioners"],
      },
      "Car Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Pro-forma Invoice",
          "Driving License",
          "Income Proof",
        ],
        notes: ["Financing for new and used cars"],
      },
      "Education Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Admission Proof",
          "Co-obligant Income Proof",
          "Academic Progress Report",
        ],
        notes: ["Coverage for domestic and international studies"],
      },
      "Business Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Profile",
          "Last 3 Years Financial Statements",
          "GST Registration",
        ],
        notes: ["Tailored products for MSMEs"],
      },
      "Gold Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Loan Request Application",
          "Gold Valuation Report",
        ],
        notes: ["Hassle-free process, flexible loan quantum"],
      },
      "Agriculture Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Land Records",
          "Cultivation Certificate",
          "No-Dues Certificate",
        ],
        notes: [
          "Loans for working capital and long-term investments in agriculture",
        ],
      },
      "Loan Against Property": {
        requiredDocuments: [
          "KYC Documents",
          "Property Ownership Proof",
          "Latest Form 16/ITR",
          "Bank Statement",
        ],
        notes: ["Loan against mortgage of residential/commercial property"],
      },
      "Consumer Durable Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Dealer's Quotation",
          "Recent Utility Bill",
        ],
        notes: ["Simple documentation and fast approval"],
      },
      "Credit Card Loan": {
        requiredDocuments: ["Active Canara Credit Card", "Loan Request"],
        notes: ["Easy EMI conversion option"],
      },
      "Overdraft / Cash Credit": {
        requiredDocuments: [
          "KYC Documents",
          "Stock Statement",
          "Book Debt Statement",
          "Audited Financials",
        ],
        notes: ["For working capital requirements"],
      },
      "Working Capital Loan": {
        requiredDocuments: ["Business Plan", "KYC Documents", "Project Report"],
        notes: ["Assessed based on projected financial data"],
      },
      "Microfinance Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Activity Proof",
          "SHG/JLG Minutes of Meeting",
        ],
        notes: ["Credit linkage programs for micro-entrepreneurs"],
      },
      "Mudra Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Project Report",
          "Machinery Quotation",
        ],
        notes: ["PNB is an authorized lending institution for Mudra"],
      },
      "Top-up Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Current Loan Statement",
          "Updated Income Proof",
        ],
        notes: ["Available to existing Canara Home Loan borrowers"],
      },
    },
  },
  // --- 7. Axis Bank ---
  {
    bank: "Axis Bank",
    loans: {
      "Home Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Application Form",
          "Income Proof (ITR/Salary Slips)",
          "Property Title Documents",
          "Processing Fee Cheque",
        ],
        notes: [
          "Easiest approval process for salaried class",
          "No hidden charges",
        ],
      },
      "Personal Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Salary Slip (3 months)",
          "Bank Statement (3 months)",
        ],
        notes: ["Minimum monthly income of ₹15,000 required"],
      },
      "Car Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Pro-forma Invoice",
          "Driving License",
          "Income Proof",
        ],
        notes: ["New and used car financing up to 100% on-road price"],
      },
      "Education Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Admission Letter",
          "University Fee Structure",
          "Co-borrower Income Proof",
        ],
        notes: ["Loans for both domestic and international education"],
      },
      "Business Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Continuity Proof",
          "Audited Financials (2 years)",
          "Bank Statement (6 months)",
        ],
        notes: ["Collateral-free business loans available"],
      },
      "Gold Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Gold Valuation Report",
          "Signed Loan Agreement",
        ],
        notes: ["Attractive interest rates and instant processing"],
      },
      "Agriculture Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Land Records (7/12 extract)",
          "Irrigation Proof",
          "Crop Inspection Report",
        ],
        notes: ["Loans for working capital and farm development"],
      },
      "Loan Against Property": {
        requiredDocuments: [
          "KYC Documents",
          "Property Sale Deed",
          "Occupancy Certificate",
          "Income Documents",
        ],
        notes: ["Available against residential and commercial property"],
      },
      "Consumer Durable Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Latest Utility Bill",
          "Product Quotation",
        ],
        notes: ["Available at no or minimal down payment"],
      },
      "Credit Card Loan": {
        requiredDocuments: ["Active Axis Credit Card", "Signed Loan Request"],
        notes: ["Easy process for existing cardholders"],
      },
      "Overdraft / Cash Credit": {
        requiredDocuments: [
          "KYC Documents",
          "Business Registration",
          "Bank Statements",
          "Stock & Book Debt Statements",
        ],
        notes: ["Flexible repayment tenure for CC/OD limits"],
      },
      "Working Capital Loan": {
        requiredDocuments: [
          "Business Profile",
          "CMA Data",
          "KYC Documents",
          "Tax Returns (2 years)",
        ],
        notes: ["Loan limit depends on operational requirements"],
      },
      "Microfinance Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Proof of Business Activity",
          "Group Membership Proof",
        ],
        notes: ["Focus on women Self Help Groups"],
      },
      "Mudra Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Machinery Purchase Quotation",
          "Business Setup Proof",
        ],
        notes: ["Provides financing for micro and small businesses"],
      },
      "Top-up Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Original Loan Account Statement",
          "Updated Income Proof",
        ],
        notes: ["Quick disbursal and minimal documentation"],
      },
    },
  },
  // --- 8. Union Bank of India (UBI) ---
  {
    bank: "Union Bank of India",
    loans: {
      "Home Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Salary Certificate/ITR (3 years)",
          "Bank Statement (1 year)",
          "Property Documents (Sale Deed, etc.)",
        ],
        notes: [
          "Special interest rates for women applicants",
          "Flexible repayment options",
        ],
      },
      "Personal Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Salary Slip (3 months)",
          "Bank Statement (6 months)",
        ],
        notes: ["Available for permanent government employees and pensioners"],
      },
      "Car Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Pro-forma Invoice",
          "Driving License",
          "Latest Salary Slip",
        ],
        notes: ["Financing for new car purchase"],
      },
      "Education Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Proof of Admission",
          "Fee Receipt",
          "Co-applicant Income Proof",
        ],
        notes: ["No security required for loans up to ₹7.5 Lakh"],
      },
      "Business Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Registration",
          "Financial Statements (3 years)",
          "Bank Statement (1 year)",
        ],
        notes: ["Term Loan and Working Capital facilities offered"],
      },
      "Gold Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Valuer Certificate",
          "Loan Application Form",
        ],
        notes: ["Low-interest rates and quick processing"],
      },
      "Agriculture Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Land Records",
          "Crop Loan Sanction Authority",
          "Patwari/Tehsildar Report",
        ],
        notes: ["Various schemes for different agricultural needs"],
      },
      "Loan Against Property": {
        requiredDocuments: [
          "KYC Documents",
          "Property Chain Documents",
          "Income Proof",
          "Latest Utility Bill",
        ],
        notes: ["Loan against mortgage of residential/commercial property"],
      },
      "Consumer Durable Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Quotation of Item",
          "Recent Bank Statement",
        ],
        notes: ["Simplified procedure and quick approval"],
      },
      "Credit Card Loan": {
        requiredDocuments: ["Union Bank Credit Card", "Loan Request"],
        notes: ["Loan conversion option available for card outstanding"],
      },
      "Overdraft / Cash Credit": {
        requiredDocuments: [
          "KYC Documents",
          "Stock Statement",
          "Book Debt Statement",
          "Audited Financials",
        ],
        notes: ["For working capital and trading activities"],
      },
      "Working Capital Loan": {
        requiredDocuments: [
          "Business Profile",
          "CMA Data",
          "KYC Documents",
          "Tax Returns",
        ],
        notes: ["Loan limit assessed based on working cycle"],
      },
      "Microfinance Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Proof of Residence",
          "JLG/SHG Formation Document",
        ],
        notes: ["Promoting financial inclusion in rural and semi-urban areas"],
      },
      "Mudra Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Proposal",
          "Quotation for Assets",
        ],
        notes: ["Financing for non-farm income generating activities"],
      },
      "Top-up Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Existing Loan Statement",
          "Updated Income Proof",
        ],
        notes: ["Available on satisfactory repayment of original loan"],
      },
    },
  },
  // --- 9. Bank of India (BOI) ---
  {
    bank: "Bank of India",
    loans: {
      "Home Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Application with Photograph",
          "Income Proof (ITR/Form 16)",
          "Property Documents (Sale Deed)",
        ],
        notes: ["Longer repayment tenure available", "Low processing fee"],
      },
      "Personal Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Salary Slip (3 months)",
          "Bank Statement (6 months)",
        ],
        notes: ["Loans for salaried class and pensioners"],
      },
      "Car Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Pro-forma Invoice",
          "Income Proof",
          "Last 6 Months Bank Statement",
        ],
        notes: ["Finance for new and used cars up to 85% of cost"],
      },
      "Education Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Admission Letter",
          "Cost of Study Statement",
          "Co-applicant Financial Documents",
        ],
        notes: ["Covers tuition, maintenance, and travel expenses"],
      },
      "Business Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Registration",
          "Financial Statements (3 years)",
          "Bank Statement (1 year)",
        ],
        notes: ["Funding for growth and expansion of business"],
      },
      "Gold Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Loan Request Form",
          "Ornament Valuation Certificate",
        ],
        notes: ["Quick approval and disbursal process"],
      },
      "Agriculture Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Land Record Extract",
          "Project Report (for high value loans)",
          "Village Officer's Income Proof",
        ],
        notes: ["Financing for various agricultural purposes"],
      },
      "Loan Against Property": {
        requiredDocuments: [
          "KYC Documents",
          "Property Title Deed",
          "Tax Receipts",
          "Income Documents",
        ],
        notes: ["Loan against mortgage of immovable property"],
      },
      "Consumer Durable Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Dealer's Invoice",
          "Income Proof",
        ],
        notes: ["Available at no or low down payment"],
      },
      "Credit Card Loan": {
        requiredDocuments: ["BOI Credit Card", "Loan Request"],
        notes: ["Quick conversion of outstanding into EMIs"],
      },
      "Overdraft / Cash Credit": {
        requiredDocuments: [
          "KYC Documents",
          "Stock & Book Debt Statement",
          "Audited Financials",
          "GST/VAT returns",
        ],
        notes: ["For working capital requirements"],
      },
      "Working Capital Loan": {
        requiredDocuments: [
          "Business Profile",
          "CMA Data",
          "KYC Documents",
          "Tax Returns (3 years)",
        ],
        notes: ["Limits are reviewed annually"],
      },
      "Microfinance Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Proof of Business Activity",
          "Group Resolution",
        ],
        notes: ["Loans for economic activities of low-income groups"],
      },
      "Mudra Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Proposal",
          "Equipment Quotation",
        ],
        notes: ["BOI actively supports the Mudra scheme"],
      },
      "Top-up Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Existing Loan Repayment Record",
          "Updated Income Proof",
        ],
        notes: ["Available on satisfactory repayment of Home Loan"],
      },
    },
  },
  // --- 10. Indian Overseas Bank (IOB) ---
  {
    bank: "Indian Overseas Bank",
    loans: {
      "Home Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Income Proof (Salary/ITR)",
          "Bank Statement (6 months)",
          "Property Ownership Proof",
        ],
        notes: ["Long repayment period of up to 30 years"],
      },
      "Personal Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Salary Slip (3 months)",
          "Bank Statement (6 months)",
        ],
        notes: ["Loan for salaried employees and pensioners"],
      },
      "Car Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Pro-forma Invoice",
          "Driving License",
          "Income Proof",
        ],
        notes: ["Financing for new and pre-owned cars"],
      },
      "Education Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Admission Letter",
          "Schedule of Expenses",
          "Co-applicant Income Proof",
        ],
        notes: ["Moratorium period available"],
      },
      "Business Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Registration",
          "Financial Statements (3 years)",
          "Bank Statement (1 year)",
        ],
        notes: ["Loans for MSME sector available"],
      },
      "Gold Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Ornament Valuation Report",
          "Application Form",
        ],
        notes: ["Quick processing and competitive interest rates"],
      },
      "Agriculture Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Land Records",
          "Cultivation Details",
          "Income Certificate",
        ],
        notes: ["Finance for crop, farm equipment, and allied activities"],
      },
      "Loan Against Property": {
        requiredDocuments: [
          "KYC Documents",
          "Property Sale Deed",
          "Encumbrance Certificate",
          "Income Documents",
        ],
        notes: ["Loan sanctioned up to 70% of property value"],
      },
      "Consumer Durable Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Dealer's Invoice",
          "Income Proof",
        ],
        notes: ["Loan to purchase durable goods"],
      },
      "Credit Card Loan": {
        requiredDocuments: ["IOB Credit Card", "Loan Request"],
        notes: ["Easy EMI conversion facility"],
      },
      "Overdraft / Cash Credit": {
        requiredDocuments: [
          "KYC Documents",
          "Stock & Book Debt Statement",
          "Audited Financials",
          "Board Resolution",
        ],
        notes: ["For working capital needs"],
      },
      "Working Capital Loan": {
        requiredDocuments: [
          "Business Profile",
          "CMA Data",
          "KYC Documents",
          "Tax Returns",
        ],
        notes: ["Loan limits are determined by the working cycle"],
      },
      "Microfinance Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Proof of Business Activity",
          "SHG/JLG Membership",
        ],
        notes: ["Group loans for income generation"],
      },
      "Mudra Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Business Proposal",
          "Quotation for Assets",
        ],
        notes: ["IOB supports all three Mudra categories"],
      },
      "Top-up Loan": {
        requiredDocuments: [
          "KYC Documents",
          "Existing Loan Statement",
          "Updated Income Proof",
        ],
        notes: ["Available to existing Home Loan customers"],
      },
    },
  },
];
