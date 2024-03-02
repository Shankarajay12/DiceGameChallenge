import React, { useState } from 'react';
import styled from 'styled-components';

const RoleDice = ({currentDice,ClickDice}) => {





    return (
        <DiceContainer>

            <div className='dice'
            onClick={ClickDice}
            >
                <img src={`/images/dice_${currentDice}.png`}/>
            </div>
            <p>Click on the Dice to Roll</p>
        </DiceContainer>
    );
}

export default RoleDice;
const DiceContainer =styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

p{
font-size: 24px;
}
.dice{
    cursor: pointer;
}

`;
