"use client";

import React, { useEffect, useState } from "react";
import "../../components/styles.css";
import DropdownInfo from "../../components/DropdownInfo";
import QualificationBox from "../../components/QualificationBox";

const Score: React.FC = () => {
  const [scoreData, setScoreData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track the currently open dropdown

  useEffect(() => {
    const storedScoreData = sessionStorage.getItem("scoreData");
    if (storedScoreData) {
      try {
        setScoreData(JSON.parse(storedScoreData));
      } catch (err) {
        setError("Failed to load score data from session.");
      }
    } else {
      setError("No score data found. Please submit the form first.");
    }
    setLoading(false);
  }, []);

  const handleDropdownToggle = (section: string) => {
    setOpenDropdown((prev) => (prev === section ? null : section)); // Toggle the dropdown
  };

  if (loading) {
    return <div>Calculating your score...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="score-container">
        <div className="score-header">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h3>{scoreData["full-name"]}</h3>
            <p>Success Score Report</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div className="total-score-display">
              {" "}
              {scoreData["total-score"]}
            </div>
            <h2> out of 1400</h2>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "100%",
            alignItems: "flex-start",
          }}
        >
          <h3>Your Score Breakdown</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              width: "100%",
              alignItems: "center",
            }}
          >
            <DropdownInfo
              score={scoreData.education}
              section="Education"
              explanation={scoreData["education-explanation"]}
              improvement={scoreData["education-improvement"]}
              isOpen={openDropdown === "Education"} // Check if this dropdown is open
              onToggle={() => handleDropdownToggle("Education")} // Handle toggle
            />
            <DropdownInfo
              score={scoreData.work}
              section="Work"
              explanation={scoreData["work-explanation"]}
              improvement={scoreData["work-improvement"]}
              isOpen={openDropdown === "Work"}
              onToggle={() => handleDropdownToggle("Work")}
            />
            <DropdownInfo
              score={scoreData.financial}
              section="Financial"
              explanation={scoreData["financial-explanation"]}
              improvement={scoreData["financial-improvement"]}
              isOpen={openDropdown === "Financial"}
              onToggle={() => handleDropdownToggle("Financial")}
            />
            <DropdownInfo
              score={scoreData.health}
              section="Health"
              explanation={scoreData["health-explanation"]}
              improvement={scoreData["health-improvement"]}
              isOpen={openDropdown === "Health"}
              onToggle={() => handleDropdownToggle("Health")}
            />
            <DropdownInfo
              score={scoreData.social}
              section="Social"
              explanation={scoreData["social-explanation"]}
              improvement={scoreData["social-improvement"]}
              isOpen={openDropdown === "Social"}
              onToggle={() => handleDropdownToggle("Social")}
            />
            <DropdownInfo
              score={scoreData.community}
              section="Community"
              explanation={scoreData["community-explanation"]}
              improvement={scoreData["community-improvement"]}
              isOpen={openDropdown === "Community"}
              onToggle={() => handleDropdownToggle("Community")}
            />
            <DropdownInfo
              score={scoreData.legal}
              section="Legal"
              explanation={scoreData["legal-explanation"]}
              improvement={scoreData["legal-improvement"]}
              isOpen={openDropdown === "Legal"}
              onToggle={() => handleDropdownToggle("Legal")}
            />
          </div>
        </div>
      </div>
      <div className="qualify-container">
        <h3> What do you qualify for?</h3>
        <div className="qualification-grid">
    <QualificationBox
      title="Student Loan Eligibility"
      description="Based on your profile, you may qualify for up to $15,000 in student loans with interest rates starting at 4.5% APR and flexible repayment options."
    />
    <QualificationBox
      title="Career Matches for You"
      description="Your experience aligns with 5 job opportunities in technology, offering salaries from $55,000/year and benefits like health insurance and 401(k)."
    />
    <QualificationBox
      title="Health Coverage Options"
      description="You qualify for a Silver-tier plan starting at $210/month, covering preventive care, prescriptions, and emergency services."
    />
    <QualificationBox
      title="Credit Cards You Can Get"
      description="You’re eligible for 3 credit cards with a credit limit up to $2,000 and APRs from 17.5%. Options include cashback and no annual fee."
    />
    <QualificationBox
      title="Housing Support & Vouchers"
      description="You may be eligible for rental assistance through local housing programs, offering monthly subsidies of up to $900."
    />
    <QualificationBox
      title="Grant & Scholarship Matches"
      description="You may qualify for up to $5,000 in education grants or scholarships from state and nonprofit sources."
    />
    <QualificationBox
      title="Childcare Program Eligibility"
      description="You qualify for subsidized childcare support, covering up to 70% of daycare costs through accredited local providers."
    />
    <QualificationBox
      title="Free or Low-Cost Legal Help"
      description="You’re eligible for assistance with tenant rights and family law through free or sliding-scale legal aid clinics."
    />
    <QualificationBox
      title="Small Business Funding & Support"
      description="You're eligible for up to $10,000 in small business startup funding with interest rates from 6.25% APR and access to free mentorship."
    />
  </div>
      </div>
    </div>
  );
};

export default Score;
