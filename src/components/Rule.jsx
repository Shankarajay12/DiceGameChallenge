import styled from "styled-components";
const Rule = () => {
    return (
        <RuleContainer>
            <h2>How to play the dice game</h2>
            <div className="text">
            <p>Select any number</p>
            <p>Click on the dice image</p>
            <p>After click on the dice if the selected number is
                equals to dice number you will get same point as dice </p>
            <p>If you get the wroung guess thn -2 will be deducted from score</p>
            </div>
        </RuleContainer>
    );
}

export default Rule;
const RuleContainer=styled.div`
background-color: #FBF1F1;
padding: 20px;
max-width: 900px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;
h2{
    font-size: 24px;
}
.text{
margin-top: 24px;
}
`;
