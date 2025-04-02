"use client";

import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';
import "../components/styles.css";

const App: React.FC = () => {
  const [income, setIncome] = useState('');
  const [debt, setDebt] = useState('');
  const [followers, setFollowers] = useState('');
  const [isIncomeValid, setIsIncomeValid] = useState(true);
  const [isDebtValid, setIsDebtValid] = useState(true);
  const [isFollowersValid, setIsFollowersValid] = useState(true);

  const handleSubmit = () => {
    const incomeValid = !isNaN(Number(income)) && Number(income) >= 0;
    const debtValid = !isNaN(Number(debt)) && Number(debt) >= 0;
    const followersValid = !isNaN(Number(followers)) && Number(followers) >= 0;

    setIsIncomeValid(incomeValid);
    setIsDebtValid(debtValid);
    setIsFollowersValid(followersValid);

    if (incomeValid && debtValid && followersValid) {
      console.log({ income, debt, followers });
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <TextInput
        question="Income"
        value={income}
        onChange={setIncome}
        placeholder="Enter your income"
        type="number"
        isValid={isIncomeValid}
      />
      <TextInput
        question="Debt"
        value={debt}
        onChange={setDebt}
        placeholder="Enter your debt"
        type="number"
        isValid={isDebtValid}
      />
      <TextInput
        question="Followers"
        value={followers}
        onChange={setFollowers}
        placeholder="Enter your followers"
        type="number"
        isValid={isFollowersValid}
      />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};

export default App;
