"use client";

import React, { useEffect, useState } from "react";
import "../../components/styles.css";
import DropdownInfo from "../../components/DropdownInfo";

const Score: React.FC = () => {
  const [scoreData, setScoreData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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

  if (loading) {
    return <div>Calculating your score...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="score-container">
      <div className="score-header">
        <div style={{ gap: "8px", alignItems: "center", display: "flex", flexDirection: "column" }}>
          <h3>{scoreData["full-name"]}</h3>
          <p>Success Score Report</p>
        </div>
        <div className="total-score-display"> {scoreData["total-score"]}</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%", alignItems: "center" }}>
        <DropdownInfo
          score={scoreData.education}
          section="Education"
          explanation={scoreData["education-explanation"]}
          improvement={scoreData["education-improvement"]}
        />
        <DropdownInfo
          score={scoreData.work}
          section="Work"
          explanation={scoreData["work-explanation"]}
          improvement={scoreData["work-improvement"]}
        />
        <DropdownInfo
          score={scoreData.financial}
          section="Financial"
          explanation={scoreData["financial-explanation"]}
          improvement={scoreData["financial-improvement"]}
        />
        <DropdownInfo
          score={scoreData.health}
          section="Health"
          explanation={scoreData["health-explanation"]}
          improvement={scoreData["health-improvement"]}
        />
        <DropdownInfo
          score={scoreData.social}
          section="Social"
          explanation={scoreData["social-explanation"]}
          improvement={scoreData["social-improvement"]}
        />
        <DropdownInfo
          score={scoreData.community}
          section="Community"
          explanation={scoreData["community-explanation"]}
          improvement={scoreData["community-improvement"]}
        />
        <DropdownInfo
          score={scoreData.legal}
          section="Legal"
          explanation={scoreData["legal-explanation"]}
          improvement={scoreData["legal-improvement"]}
        />
      </div>
    </div>
  );
};

export default Score;
