const hospitals = [
    {
      name: "HLG Memorial Hospital",
      address: "Sen Raleigh Road, Asansol 713305",
      phone: "08101880088",
      website: "https://hlghospital.com/"
    },
    {
      name: "Sterling Hospital",
      address: "Asansol Court Area, Bardhaman",
      phone: "Not Available",
      website: "https://www.thesterlinghospital.com/"
    },
    {
      name: "Healthworld Hospitals",
      address: "Block - A, Shristi Nagar, Asansol – 713305",
      phone: "Not Available",
      website: "https://healthworldhospitals.com/"
    },
    {
      name: "Asansol District Hospital",
      address: "SB Gorai Rd, Hamid Nagar, Asansol, West Bengal 713301",
      phone: "0341-2302388",
      website: "https://www.wbhealth.gov.in/"
    },
    {
      name: "Midwest Hospital & Medical Institute",
      address: "Asansol, Bardhaman",
      phone: "Not Available",
      website: "Not Available"
    },
    {
      name: "Asansol Medical Centre Pvt. Ltd.",
      address: "Chelidanga, Bardhaman",
      phone: "Not Available",
      website: "Not Available"
    },
    {
      name: "BLESS Hospital",
      address: "Asansol, West Bengal",
      phone: "Not Available",
      website: "Not Available"
    },
    {
      name: "G Guru Gopiram Hospital",
      address: "Asansol, West Bengal",
      phone: "Not Available",
      website: "Not Available"
    },
    {
      name: "Kamalalaya Hospital",
      address: "Asansol, West Bengal",
      phone: "Not Available",
      website: "Not Available"
    },
    {
      name: "Hillview Multispeciality Hospital",
      address: "Asansol, West Bengal",
      phone: "Not Available",
      website: "Not Available"
    },
    {
      name: "The Mines Board of Health Hospital (MBHH)",
      address: "Asansol, West Bengal",
      phone: "Not Available",
      website: "Not Available"
    },
    {
      name: "Fastshine Nursing Home",
      address: "Asansol, West Bengal",
      phone: "Not Available",
      website: "Not Available"
    }
  ];
  
  const container = document.getElementById('hospital-list');
  
  hospitals.forEach(hospital => {
    const card = document.createElement('div');
    card.className = 'hospital-card';
    card.innerHTML = `
      <h2>${hospital.name}</h2>
      <p><strong>Address:</strong> ${hospital.address}</p>
      <p><strong>Phone:</strong> ${hospital.phone}</p>
      ${hospital.website !== "Not Available" ? `<p><a href="${hospital.website}" target="_blank">Visit Website</a></p>` : ''}
    `;
    container.appendChild(card);
  });
  