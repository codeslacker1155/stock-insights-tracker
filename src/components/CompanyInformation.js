import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const CompanyInformation = () => {
  const [companyInfo, setCompanyInfo] = useState(null);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const response = await api.fetchCompanyInfo();
        setCompanyInfo(response);
      } catch (error) {
        console.error('Error fetching company information:', error);
      }
    };

    fetchCompanyInfo();
  }, []);

  return (
    <div>
      <h2>Company Information</h2>
      {companyInfo ? (
        <div>
          <p>Company Name: {companyInfo.name}</p>
          <p>Industry: {companyInfo.industry}</p>
          <p>Sector: {companyInfo.sector}</p>
          {/* Render additional company information properties as needed */}
        </div>
      ) : (
        <p>Loading company information...</p>
      )}
    </div>
  );
};

export default CompanyInformation;
