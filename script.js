// =========================================================================
// 1. LOAN DOCUMENT CHECKER LOGIC (For document_checker.html)
// =========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Check if the documents table exists (means we are on the correct page)
  if (document.getElementById("documentsTable")) {
    populateDocumentTable();
    populateLoanTypeFilter();
    // Initial display
    filterDocuments();
  }

  // Attach event listener for the chatbot page elements (if present)
  const sendBtn = document.getElementById("sendBtn");
  if (sendBtn) {
    sendBtn.addEventListener("click", handleChatInput);
  }

  // New feature: Attach requirement check listener to a button on the ranking page
  // This assumes ranking.html has a button that calls 'goToDocumentChecker(bankName, loanType)'
  // (This part requires you to modify ranking.html)
});

// Function to dynamically load and display all data rows
function populateDocumentTable() {
  const tableBody = document.querySelector("#documentsTable tbody");
  tableBody.innerHTML = "";

  // Check if simulated data is available
  if (typeof bankDocuments === "undefined" || bankDocuments.length === 0) {
    const row = tableBody.insertRow();
    const cell = row.insertCell();
    cell.colSpan = 3;
    cell.textContent =
      "Error: Document data is not loaded. Please check bank_documents.js.";
    return;
  }

  bankDocuments.forEach((item) => {
    const row = tableBody.insertRow();
    row.dataset.bank = item.Bank; // Store data for filtering
    row.dataset.loanType = item.LoanType;

    row.insertCell().textContent = item.Bank;
    row.insertCell().textContent = item.LoanType;

    // Format documents as an unordered list in the cell
    const docCell = row.insertCell();
    const ul = document.createElement("ul");
    ul.classList.add("doc-list");
    item.Documents.forEach((doc) => {
      const li = document.createElement("li");
      li.textContent = doc;
      ul.appendChild(li);
    });
    docCell.appendChild(ul);
  });
}

// Function to populate the Loan Type dropdown dynamically
function populateLoanTypeFilter() {
  const filter = document.getElementById("loanTypeFilter");
  // Assuming 'banks' array is available globally from banks.js
  const uniqueLoanTypes = [...new Set(banks.map((b) => b.LoanType))].sort();

  uniqueLoanTypes.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    filter.appendChild(option);
  });
}

// Function to filter the table based on search box and dropdown
function filterDocuments() {
  const bankFilter = document.getElementById("bankSearch").value.toUpperCase();
  const loanTypeFilter = document.getElementById("loanTypeFilter").value;
  const rows = document.querySelectorAll("#documentsTable tbody tr");

  rows.forEach((row) => {
    const bankName = row.dataset.bank.toUpperCase();
    const loanType = row.dataset.loanType;

    const bankMatch = bankName.indexOf(bankFilter) > -1;
    const loanMatch = loanTypeFilter === "" || loanType === loanTypeFilter;

    if (bankMatch && loanMatch) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Function to handle button click from the ranking page (for the 'check requrement' button)
function goToDocumentChecker(bankName, loanType) {
  // Save the filter parameters to sessionStorage/localStorage before redirecting
  sessionStorage.setItem("filterBank", bankName);
  sessionStorage.setItem("filterLoanType", loanType);
  window.location.href = "document_checker.html";
}

// Apply filters if redirected from the ranking page
if (
  sessionStorage.getItem("filterBank") ||
  sessionStorage.getItem("filterLoanType")
) {
  document.addEventListener("DOMContentLoaded", () => {
    const bank = sessionStorage.getItem("filterBank");
    const loan = sessionStorage.getItem("filterLoanType");

    if (bank) {
      document.getElementById("bankSearch").value = bank;
    }
    if (loan) {
      document.getElementById("loanTypeFilter").value = loan;
    }

    filterDocuments(); // Apply the search criteria

    // Clear session storage once filters are applied
    sessionStorage.removeItem("filterBank");
    sessionStorage.removeItem("filterLoanType");
  });
}

// =========================================================================
// 2. AI CHATBOT LOGIC (Updated document search)
// =========================================================================

// (Keep the displayMessage and handleChatInput functions as they were,
//  and update the generateBotResponse function below)

function generateBotResponse(query) {
  const q = query.toLowerCase();

  // Helper function to extract loan type keyword
  function getLoanType(query) {
    const loanTypes = [
      "home loan",
      "personal loan",
      "education loan",
      "car loan",
      "gold loan",
      "business loan",
      "agriculture loan",
      "loan against property",
      "consumer durable loan",
      "credit card loan",
      "overdraft / cash credit",
      "working capital loan",
      "microfinance loan",
      "mudra loan",
      "top-up loan",
    ];
    for (const type of loanTypes) {
      if (q.includes(type)) {
        // Return the canonical (correctly capitalized) name
        return banks.find((b) => b.LoanType.toLowerCase() === type)?.LoanType;
      }
    }
    return null;
  }

  // Helper function to extract bank name
  function getBankName(query) {
    const bankMatch = banks.find((b) => q.includes(b.Bank.toLowerCase()));
    return bankMatch ? bankMatch.Bank : null;
  }

  // ... (Keep LOWEST RATE and MIN CIBIL/INCOME/FEE queries here) ...

  // --- NEW / UPDATED DOCUMENTATION QUERY ---
  if (
    q.includes("document") ||
    q.includes("paperwork") ||
    q.includes("required")
  ) {
    const type = getLoanType(q);
    const bankName = getBankName(q);

    if (bankName && type && typeof bankDocuments !== "undefined") {
      const docInfo = bankDocuments.find(
        (d) => d.Bank === bankName && d.LoanType === type
      );
      if (docInfo) {
        const docsList = docInfo.Documents.join(", ");
        return `For a **${type}** at **${bankName}**, the main documents required are: ${docsList}. You can check the full list on the Documents page.`;
      }
    }

    if (!type || !bankName) {
      return "To check document requirements, please specify both the **Bank** and the **Loan Type** (e.g., *'Documents for a Home Loan at HDFC Bank'*).";
    }
    // Fallback if type and bank are specified but not in our document list
    return `I couldn't find the specific document list for **${type}** at **${bankName}**. Please visit the **Document Requirements** page for the most up-to-date list.`;
  }

  // ... (Keep FALLBACK / GENERAL GREETING here) ...

  // Default fallback
  return "I apologize, I can only provide information on interest rates, CIBIL/Income criteria, and documents. Could you please rephrase your question? Try: *'Best Car Loan rate'* or *'Min CIBIL for Education Loan'*.";
}

function showDocuments(loanType, bankName) {
  console.log("DEBUG → loanType:", loanType, "bankName:", bankName);
  if (typeof loanDocuments === "undefined") {
    alert("⚠ Document data not loaded. Please check bank_loan_documents.js");
    return;
  }

  const docs = loanDocuments[loanType] || ["No documents available"];
  alert(
    "🏦 " +
      bankName +
      "\n📌 Required Documents for " +
      loanType +
      ":\n\n- " +
      docs.join("\n- ")
  );
}

// NOTE: This script assumes global access to:
// 1. banks (from banks.js - for general loan type data/dropdown population)
// 2. bankLoanDocuments (from bank_loan_documents.js - for detailed nested document data)

document.addEventListener("DOMContentLoaded", () => {
  // Check if the documents table exists (means we are on the correct page)
  if (document.getElementById("documentsTable")) {
    populateDocumentTable();
    populateLoanTypeFilter();
    // Initial filter application and check for ranking page redirection filters
    checkAndApplyFilters();
  }
  // Add other page initializations here (e.g., for chatbot.html)
  // ...
});

// =========================================================================
// 1. DATA POPULATION AND DISPLAY
// =========================================================================

function populateDocumentTable() {
  const tableBody = document.querySelector("#documentsTable tbody");
  tableBody.innerHTML = "";

  // Check for the nested data array
  if (
    typeof bankLoanDocuments === "undefined" ||
    bankLoanDocuments.length === 0
  ) {
    const row = tableBody.insertRow();
    const cell = row.insertCell();
    cell.colSpan = 3;
    // This is the error message the user reported, which helps debug file loading
    cell.textContent =
      "Error: Document data (bankLoanDocuments) is not loaded or is empty.";
    return;
  }

  bankLoanDocuments.forEach((bankEntry) => {
    const bankName = bankEntry.bank;
    const loans = bankEntry.loans;

    // Iterate through each loan type within the bank's entry
    for (const loanType in loans) {
      const loanInfo = loans[loanType];

      const row = tableBody.insertRow();
      // Store data for JavaScript filtering on the row
      row.dataset.bank = bankName;
      row.dataset.loanType = loanType;

      row.insertCell().textContent = bankName;
      row.insertCell().textContent = loanType;

      // Format documents and notes into the third cell
      const infoCell = row.insertCell();

      // 1. Required Documents List
      const docsUL = document.createElement("ul");
      docsUL.classList.add("doc-list");
      loanInfo.requiredDocuments.forEach((doc) => {
        const li = document.createElement("li");
        li.textContent = doc;
        docsUL.appendChild(li);
      });
      infoCell.appendChild(document.createTextNode("Key Documents:"));
      infoCell.appendChild(docsUL);

      // 2. Notes List (Optional)
      if (loanInfo.notes && loanInfo.notes.length > 0) {
        infoCell.appendChild(document.createTextNode("Important Notes:"));
        const notesUL = document.createElement("ul");
        notesUL.classList.add("notes-list");
        loanInfo.notes.forEach((note) => {
          const li = document.createElement("li");
          li.textContent = note;
          notesUL.appendChild(li);
        });
        infoCell.appendChild(notesUL);
      }

      // 3. Chatbot Button Link (to Ask AI about this specific loan)
      const chatButton = document.createElement("button");
      chatButton.textContent = "Ask AI 💬";
      chatButton.classList.add("chat-button");
      chatButton.onclick = () => launchChatbotWithQuery(bankName, loanType);

      infoCell.appendChild(chatButton);
    }
  });
}

function populateLoanTypeFilter() {
  const filter = document.getElementById("loanTypeFilter");
  // We use the flat 'banks' data as a reliable source for all loan types
  if (typeof banks === "undefined") return;

  // Extract unique loan types from banks.js
  const uniqueLoanTypes = [...new Set(banks.map((b) => b.LoanType))].sort();

  uniqueLoanTypes.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    filter.appendChild(option);
  });
}

// =========================================================================
// 2. FILTERING AND REDIRECTION LOGIC
// =========================================================================

function filterDocuments() {
  const bankSearchInput = document.getElementById("bankSearch");
  const loanTypeFilterSelect = document.getElementById("loanTypeFilter");

  // Basic check for elements existing
  if (!bankSearchInput || !loanTypeFilterSelect) return;

  const bankFilter = bankSearchInput.value.toUpperCase();
  const loanTypeFilter = loanTypeFilterSelect.value;
  const rows = document.querySelectorAll("#documentsTable tbody tr");

  rows.forEach((row) => {
    // Use the dataset properties set during population
    const bankName = row.dataset.bank.toUpperCase();
    const loanType = row.dataset.loanType;

    const bankMatch = bankName.indexOf(bankFilter) > -1;
    const loanMatch = loanTypeFilter === "" || loanType === loanTypeFilter;

    if (bankMatch && loanMatch) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Function to check if the page was redirected from ranking.html
function checkAndApplyFilters() {
  const bank = sessionStorage.getItem("filterBank");
  const loan = sessionStorage.getItem("filterLoanType");

  if (bank) {
    // Apply filter to the search box
    document.getElementById("bankSearch").value = bank;
  }

  const loanTypeFilter = document.getElementById("loanTypeFilter");
  if (loan && loanTypeFilter.options.length > 1) {
    // Apply filter to the dropdown
    loanTypeFilter.value = loan;
  }

  if (bank || loan) {
    // Run the filter function to show only relevant rows
    filterDocuments();

    // Clear session storage once filters are applied
    sessionStorage.removeItem("filterBank");
    sessionStorage.removeItem("filterLoanType");
  }
}

// --- Placeholder for Chatbot Redirection (Must be in script.js) ---
function launchChatbotWithQuery(bankName, loanType) {
  // This function must exist globally and is called by the button above
  const query = `What documents are required for a ${loanType} at ${bankName}?`;
  sessionStorage.setItem("initialChatQuery", query);
  // Redirect to the chatbot page (assuming your chatbot page is named this way)
  window.location.href = "chatbot.html";
}
