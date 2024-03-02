
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import { useState } from 'react';
import { Button, FirstButton } from './styled/Button';
import Rule from './Rule';


const GamePlay = () => {
    const [selectedNumber,setSelectedNumber]=useState();
    const [currentDice,setCurrentDice]=useState(1);
    const [score,setSCore] =useState(0);
    const [error,setError] =useState("");
    const [showRule,setShowRule] =useState(false);
    const RandomNumber =(min,max)=>{ 
    return Math.floor(Math.random()* (max-min)+min);
};

const ClickDice=()=>{
    if(!selectedNumber) 
    {
    setError("You have not selected any number")
    return; }
    else
    {
        
        const RandNumber=RandomNumber(1,7);
        setCurrentDice((prev)=>RandNumber);
        
        if(selectedNumber == RandNumber)
        {
            setSCore((prev)=>prev+RandNumber);
        }
        else
        {
            setSCore((prev)=>prev-2);
        }
        setSelectedNumber(undefined);
    }
    
}

const ResetScore=()=>{
    setSCore(0);
}

    return (
       <MainContainer>
        < div className='topSection' >
        <TotalScore
        score={score}/>
        <NumberSelector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />
        </div>
        <RoleDice
        currentDice={currentDice}
        ClickDice={ClickDice}
        />
        <div className='btns'>
        <FirstButton onClick={ResetScore}>Reset Score</FirstButton>
        <Button
        onClick={()=>setShowRule( (prev)=>!prev)}
        >
            {showRule?"Hide":"Show"} Rule</Button>
        </div>
        {showRule && <Rule/>}
       </MainContainer>
    );
}

export default GamePlay;
const MainContainer=styled.div`
padding-top: 70px;
.topSection{
    display: flex;
    align-items: end;
    justify-content: space-around;
}
.btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
}
`;
