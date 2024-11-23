document.getElementById('complianceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Capture form data
    const country = document.getElementById('country').value;
    const targetMarket = document.getElementById('targetMarket').value;
    const productType = document.getElementById('productType').value;
    const governmentIncentive = document.getElementById('governmentIncentive').value;

    // Validate form inputs
    if (!country || !targetMarket || !productType) {
        alert("Please fill all the required fields.");
        return;
    }

    // Generate the compliance checklist based on input
    generateComplianceChecklist(country, targetMarket, productType, governmentIncentive);
});

function generateComplianceChecklist(country, targetMarket, productType, governmentIncentive) {
    // Example of AI-generated checklist (this is static for now, replace with dynamic AI logic later)
    let checklist = `<ul>
                        <li><strong>Product Type:</strong> ${productType}</li>
                        <li><strong>Country of Origin:</strong> ${country}</li>
                        <li><strong>Target Market:</strong> ${targetMarket}</li>
                        <li><strong>Government Incentives:</strong> ${governmentIncentive || 'None'}</li>
                        <li><strong>Compliance Documents:</strong> Certification required for ${productType} in ${targetMarket}</li>
                        <li><strong>Taxes:</strong> Ensure to pay taxes as per ${country} and ${targetMarket} regulations.</li>
                        <li><strong>Required Licenses:</strong> Export licenses may be needed depending on the product.</li>
                    </ul>`;

    // Display the generated checklist in the checklistContent div
    document.getElementById('checklistContent').innerHTML = checklist;
}

